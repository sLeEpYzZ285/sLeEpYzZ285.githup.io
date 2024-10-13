"use client";
import { title } from "@/components/primitives";
import Marquee from "react-fast-marquee";
import { Button } from "@nextui-org/button";
import EmblaCarousel from "@/components/PromotionSlider/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import VideoPlayer from "@/components/VideoPlayer";
import { products } from "@/api/product_data";
import { Divider } from "@nextui-org/react";
import PhotoSlider from "@/components/PhotoSlider";
import ParallaxSlide from "@/components/ParallaxSlide";
import PromotionCard from "./components/PromotinCard";
import CardProduct from "@/components/CardProduct";
import HitProduct from "./components/HitProduct";
import ProductTypeBanner from "./components/ProductTypeBanner";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";
import { Fade, Hinge, JackInTheBox, Slide, Zoom } from "react-awesome-reveal";
import { promotion_photo } from "@/api/promotion";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const notebook = products.filter((products) => products.type === "notebook");
const monitor = products.filter((products) => products.type === "monitor");
const printer = products.filter((products) => products.type === "printer");

export default function Home() {
  return (
    <>
      {/* RAYONG OA TEXT ON TOP */}
      <section>
        <Slide direction="down" triggerOnce>
          <div className="text-center mb-4">
            <div className="flex flex-wrap justify-center items-center">
              <span className="text-2xl  ">สถานีไอที</span>
              <div className="mx-5"></div>
              <div className="flex flex-col">
                <h1
                  className={`${title({
                    color: "blue",
                  })} !text-5xl md:!text-8xl !font-extrabold`}
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
              </div>

              <div className="mx-5"></div>
              <span className="text-2xl ">มีดีเรื่องบริการ</span>
            </div>
          </div>
        </Slide>
      </section>

      {/* PROMOTION CARD */}
      <div className="w-full mb-8">
        <PromotionCard />
      </div>

      <section>
        <Slide triggerOnce direction="up">
          <div className="text-center mt-[150px]">
            <h1 className={title({ color: "blue" })}>พาร์ทเนอร์ ที่รู้ใจ</h1>
          </div>
        </Slide>
        <Fade triggerOnce>
          <Marquee className="mt-10" speed={100} autoFill>
            <div className="partner_logo flex flex-row items-center justify-around mt-5 py-4 gap-6 overflow-hidden dark:bg-zinc-900 ">
              <Image
                className="me-8"
                src={"logo/Acer-Logo.svg"}
                alt="asuslogo"
                width={180}
                height={80}
              />
              <Image
                className="me-8"
                src={"logo/Asus-Logo.svg"}
                alt="asuslogo"
                width={150}
                height={80}
              />
              <Image
                className="me-8"
                src={"logo/HP-Logo.svg"}
                alt="asuslogo"
                width={150}
                height={60}
              />
              <Image
                className="me-8"
                src={"logo/Lenovo-Logo.svg"}
                alt="asuslogo"
                width={160}
                height={80}
              />
            </div>
          </Marquee>
        </Fade>
      </section>

      <section className="mt-[150px]">
        <div className="">
          <Zoom triggerOnce duration={1000}>
            <div className="">
              <h1 className={title({ color: "yellow" })}>Top Hit!! &nbsp;</h1>
              <h1 className={title({ color: "blue" })}>ติดอันดับยอดขาย</h1>
            </div>
          </Zoom>

          <div className="grid grid-cols-12 mt-10 gap-6">
            <div className="col-span-12 lg:col-span-6">
              {products.slice(0, 3).map((data, i) => (
                <JackInTheBox triggerOnce key={data.id}>
                  <Link
                    className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-2 "
                    href={`/product`}
                  >
                    <HitProduct data={data} rank={i + 1} />
                  </Link>
                </JackInTheBox>
              ))}
            </div>
            <div className="col-span-12 lg:col-span-6 flex justify-center">
              <Fade triggerOnce className="">
                <Image
                // isBlurred
       
                  src={"https://i.pinimg.com/originals/07/d3/e3/07d3e303ca0b026f80e2ca7640504501.jpg"}
                  alt="asuslogo"
                  width={500}
                  height={800}
                  className="  mx-auto rounded-xl  overflow-hidden object-cover  !w-full!    m-0"
                />
              </Fade>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-[150px]">
        <Slide triggerOnce direction="down" cascade>
          <div className="">
            <h1 className={title({ color: "blue" })}>ตัวเลือก </h1>
            <h1 className={title({ color: "yellow" })}>หลากหลาย </h1>
            <h1 className={title({ color: "blue" })}>ให้คุณได้คัดสรร&nbsp;</h1>
          </div>
        </Slide>

        <div className="">
          <Fade triggerOnce delay={350}>
            <ProductTypeBanner />
          </Fade>
        </div>
      </section>

      <section className="mt-[150px]">
        <JackInTheBox triggerOnce>
          <div className="text-center">
            <h1 className={title({ color: "blue" })}>สินค้า</h1>
            <h1 className={title({ color: "yellow" })}>คุณภาพ</h1>
            <h1 className={title({ color: "blue" })}>ที่เราแนะนำ</h1>
          </div>
        </JackInTheBox>
        <div className="photo-slide  w-full rounded-2xl mt-10 ">
          <EmblaCarousel
            slides={SLIDES}
            options={OPTIONS}
            photo={promotion_photo}
          />
        </div>
      </section>

      <section className="mt-[70px]">
        <div className="mb-5">
          <Slide direction="right" duration={1500} triggerOnce>
            <h1 className="text-2xl font-base">
              <span className="text-primary font-bold">จอคอมพิวเตอร์</span> |
              ภาพสวย คมชัด สีสันสดใส
            </h1>
          </Slide>
        </div>
        <Divider />
        <Slide triggerOnce direction="up">
          <div className="flex flex-nowrap  snap-x  scroll-smooth overflow-x-scroll overflow-hidden   lg:grid grid-cols-12 pb-8 mt-10 gap-3  ">
            <Link
              className="snap-center mx-w-[350px] min-w-[180px] col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-2"
              href={`/products?type=monitor`}
            >
              <Card
                shadow="sm"
                
                isPressable className="h-full w-full"
              >
                <CardBody className="overflow-visible p-0">
                  <Image
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    height="100%"
                    alt="printer"
                    className="w-full !aspect-[4/5] object-cover overflow-hidden h-full"
                    src="https://image.benq.com/is/image/benqco/Gaming-Slider-M?$ResponsivePreset$"
                  />
                </CardBody>
                <CardFooter className="text-small justify-between">
                  <b>จอคอมพิวเตอร์</b>
                  <p className="text-default-500">ดูทั้งหมด</p>
                </CardFooter>
              </Card>
            </Link>

            {monitor.slice(0, 5).map((data) => (
              <Link
                className="mx-w-[350px] min-w-[180px] snap-center col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-2 "
                href={`/product`}
                key={data.id}
              >
                <CardProduct data={data} />
              </Link>
            ))}
          </div>
        </Slide>
      </section>

      <section className="mt-[70px]">
        <div className="mb-5">
          <Slide direction="right" duration={1500} triggerOnce>
            <h1 className="text-2xl font-base">
              <span className="text-primary font-bold">Notebook</span> | เร็วแรง
              ทันสมัย ประสิทธิภาพสูงสุด
            </h1>
          </Slide>
        </div>
        <Divider />
        <Slide triggerOnce direction="up">
          <div className="flex flex-nowrap  snap-x  scroll-smooth overflow-x-scroll overflow-hidden   lg:grid grid-cols-12 pb-8 mt-10 gap-3  ">
            <Link
              className="snap-center mx-w-[350px] min-w-[180px] col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-2"
              href={`/products?type=notebook`}
            >
              <Card shadow="sm" isPressable className="h-full w-full">
                <CardBody className="overflow-visible p-0">
                  <Image
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    height="100%"
                    alt="printer"
                    className="w-full !aspect-[4/5] object-cover overflow-hidden h-full"
                    src="https://dlcdnwebimgs.asus.com/gain/CBECA40C-88C6-449A-956B-3C7A96CEB865/w750/h470"
                  />
                </CardBody>
                <CardFooter className="text-small justify-between">
                  <b>Notebook</b>
                  <p className="text-default-500">ดูทั้งหมด</p>
                </CardFooter>
              </Card>
            </Link>
            {notebook.slice(0, 5).map((data) => (
              <Link
                className="snap-center mx-w-[350px] min-w-[180px] col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-2 "
                href={`/product`}
                key={data.id}
              >
                <CardProduct data={data} />
              </Link>
            ))}
          </div>
        </Slide>
      </section>

      <section className="mt-[70px]">
        <div className="mb-5">
          <Slide direction="right" duration={1500} triggerOnce>
            <h1 className="text-2xl font-base">
              <span className="text-primary font-bold">Printer</span> | คมชัด
              ลื่นไหล ไม่มีสะดุด{" "}
            </h1>
          </Slide>
        </div>
        <Divider />
        <Slide triggerOnce direction="up">
          <div className="flex flex-nowrap  snap-x  scroll-smooth overflow-x-scroll overflow-hidden   lg:grid grid-cols-12 pb-8 mt-10 gap-3  ">
            <Link
              className="snap-center mx-w-[350px] min-w-[180px] col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-2"
              href={`/products?type=printer`}
            >
              <Card shadow="sm"  isPressable className="h-full w-full">
                <CardBody className="overflow-visible p-0 ">
                  <Image
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    height="100%"
                    alt="printer"
                    className="!w-full  !aspect-[4/5] object-cover overflow-hidden h-full "
                    src="https://cdn.thewirecutter.com/wp-content/media/2024/08/laserprinters-2048px-02603-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp"
                  />
                </CardBody>
                <CardFooter className="text-small justify-between">
                  <b>Printer</b>
                  <p className="text-default-500">ดูทั้งหมด</p>
                </CardFooter>
              </Card>
            </Link>
            {printer.slice(0, 5).map((data) => (
              <Link
                className="snap-center mx-w-[350px] min-w-[180px] col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-2"
                href={`/product`}
                key={data.id}
              >
                <CardProduct data={data} />
              </Link>
            ))}
          </div>
        </Slide>
      </section>

      <section className="mt-[150px]">
        <Zoom triggerOnce>
          <div >
            <h1 className={title({ color: "blue" })}>บริการทั่วถึง</h1>
            <h1 className={title({ color: "yellow" })}>พร้อมช่วยเหลือลูกค้า</h1>
            <h1 className={title({ color: "blue" })}>อยู่เสมอ</h1>
          </div>
        </Zoom>
        <div className="grid grid-cols-9 gap-7 pt-10">
          <Slide triggerOnce direction="left" className="col-span-9 sm:col-span-3">
            <Image
              src={
                "https://www.ppmcontract.com/wp-content/uploads/2023/10/it-support-department-duties.jpg"
              }
              alt="asuslogo"
              width={500}
              height={800}
              className=" rounded-xl    aspect-video !w-full !h-full overflow-hidden object-cover hover:scale-110 transition-all"
            />
          </Slide>
          <Slide triggerOnce direction="up" className="col-span-9 sm:col-span-3">
            <Image
              src={
                "https://www.northwestcareercollege.edu/wp-content/uploads/2023/02/Qualifications-do-You-Need-to-be-an-IT-Technician.jpg"
              }
              alt="asuslogo"
              width={500}
              height={800}
              className=" rounded-xl  aspect-video  !w-full !h-full overflow-hidden object-cover hover:scale-110 transition-all"
            />
          </Slide>
          <Slide triggerOnce direction="right" className="col-span-9 sm:col-span-3">
            <Image
              src={
                "https://cdn.prod.website-files.com/5b6df8bb681f89c158b48f6b/5d7b6a6e00f64f8f69b8bf36_it-services-technician.jpg"
              }
              alt="asuslogo"
              width={500}
              height={800}
              className=" rounded-xl aspect-video  !w-full !h-full overflow-hidden object-cover hover:scale-110 transition-all"
            />
          </Slide>
        </div>
      </section>

      {/* <div >
  <ParallaxSlide/>
</div> */}
      {/* <div className=" mb-8">
        <iframe
          className="w-full aspect-video rounded-2xl pointer-events-none "
          src="https://www.youtube.com/embed/RRJbotw4g3w?controls=0&modestbranding=1&rel=0&autoplay=1&mute=1&disablekb=1&loop=1&playlist=RRJbotw4g3w,fmSmcSfC5fk"
          title="2022 Nitro 5 | Gaming Laptop | Acer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div> */}
      {/* <PhotoSlider/> */}
      {/* <div className="flex flex-row gap-6">
        <div className="flex-auto   rounded-2xl">
          <EmblaCarousel
            slides={SLIDES}
            options={OPTIONS}
            photo={promotion_photo}
          />
        </div>
        <div className="flex-1 bg-primary-50 rounded-2xl "></div>
      </div> */}
    </>
  );
}
