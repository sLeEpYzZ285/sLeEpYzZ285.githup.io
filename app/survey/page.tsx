"use client";

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import * as htmlToImage from 'html-to-image';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Button,
  Progress,
  Select,
  SelectItem,
  RadioGroup,
  Radio,
  Checkbox,
  Textarea
} from "@nextui-org/react";

// Service types
const serviceTypes = [
  { value: "computer_rental", label: "เครื่องเช่า" },
  { value: "printer_rental", label: "ปริ้นเตอร์เช่า" },
  { value: "store_service", label: "งานบริการหน้าร้าน" },
  { value: "onsite_service", label: "งาน Onsite" }
];

// Initial form data
interface FormData {
  fullName: string;
  email: string;
  phone: string;
  department: string;
  serviceType: string;
  speedRating: number;
  professionalRating: number;
  friendlinessRating: number;
  knowledgeRating: number;
  feedback: string;
  wantSpareStock: boolean;
  wantMonthlyUpdate: boolean;
}

const initialFormData: FormData = {
  fullName: '',
  email: '',
  phone: '',
  department: '',
  serviceType: '',
  speedRating: 0,
  professionalRating: 0,
  friendlinessRating: 0,
  knowledgeRating: 0,
  feedback: '',
  wantSpareStock: false,
  wantMonthlyUpdate: false
};

export default function SurveyPage() {
  const [formData, setFormData] = useState(initialFormData);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const summaryRef = useRef<HTMLDivElement>(null);

  // Handle save image
  const handleSaveImage = async () => {
    if (summaryRef.current) {
      try {
        const dataUrl = await htmlToImage.toPng(summaryRef.current);
        const link = document.createElement('a');
        link.download = `satisfaction-survey-${new Date().toISOString()}.png`;
        link.href = dataUrl;
        link.click();
      } catch (error) {
        console.error('Error saving image:', error);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      setCurrentStep(4);
    } catch (error) {
      console.error('Error:', error);
      alert('เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  const SummaryView = () => {
    const averageRating = (
      (formData.speedRating +
      formData.professionalRating + 
      formData.friendlinessRating + 
      formData.knowledgeRating) / 4
    ).toFixed(2);

    return (
      <div ref={summaryRef}>
        <Card className="bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-900 dark:to-blue-800">
          <CardHeader className="flex flex-col items-center pb-6">
            <h3 className="text-2xl font-bold text-center">สรุปผลการประเมิน</h3>
            <div className="text-5xl font-bold mt-4">{averageRating}/5</div>
          </CardHeader>
          <CardBody>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">ข้อมูลผู้ประเมิน</h4>
                <p>ชื่อ: {formData.fullName}</p>
                {/* <p>อีเมล: {formData.email}</p>
                <p>เบอร์โทรศัพท์: {formData.phone}</p> */}
                <p>แผนก/ฝ่าย: {formData.department}</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">บริการที่ประเมิน</h4>
                <p>{serviceTypes.find(s => s.value === formData.serviceType)?.label}</p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">ผลการประเมิน</h4>
                <div className="grid grid-cols-1 gap-2">
                  <p>ความรวดเร็วในการทำงาน/ประสานงาน: {formData.speedRating}/5</p>
                  <p>ความเป็นมืออาชีพ ทักษะการทำงาน: {formData.professionalRating}/5</p>
                  <p>พนักงานเป็นมิตร สุภาพเรียบร้อย: {formData.friendlinessRating}/5</p>
                  <p>การให้ความรู้เบื้องต้น และ คำแนะนำ: {formData.knowledgeRating}/5</p>
                </div>
              </div>

              {formData.serviceType === 'printer_rental' && (
                <div>
                  <h4 className="font-semibold mb-2">ความต้องการเพิ่มเติม</h4>
                  <p>ต้องการ Stock/Spare หมึก: {formData.wantSpareStock ? 'ใช่' : 'ไม่ใช่'}</p>
                  <p>ต้องการข้อมูลการใช้งานรายเดือน: {formData.wantMonthlyUpdate ? 'ใช่' : 'ไม่ใช่'}</p>
                </div>
              )}

              {formData.feedback && (
                <div>
                  <h4 className="font-semibold mb-2">ข้อเสนอแนะ/ติชม</h4>
                  <p>{formData.feedback}</p>
                </div>
              )}

              <div className="text-sm text-gray-500 mt-4">
                วันที่ประเมิน: {new Date().toLocaleString('th-TH')}
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-950 dark:to-gray-900 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {currentStep === 4 ? (
            <>
              <SummaryView />
              <div className="mt-4 flex justify-center gap-4">
                <Button color="primary" onClick={handleSaveImage}>
                  บันทึกเป็นรูปภาพ
                </Button>
                <Button 
                  color="success" 
                  onClick={async () => {
                    try {
                      const response = await fetch('/api/line', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ formData })
                      });

                      if (!response.ok) {
                        const error = await response.json();
                        throw new Error(error.details || 'Failed to send to LINE');
                      }

                      // เปิด LINE OA หลังจากส่งข้อความสำเร็จ
                      window.open('https://www.rayong-oa.com/', '_blank');
                    } catch (error) {
                      console.error('Error:', error);
                      alert('เกิดข้อผิดพลาดในการส่งข้อมูล: ' + error.message);
                    }
                  }}
                >
                  แชร์ทาง Line
                </Button>
               </div>
            </>
          ) : (
            <Card className="max-w-xl mx-auto">
              <CardHeader className="flex flex-col gap-3">
                <h2 className="text-2xl font-bold">แบบฟอร์มประเมินความพึงพอใจ</h2>
                <Progress 
                  value={(currentStep / 3) * 100}
                  className="mt-2"
                  showValueLabel={true}
                  valueLabel={`ขั้นตอนที่ ${currentStep} จาก 3`}
                />
              </CardHeader>

              <CardBody>
                <form onSubmit={handleSubmit}>
                  {currentStep === 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <h3 className="text-lg font-semibold mb-4">ข้อมูลส่วนตัว</h3>
                      <div className="space-y-4">
                        <Input
                          label="ชื่อผู้ประเมิน(หรือชื่อสถานที่)"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          isRequired
                        />
                        {/* <Input
                          type="email"
                          label="อีเมล"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          isRequired
                        />
                        <Input
                          label="เบอร์โทรศัพท์"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          isRequired
                        /> */}
                        <Input
                          label="แผนก/ฝ่าย/ลูกค้าหน้าร้าน อื่นๆ"
                          name="department"
                          value={formData.department}
                          onChange={handleChange}
                          isRequired
                        />
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 2 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <h3 className="text-lg font-semibold mb-4">เลือกบริการที่ต้องการประเมิน</h3>
                      <Select
                        label="บริการ"
                        placeholder="เลือกบริการ"
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        isRequired
                      >
                        {serviceTypes.map((service) => (
                          <SelectItem key={service.value} value={service.value}>
                            {service.label}
                          </SelectItem>
                        ))}
                      </Select>
                    </motion.div>
                  )}

                  {currentStep === 3 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <h3 className="text-lg font-semibold mb-4">การประเมิน</h3>
                      <div className="space-y-6">
                        {/* Ratings */}
                        <div>
                          <p className="mb-2">1. ความรวดเร็วในการทำงาน/ประสานงาน</p>
                          <RadioGroup
                            orientation="horizontal"
                            value={formData.speedRating.toString()}
                            onValueChange={(value) => setFormData({ ...formData, speedRating: parseInt(value) })}
                            className="gap-2"
                          >
                            {[1, 2, 3, 4, 5].map((rating) => (
                              <Radio key={rating} value={rating.toString()}>
                                {rating}
                              </Radio>
                            ))}
                          </RadioGroup>
                        </div>

                        <div>
                          <p className="mb-2">2. ความเป็นมืออาชีพ ทักษะการทำงาน</p>
                          <RadioGroup
                            orientation="horizontal"
                            value={formData.professionalRating.toString()}
                            onValueChange={(value) => setFormData({ ...formData, professionalRating: parseInt(value) })}
                            className="gap-2"
                          >
                            {[1, 2, 3, 4, 5].map((rating) => (
                              <Radio key={rating} value={rating.toString()}>
                                {rating}
                              </Radio>
                            ))}
                          </RadioGroup>
                        </div>

                        <div>
                          <p className="mb-2">3. พนักงานเป็นมิตร สุภาพเรียบร้อย</p>
                          <RadioGroup
                            orientation="horizontal"
                            value={formData.friendlinessRating.toString()}
                            onValueChange={(value) => setFormData({ ...formData, friendlinessRating: parseInt(value) })}
                            className="gap-2"
                          >
                            {[1, 2, 3, 4, 5].map((rating) => (
                              <Radio key={rating} value={rating.toString()}>
                                {rating}
                              </Radio>
                            ))}
                          </RadioGroup>
                        </div>

                        <div>
                          <p className="mb-2">4. การให้ความรู้เบื้องต้น และ คำแนะนำ</p>
                          <RadioGroup
                            orientation="horizontal"
                            value={formData.knowledgeRating.toString()}
                            onValueChange={(value) => setFormData({ ...formData, knowledgeRating: parseInt(value) })}
                            className="gap-2"
                          >
                            {[1, 2, 3, 4, 5].map((rating) => (
                              <Radio key={rating} value={rating.toString()}>
                                {rating}
                              </Radio>
                            ))}
                          </RadioGroup>
                        </div>

                        {formData.serviceType === 'printer_rental' && (
                          <div className="space-y-4">
                            <Checkbox
                              isSelected={formData.wantSpareStock}
                              onValueChange={(checked) => setFormData({ ...formData, wantSpareStock: checked })}
                            >
                              ต้องการ Stock/Spare หมึกไว้สำรองประจำเครื่อง
                            </Checkbox>
                            <Checkbox
                              isSelected={formData.wantMonthlyUpdate}
                              onValueChange={(checked) => setFormData({ ...formData, wantMonthlyUpdate: checked })}
                            >
                              ต้องการข้อมูลการใช้งานปริ้นเตอร์รายเดือน
                            </Checkbox>
                          </div>
                        )}

                        <Textarea
                          label="ข้อเสนอแนะ/ติชม"
                          placeholder="กรุณาใส่ข้อเสนอแนะหรือติชม"
                          name="feedback"
                          value={formData.feedback}
                          onChange={handleChange}
                        />
                      </div>
                    </motion.div>
                  )}
                </form>
              </CardBody>

              <CardFooter className="flex justify-between">
                {currentStep > 1 && (
                  <Button onClick={prevStep}>
                    ย้อนกลับ
                  </Button>
                )}
                {currentStep < 3 ? (
                  <Button
                    color="primary"
                    onClick={nextStep}
                    disabled={
                      (currentStep === 1 && (!formData.fullName || !formData.department)) ||
                      (currentStep === 2 && !formData.serviceType)
                    }
                  >
                    ถัดไป
                  </Button>
                ) : (
                  <Button
                    color="success"
                    onClick={handleSubmit}
                    disabled={
                      isSubmitting ||
                      !formData.speedRating ||
                      !formData.professionalRating ||
                      !formData.friendlinessRating ||
                      !formData.knowledgeRating
                    }
                    isLoading={isSubmitting}
                  >
                    {isSubmitting ? "กำลังส่งข้อมูล..." : "ส่งข้อมูล"}
                  </Button>
                )}
              </CardFooter>
            </Card>
          )}
        </motion.div>
      </div>
    </div>  );
