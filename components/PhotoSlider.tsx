import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";
import Image from "next/image";
import { products } from "@/api/product_data";

export default () => {
  return (
    <Swiper modules={[EffectCards]}  cardsEffect={{slideShadows:false}} effect="cards" className="max-w-[400px]">
         {products.map((data) => (
             <SwiperSlide className="p-10 rounded-xl shadow-none"  key={data.id}>
            <div
             
              className=" bg-white w-[300px]  mx-auto   shadow-normal hover:shadow-xl transition-all  hover:shadow-primary-100 cursor-pointer p-5 rounded-2xl"
            >
              <Image
                className="rounded-xl w-full !aspect-square overflow-hidden object-cover"
                src={data.image_cover} // ตรวจสอบว่าใช้ imageUrl ที่ถูกต้อง
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
            </div>
            </SwiperSlide>
          ))}
    </Swiper>
  );
};
