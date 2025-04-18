// Survey service types
export const serviceTypes = [
  { value: "computer_rental", label: "เครื่องเช่า" },
  { value: "printer_rental", label: "ปริ้นเตอร์เช่า" },
  { value: "store_service", label: "งานบริการหน้าร้าน" },
  { value: "onsite_service", label: "งาน Onsite" }
];

// Survey form data interface
export interface SurveyFormData {
  fullName: string;
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

// Initial form state
export const initialFormData: SurveyFormData = {
  fullName: '',
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