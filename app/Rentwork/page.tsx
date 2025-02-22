"use client";
import { title } from "@/components/primitives";
import Marquee from "react-fast-marquee";
import { Button } from "@nextui-org/button";
import EmblaCarousel from "@/components/PromotionSlider/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import VideoPlayer from "@/components/VideoPlayer";
import { products } from "@/api/product_data";
import { Divider } from "@nextui-org/react";
// import PhotoSlider from "@/components/PhotoSlider";
// import ParallaxSlide from "@/components/ParallaxSlide";
// import PromotionCard from "./components/PromotinCard";
// import CardProduct from "@/components/CardProduct";
// import HitProduct from "./components/HitProduct";
// import ProductTypeBanner from "./components/ProductTypeBanner";
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

export default function RentWork() {
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
          <div className="flex flex-nowrap  snap-x snap-mandatory   scroll-smooth overflow-x-scroll overflow-hidden   lg:grid grid-cols-12 pb-8 mt-10 gap-3  ">
            <Link
              className="snap-center snap-always mx-w-[350px] min-w-[180px] col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-2"
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
                className="mx-w-[350px] min-w-[180px] snap-center snap-always col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-2 "
                href={`/${data.slug}`}
                key={data.id}
              >
               
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
          <div className="flex flex-nowrap  snap-x  snap-mandatory  scroll-smooth overflow-x-scroll overflow-hidden   lg:grid grid-cols-12 pb-8 mt-10 gap-3  ">
            <Link
              className="snap-center snap-always mx-w-[350px] min-w-[180px] col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-2"
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
                className="snap-center snap-always mx-w-[350px] min-w-[180px] col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-2 "
                href={`/${data.slug}`}
                key={data.id}
              >
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
          <div className="flex flex-nowrap  snap-x snap-mandatory   scroll-smooth overflow-x-scroll overflow-hidden   lg:grid grid-cols-12 pb-8 mt-10 gap-3  ">
            <Link
              className="snap-center snap-always mx-w-[350px] min-w-[180px] col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-2"
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
                className="snap-center snap-always mx-w-[350px] min-w-[180px] col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-2"
                href={`/${data.slug}`}
                key={data.id}
              >
         
              </Link>
            ))}
          </div>
        </Slide>
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
