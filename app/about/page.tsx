"use client";
import { title } from "@/components/primitives";
import { Button, Image } from "@nextui-org/react";
import { JackInTheBox, Slide, Zoom } from "react-awesome-reveal";

export default function AboutPage() {
  return (
    <>
      <section className="h-auto md:h-[90vh] flex flex-col items-center justify-center">
        <div className="grid grid-cols-12 gap-5 justify-between">
          <div className="col-span-12  lg:col-span-6 flex flex-col mb-4">
            <Slide triggerOnce cascade>
            <h1
              className={`${title({
                color: "blue",
              })} !text-5xl md:!text-8xl  !font-extrabold !text-nowrap`}
            >
              RAYONG OA
            </h1>
            
            <h1
              className={`${title({
                color: "yellow",
              })} !text-4xl `}
            >
              AND SERVICE
            </h1>
            </Slide>
            <Slide triggerOnce direction="up" className="mt-10">
              <p>
                สินค้ามากมายจาก{" "}
                <span className=" text-primary">
                  {" "}
                  “ ระยอง โอเอ แอนด์ เซอร์วิส “{" "}
                </span>{" "}
                ที่คัดสรรสินค้าคุณภาพเหนือกว่า
                พร้อมตอบโจทย์ทุกความต้องการทางเทคโนโลยี ครบเครื่องเรื่องอุปกรณ์
                IT มาตรฐานระดับมืออาชีพ
              </p>
            </Slide>
            <div className="mt-5">
              <JackInTheBox cascade triggerOnce>
              <Button color="primary">ติดต่อเพิ่มเติม</Button>
              </JackInTheBox>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 ">
            <Slide triggerOnce direction="up">
            <Image
            shadow="lg"
            isBlurred
              removeWrapper
              alt="Card background"
              className="  w-full h-full overflow-hidden !rounded-t-full !shadow-primary-50  object-cover "
              src="photo/rayong_oa_main.jpg"
            />
            </Slide>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div className="text-center mb-20">
          <Zoom triggerOnce>
          <h1
            className={`${title({
              color: "blue",
            })} `}
          >
            ประวัติความเป็นมาบริษัท
          </h1>
            </Zoom>
        </div>
        <div className="grid grid-cols-12 gap-4 ">
          <div className="col-span-12 md:col-span-7 p-4">
            <Slide triggerOnce direction="left">
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="photo/rayong_oa_inside.jpg"
            />
            </Slide>
          </div>
          <div className=" col-span-12 md:col-span-5 p-4 flex flex-col justify-center">
            <Slide triggerOnce direction="up" cascade>

            <h1 className="text-3xl font-bold mb-8">
              บริษัท ระยอง โอเอ แอนด์ เซอร์วิส จำกัด
            </h1>
           
              <p className=" indent-8">
                {" "}
                ได้ก่อตั้งและจดทะเบียนบริษัท ขึ้นเมื่อวันที่ 15 สิงหาคม 2537
                และเปิดดำเนินการอย่างเป็นทางการใน วันที่ 4 กุมภาพันธ์ 2538
                จากคณะผู้บริหารที่มีประสบการณ์การทำงานกว่า 7 ปี
                จากบริษัทธุรกิจไอทีชั้นนำในยุคนั้น
              </p>
              <br />
              {/* <span className="mt-8">
                <h3 className="mb-2">
                  ปัจจุบันบริษัท ระยอง โอเอ แอนด์ เซอร์วิส จำกัด มีทั้งหมด 1
                  สาขา
                </h3>
                <li>
                  <p className="font-semibold">
                  สาขาที่ 1สำนักงานใหญ่ ตั้งอยู่เลขที่ 31,33,35
                  ซอยศูนย์การค้าสาย 4 ถนนสุขุมวิท ต.ท่าประดู่ อ.เมืองระยอง
                  จ.ระยอง
                  </p>
                </li>
              </span> */}
        
            </Slide>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <Zoom triggerOnce>
        <div className="text-center mb-20">
          <h1
            className={`${title({
              color: "blue",
            })} `}
          >
            นโยบายการพัฒนาความยั่งยืนองค์กร
          </h1>
        </div>
        </Zoom>
      </section>
      

     
      
      <section className="mt-20">
        <div className="grid grid-cols-12  gap-0 sm:gap-8">
          
          <div className="col-span-12 md:col-span-4 flex justify-center items-center">
          <Zoom triggerOnce cascade >
            <h1
              className={`${title({
                color: "blue",
              })} !text-8xl mb-5 md:mb-0 `}
            >
              01
            </h1>
            </Zoom>
          </div>
          <div className="col-span-12 md:col-span-8">
          <Slide triggerOnce cascade direction="up">
            <h1 className="text-4xl font-bold">วิสัยทัศน์ </h1>
            <p className="indent-8 mt-5">
              “บริษัทฯ มุ่งเน้นให้ความสำคัญ
              “เรื่องบริการและความจริงใจในการทำธุรกิจ” กับคู่ค้าแบบเท่าเทียมกัน
              เพื่อให้ลูกค้าได้รับความพึงพอใจสูงสุด
              บนพื้นฐานการปรับปรุงประสิทธิภาพอย่างต่อเนื่อง”
            </p>
            </Slide>
          </div>
        </div>
      </section>

      <section className="mt-20 dark:bg-zinc-800 bg-primary/5  rounded-2xl p-4 sm:p-8">
        <div className="grid grid-cols-12  gap-0 sm:gap-8 ">
          <div className="col-span-12 md:col-span-4 flex justify-center items-center  ">
          <Slide triggerOnce cascade direction="up">
            <h1
              className={`${title({
                color: "blue",
              })} !text-8xl mb-5 md:mb-0  `}
            >
              02&nbsp;
            </h1>
            </Slide>
          </div>
          <div className=" col-span-12 md:col-span-8  text-wrap  w-full">
          <Slide triggerOnce cascade direction="up">
            <h1 className="text-4xl font-bold">นโยบายเกี่ยวกับพนักงาน </h1>
            <div className="w-full">
              <p className="indent-8 mt-5  text-wrap ">
                บริษัทฯ ให้ความสำคัญกับพนักงาน ในฐานะทรัพยากรที่มีคุณค่า
                ขององค์กร และ เป็นปัจจัยหลักที่ผลักดัน
                ให้การดำเนินงานบรรลุความสำเร็จตามเป้าหมาย โดยบริษัทฯ
                มุ่งมั่นที่จะบริหาร พัฒนา และธำรงรักษาพนักงาน
                เพื่อให้ร่วมกันสร้างสรรค์ผลงาน และ ความเจริญก้าวหน้าอย่างยั่งยืน
                ให้กับบริษัทฯ ผ่านการกำหนดนโยบายเกี่ยวกับพนักงาน
              </p>
            </div>
            </Slide>
          </div>

          <div className="col-span-12 sm:col-span-6 bg-white dark:bg-zinc-700 rounded-2xl m-4  p-4">
          <Slide triggerOnce cascade direction="up">
            <p>
              <span className="text-4xl font-bold mx-3">1</span>
              ส่งเสริมคุณภาพชีวิตที่ดีในการทำงาน
              จัดให้มีสภาพแวดล้อมการทำงานที่ดี สวยงาม สะอาดและปลอดภัยในการทำงาน
            </p>
            </Slide>
          </div>
          <div className="col-span-12 sm:col-span-6 bg-white dark:bg-zinc-700 rounded-2xl m-4 p-4">
          <Slide triggerOnce cascade direction="up">
            <p>
              <span className="text-4xl font-bold mx-3">2</span>
              พัฒนาความรู้ความสามารถของพนักงานอย่างต่อเนื่อง
              เพื่อให้เตรียมความพร้อมที่จะรองรับการเจริญเติบโตของทางบริษัทฯ
              ในอนาคต
            </p>
            </Slide>
          </div>
          <div className="col-span-12 sm:col-span-6 bg-white dark:bg-zinc-700 rounded-2xl m-4 p-4">
          <Slide triggerOnce cascade direction="up">
            <p>
              <span className="text-4xl font-bold mx-3">3</span>
              สนับสนุนให้พนักงานเติบโตในหน้าที่การงานตามความรู้ความสามารถ
            </p>
            </Slide>
          </div>
          <div className="col-span-12 sm:col-span-6 bg-white dark:bg-zinc-700 rounded-2xl m-4 p-4">
          <Slide triggerOnce cascade direction="up">
            <p>
              <span className="text-4xl font-bold mx-3">4</span>
              บริหารจัดการระบบค่าตอบแทน รวมทั้งสวัสดิการต่างๆ อย่างเหมาะสม
              และเป็นธรรม
            </p>
            </Slide>
          </div>
          <div className="col-span-12 sm:col-span-6 bg-white dark:bg-zinc-700 rounded-2xl m-4 p-4">
          <Slide triggerOnce cascade direction="up">
            <p>
              <span className="text-4xl font-bold mx-3">5</span>
              ส่งเสริมให้พนักงานมีส่วนร่วมในการพัฒนาองค์กร
              ฝึกให้พนักงานมีความคิดสร้างสรรค์ และกล้าแสดงความคิดเห็นได้
            </p>
            </Slide>
          </div>
          <div className="col-span-12 sm:col-span-6 bg-white dark:bg-zinc-700 rounded-2xl m-4 p-4">
          <Slide triggerOnce cascade direction="up">
            <p>
              <span className="text-4xl font-bold mx-3">6</span>
              การสร้างวัฒนธรรมองค์กรให้อบอุ่นและน่าอยู่ โดยปลูกฝังให้พนักงาน
              มีน้ำใจ มีมารยาท มีความอ่อนน้อมถ่อมตน รวมถึงการเคารพสิทธิ
              ให้เกียรติกัน ทั้งต่อพนักงานในองค์กรและคู่ค้า
            </p>
            </Slide>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="grid grid-cols-12  gap-0 sm:gap-8">
          <div className="col-span-12 md:col-span-4 flex justify-center items-center">
          <Zoom triggerOnce cascade >
            <h1
              className={`${title({
                color: "blue",
              })} !text-8xl mb-5 md:mb-0 `}
            >
              03
            </h1>
            </Zoom>
          </div>
          <div className="col-span-12 md:col-span-8">
          <Slide triggerOnce cascade direction="up">
            <h1 className="text-4xl font-bold">กิจกรรมเพื่อสังคม </h1>
            <p className="indent-8 mt-5">
              ช่วยเหลือสังคมด้านเทคโนโลยีสำหรับการศึกษา  เช่น
              การบริจาคเครื่องคอมพิวเตอร์ให้กับโรงเรียนที่ขาดแคลนด้านเทคโนโลยี่
              การสร้างห้องสมุดให้กับโรงเรียนในถิ่นทุรกันดาร
              การมอบทุนการศึกษาให้กับนักเรียนที่ด้อยโอกาส
              เพื่อเป็นอนาคตของชาติสืบไป2การทำนุบำรุงศาสนา
              ศาสนานั้นเป็นที่พึ่งทางจิตใจของใครหลายคน บริษัทฯ ร่วมทำบุญ
              การสร้างวัดวาอาราม บริจาคและทำบุญวัด เพื่อเป็นส่วนช่วยบำรุงสถานที่
            </p>
            </Slide>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="grid grid-cols-12  gap-0 sm:gap-8">
          <div className="col-span-12 md:col-span-4 flex justify-center items-center">
          <Zoom triggerOnce cascade >
            <h1
              className={`${title({
                color: "blue",
              })} !text-8xl mb-5 md:mb-0 `}
            >
              04
            </h1>
            </Zoom>
          </div>
          <div className="col-span-12 md:col-span-8">
          <Slide triggerOnce cascade direction="up">
            <h1 className="text-4xl font-bold">การปฏิบัติตามนโยบาย </h1>
            <p className="indent-8 mt-5">
              กรรมการบริษัทฯ ผู้บริหาร พนักงาน และลูกจ้าง ทุกระดับและทุกคน
              มีหน้าที่สนับสนุน ส่งเสริม
              และปฏิบัติงานให้สอดคล้องกับนโยบายการพัฒนาความยั่งยืนองค์กรฉบับนี้
              จนเป็นวัฒนธรรมดำเนินงานที่คำนึงถึงประโยชน์ที่สมดุลทั้งด้านเศรษฐกิจ
              สังคม และสิ่งแวดล้อม
            </p>
            </Slide>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="grid grid-cols-12  gap-0 sm:gap-8 dark:bg-zinc-800 bg-primary/5 p-8 rounded-2xl">
          <div className="col-span-12 md:col-span-4 flex justify-center items-center">
          <Zoom triggerOnce cascade >
            <h1
              className={`${title({
                color: "blue",
              })} !text-8xl mb-5 md:mb-0 `}
            >
              05&nbsp;
            </h1>
            </Zoom>
          </div>
          <div className="col-span-12 md:col-span-8 ">
          <Slide triggerOnce cascade direction="up">
            <h1 className="text-4xl font-bold">
              ความเชื่อมั่นและความไว้วางใจ{" "}
            </h1>
            <p className="indent-8 mt-5">
              บริษัทฯ ให้ความสำคัญกับพนักงาน ในฐานะทรัพยากรที่มีคุณค่าขององค์กร
              และเป็นปัจจัยหลักที่ผลักดันให้การดำเนินงานบรรลุความสำเร็จตามเป้าหมาย
              โดยบริษัทฯ มุ่งมั่นที่จะบริหาร พัฒนา และธำรงรักษาพนักงาน
              เพื่อให้ร่วมกันสร้างสรรค์ผลงานและความเจริญก้าวหน้าอย่างยั่งยืนให้กับบริษัทฯ
              ผ่านการกำหนดนโยบายเกี่ยวกับพนักงาน
            </p>
            </Slide>
          </div>

          <div className="col-span-12 sm:col-span-4 bg-white dark:bg-zinc-700 rounded-2xl m-4 p-4">
          <Slide triggerOnce cascade direction="up">
            <p className="text-sm">
              <span className="text-4xl font-bold mx-3">1</span>
              ตัวแทนจำหน่ายผลิตภัณฑ์คอมพิวเตอร์และอุปกรณ์ต่อพวงทุกชนิด
            </p>
            </Slide>
          </div>
          <div className="col-span-12 sm:col-span-4 bg-white dark:bg-zinc-700 rounded-2xl m-4 p-4">
          <Slide triggerOnce cascade direction="up">
            <p className="text-sm">
              <span className="text-4xl font-bold mx-3">2</span>
              บริการให้เช่าเครื่องคอมพิวเตอร์
            </p>
            </Slide>
          </div>
          <div className="col-span-12 sm:col-span-4 bg-white dark:bg-zinc-700 rounded-2xl m-4 p-4">
          <Slide triggerOnce cascade direction="up">
            <p className="text-sm">
              <span className="text-4xl font-bold mx-3">3</span>
              ให้คำปรึกษาและวางระบบงานไอทีทุกรูปแบบ
            </p>
            </Slide>
          </div>
          <div className="col-span-12 sm:col-span-4 bg-white dark:bg-zinc-700 rounded-2xl m-4 p-4">
          <Slide triggerOnce cascade direction="up">
            <p className="text-sm">
              <span className="text-4xl font-bold mx-3">4</span>
              ให้คำปรึกษาและวางระบบบัญชี Express ระบบโปรแกรมเงินเดือน
            </p>
            </Slide>
          </div>
          <div className="col-span-12 sm:col-span-4 bg-white dark:bg-zinc-700 rounded-2xl m-4 p-4">
          <Slide triggerOnce cascade direction="up">
            <p className="text-sm">
              <span className="text-4xl font-bold mx-3">5</span>
              บริการงานซ่อมทั้งในสถานที่ นอกสถานที่ และแบบสัญญารายปี
            </p>
            </Slide>
          </div>
        </div>
      </section>

      <br />

      <section className="text-center mt-20">
        <hr />
        <Zoom triggerOnce cascade>
        <h1 className="mt-10">
          จากความพร้อมและประสบการณ์ของทีมงาน 
          ด้วยคำนึงถึงความสำเร็จในรูปธุรกิจของลูกค้าเป็นสำคัญ  “บริษัท  ระยอง 
          โอเอ  แอนด์  เซอร์วิส  จำกัด” 
          จึงได้รับการสนับสนุนสินค้าและบริการจากลูกค้าที่เป็นทั้ง  
          หน่วยงานภาครัฐ  ภาคเอกชน สถาบันการศึกษาและกลุ่มลูกค้าทั่วไป
          มากมายจวบจนปัจจุบัน
        </h1>

        <h1 className="mt-6">
          จากเหตุผลดังกล่าวจึงเป็นข้อพิสูจน์ว่า บริษัทฯ
          มีความพร้อมทุกด้านที่จะทำให้ลูกค้าเกิดความมั่นใจและเลือกใช้บริการ
          กับสโลแกนที่ว่า “สถานีไอที ..มีดีเรื่องบริการ”
        </h1>
        </Zoom>
      </section>
    </>
  );
}
