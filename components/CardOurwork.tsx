"use client";

import { useState } from "react";
import { Image } from "@nextui-org/react";
import { Slide, Zoom } from "react-awesome-reveal";
import Link from 'next/link';

const images = [
    "/photo/product_type1.jpeg",
    "/photo/product_type2.jpeg",
    "/photo/product_type3.jpeg",
    "/photo/product_type4.jpeg",
    ];

export default function CardOurwork () {
    const [showAll, setShowAll] = useState(false);
 return(
   
 

    <section className="mt-20">
    <Slide direction="right" duration={1500}>
      <h1 className="text-xl font-bold text-left">กิจกรรมบริจาค</h1>
    </Slide>

    <div className="bg-gray-200 p-6 rounded-xl mt-5">
      <div className="grid grid-cols-12">
        {/* Left Main Image */}
        <figure className="col-span-12 md:col-span-5">
          <Slide triggerOnce direction="left">
          <Image
            className="me-8"
            src={"photo/promotion_1.jpg"}
            alt="brother-logo"
            width={350}
            height={500}
            />
          </Slide>
        </figure>

{/* Right Content */}
<div className="col-span-12 md:col-span-7">
<Zoom triggerOnce>
  <header>
    <h2 className="text-lg font-bold">กิจกรรมส่งเสริมการเรียนรู้</h2>
    <hr className="my-2 border-gray-500" />
    <p className="text-sm text-gray-700">บริจาคเครื่องคอมเพื่อส่งเสริมความรู้และช่วยพัฒนาการศึกษา ให้สำหรับเด็กที่พลาดโอกาสในการเรียนรู้สิ่งใหม่ๆในด้านเทคโนโลยี</p>
  </header>
</Zoom>

{/* Image Carousel */}

  <div className="mt-8 grid grid-flow-col gap-4">
    {images.map((src, index) => (
      <Image
        key={index}
        src={src}
        alt={`กิจกรรมที่ ${index + 1}`}
        width={300}
        height={250}
        className="rounded-lg object-cover hover:scale-110 transition-transform"
      />
    ))}
  </div>

{/* Replace the button with Link */}
<Link href="/gallery">
  <button
    className="mt-8 bg-blue-500 text-white px-4 rounded-lg py-2 hover:bg-blue-600 transition-color duration-300"
  >
    ดูรูปภาพทั้งหมด
  </button>
</Link>
        </div>
      </div>
    </div>
  </section>
);
}

