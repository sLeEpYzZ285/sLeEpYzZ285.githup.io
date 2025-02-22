"use client";
import ModalContact from "@/components/ContactButton/ModalContact";
import { title } from "@/components/primitives";
import { Button, Image } from "@nextui-org/react";
import { JackInTheBox, Slide, Zoom } from "react-awesome-reveal";

export default function OurworkPage() {
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
              Rayong OA 
            </h1>
            
            <h1
              className={`${title({
                color: "yellow",
              })} !text-4xl `}
            >
              Performance
            </h1>
            </Slide>
            <Slide triggerOnce direction="up" className="mt-10">
              <p>
                <span className=" text-primary">
                  “ ระยอง โอเอ แอนด์ เซอร์วิส “{" "}
                </span>{" "}
                องกรค์ทีไม่ได้มีดีแค่เรื่องบริการหลังการขาย และจำหน่ายสินค้าแต่ยังรวมถึงงานติดตั้งไม่ว่าจะเป็น กล้องวงจรปิด เดินสายแลน ทำไฟ 
                ทำระบบ Network ที่สำคัญคือเรามี เครื่องเช่าด้วยนะ!!
              </p>
            </Slide>
            <div className="mt-5">
              <JackInTheBox cascade triggerOnce>
                <ModalContact text="ติดต่อเพิ่มเติม"/>
              {/* <Button color="primary">ติดต่อเพิ่มเติม</Button> */}
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
              src="photo/19219.jpg"
            />
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
            ภาพรวม <span><h1
              className={`${title({
                color: "yellow",
              })} !text-6xl `}
            >
              ROA
            </h1> </span>
             ทั้งหมด
          </h1>
        </div>
        </Zoom>
      </section>
      <section className="mt-[150px]">
          <div className="grid grid-cols-9 gap-7 pt-10">
            <Slide triggerOnce direction="left" className="col-span-9 sm:col-span-3">
              <Image
                src={
                  "photo/Rent.png"
                }
                alt="Rent-Team"
                width={500}
                height={800}
                className=" rounded-xl aspect-video !w-full !h-full overflowhidden object-cover hover:scale-110 transition-all"/>
            </Slide>
            <Slide triggerOnce direction="up" className="col-span-9 sm:col-span-3">
              <Image
                src={
                  "https://img.freepik.com/free-vector/team-construction-workers-with-wind-turbines-solar-panels-installation-repair-electric-utility-poles-flat-vector-illustration-maintenance-service-electricity-renewable-energy-concept_74855-23179.jpg"
                }
                alt="Technical-Team"
                width={500}
                height={800}
                className=" rounded-xl aspect-video !w-full !h-full overflowhidden object-cover hover:scale-110 transition-all"/>
            </Slide>
            <Slide triggerOnce direction="right" className="col-span-9 sm:col-span-3">
              <Image
              src={
                "https://media.istockphoto.com/id/1158215759/vector/customer-service-man-with-headphones-and-microphone-with-laptop-concept-illustration-for.jpg?s=612x612&w=0&k=20&c=KpWRGQHt0sf_LzpSll7zI4manB-_15pQOnG89Js1Ftc="
              }
              alt="Install-team"
              width={500}
              height={800}
              className=" rounded-xl aspect-video !w-full !h-full overflowhidden object-cover hover:scale-110 transition-all"/>
            </Slide>
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
