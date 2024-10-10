"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/parallax";
import SwiperCore from "swiper";
import { products } from "@/api/product_data";
import { Parallax } from "swiper/modules";
import Image from "next/image";
// Install Parallax module
SwiperCore.use([Parallax]);
export default function ParallaxSlide() {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        parallax={true}
        speed={600} // Speed of the transition
        className="w-[500px]"
      >
        {/* Parallax Background */}
        <div
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="-23%"
          style={{ backgroundImage: "url(/path/to/your-image.jpg)" }}
        ></div>

        {/* Swiper Slides */}
        {products.map((data) => (
          <SwiperSlide
            className=" bg-white w-[300px]  mx-auto   shadow-normal hover:shadow-xl transition-all  hover:shadow-primary-100 cursor-pointer p-5 rounded-2xl"
            key={data.id}
          >
            <Image
              className="rounded-xl w-full !aspect-square overflow-hidden object-cover"
              src={data.image} // ตรวจสอบว่าใช้ imageUrl ที่ถูกต้อง
              alt={data.name} 
              width={150}
              height={150}
            />

            <h3 className="mb-3 mt-3 text-wrap overflow-clip h-12 ">
              {data.name}
            </h3>
            <h2 className="text-xl font-bold mb-3">
              ฿{data.price.toLocaleString()}
            </h2>
            <div className="">
              {/* <Button color="primary">เพิ่มเติม</Button> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
