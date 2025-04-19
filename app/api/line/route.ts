import { NextResponse } from 'next/server';
import { SurveyFormData } from '@/app/types/survey';

interface LineMessageRequest {
  formData: SurveyFormData;
}

export async function POST(req: Request) {
  try {
    // Parse request data
    const { formData }: LineMessageRequest = await req.json();
    
    // Calculate average rating
    const averageRating = calculateAverageRating(formData);

    // Create formatted message
    const message = createFormattedMessage(formData, averageRating);

    // Send to LINE API
    const response = await sendLineMessage(message);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ 
      error: 'Failed to send message',
      details: error.message 
    }, { status: 500 });
  }
}

// Helper functions
function calculateAverageRating(formData: SurveyFormData): string {
  return (
    (formData.speedRating +
    formData.professionalRating + 
    formData.friendlinessRating + 
    formData.knowledgeRating) / 4
  ).toFixed(2);
}

function createFormattedMessage(formData: SurveyFormData, averageRating: string): string {
  const serviceTypeLabel = {
    'computer_rental': 'เครื่องเช่า',
    'printer_rental': 'ปริ้นเตอร์เช่า',
    'store_service': 'งานบริการหน้าร้าน',
    'onsite_service': 'งาน Onsite'
  }[formData.serviceType] || formData.serviceType;

  let message = `📊 สรุปผลการประเมิน\n
📝 ข้อมูลผู้ประเมิน
ชื่อ: ${formData.fullName}
แผนก: ${formData.department}
บริการ: ${serviceTypeLabel}
\n📈 ผลการประเมิน
คะแนนเฉลี่ย: ${averageRating}/5
- ความรวดเร็ว: ${formData.speedRating}/5
- ความเป็นมืออาชีพ: ${formData.professionalRating}/5
- ความเป็นมิตร: ${formData.friendlinessRating}/5
- การให้คำแนะนำ: ${formData.knowledgeRating}/5`;

//   if (formData.serviceType === 'printer_rental') {
//     message += `\n\n📌 ความต้องการเพิ่มเติม
// - ต้องการ Stock/Spare หมึก: ${formData.wantSpareStock ? '✅' : '❌'}
// - ต้องการข้อมูลการใช้งานรายเดือน: ${formData.wantMonthlyUpdate ? '✅' : '❌'}`;
//   }

  if (formData.feedback) {
    message += `\n\n💬 ข้อเสนอแนะ:\n${formData.feedback}`;
  }

  return message.trim();
}

async function sendLineMessage(message: string) {
  const token = process.env.LINE_CHANNEL_ACCESS_TOKEN?.trim();
  
  const response = await fetch('https://api.line.me/v2/bot/message/broadcast', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      messages: [{
        type: 'text',
        text: message
      }]
    })
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`LINE API Error (${response.status}): ${JSON.stringify(errorData)}`);
  }

  return response;
}