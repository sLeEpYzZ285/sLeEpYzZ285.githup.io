"use client";
import React from "react";
import { title } from "@/components/primitives";
import ProductFilter from "@/components/ProductFilter";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { product_type, products } from "@/api/product_data";
import { Divider } from "@nextui-org/react";
import Link from "next/link";
import CardProduct from "@/components/CardProduct";
import { JackInTheBox } from "react-awesome-reveal";
import EmblaCarousel from "@/components/PromotionSlider/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import { promotion_photo } from "@/api/promotion";
import { usePathname } from "next/navigation"; // ใช้ usePathname
import { useEffect, useState } from "react";
import { productTypeListType } from "@/api/product_type";

export default function Products() {
  const pathName = usePathname();
  const [type, setType] = useState("");
  const [filterKeys, setFilterKeys] = React.useState<Set<string>>(
    new Set(type)
  );
  const [sortKey, setSortKey] = React.useState<string>(""); // สถานะสำหรับจัดเรียง

  useEffect(() => {
    // ดึงค่า query parameters จาก pathname
    const params = new URLSearchParams(window.location.search);
    const typeParam = params.get("type");
    setType(typeParam || "");
    handleSortChange(typeParam || "");
  }, [pathName]);

  const handleFilterChange = (selectedKeys: Set<string>) => {
    setFilterKeys(selectedKeys); // อัปเดต filterKeys เมื่อมีการเลือกใหม่
  };

  const typeProduct = productTypeListType.find(
    (typeList) => typeList.type === type
  );
  const typeTop = products.filter((products) => products.type === type);
  // กรองผลิตภัณฑ์ตามประเภทที่เลือก
  const filteredProducts = products.filter((product) => {
    if (filterKeys.size === 0) return true; // ถ้ายังไม่มีการเลือก ให้แสดงทั้งหมด
    return filterKeys.has(product.type);
  });

  const handleSortChange = (key: string) => {
    setSortKey(key); // อัปเดตสถานะเรียงลำดับ
  };

  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  // เรียงลำดับผลิตภัณฑ์ตามราคาหรือวันที่
  const sortedProducts = React.useMemo(() => {
    if (sortKey === "high_to_low") {
      return filteredProducts.sort((a, b) => b.price - a.price);
    }
    if (sortKey === "low_to_high") {
      return filteredProducts.sort((a, b) => a.price - b.price);
    }
    if (sortKey === "latest") {
      return filteredProducts.sort((a, b) => b.id.localeCompare(a.id)); // ตัวอย่างการเรียงจากล่าสุด
    }
    if (sortKey === "oldest") {
      return filteredProducts.sort((a, b) => a.id.localeCompare(b.id)); // ตัวอย่างการเรียงจากเก่าสุด
    }
    return filteredProducts; // ถ้าไม่เลือกให้แสดงตามเดิม
  }, [filteredProducts, sortKey]);
  // console.log(typeTop);

  return (
    <>
      {typeProduct && typeTop.length != 0 ? (
        <section>
          <JackInTheBox triggerOnce>
            <div className="text-center">
              <h1 className={title({ color: "blue", size: "lg" })}>
                {typeProduct.name}
              </h1>
              <h1 className="text-xl font-bold">{typeProduct.caption}</h1>
            </div>
          </JackInTheBox>

          <div className="grid grid-cols-12 gap-4 mt-10">
            <div className="col-span-12 md:col-span-6">
              <Image
                alt="Woman listing to music"
                height={200}
                src={typeProduct.imageUrl}
                width={200}
                className=" rounded-xl overflow-hidden object-cover  !w-full !h-full hover:shadow-lg hover:shadow-primary-100  transition-all  cursor-pointer"
              />
            </div>
            <div className="col-span-12 md:col-span-6 ">
              <div className="">
                <h1
                  className={`${title({
                    color: "yellow",
                  })} !text-2xl `}
                >
                  สุดในรุ่น!!{" "}
                </h1>
                <h1
                  className={`${title({
                    color: "blue",
                  })} !text-2xl `}
                >
                  สิ้นค้าแนะนำ
                </h1>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {typeTop.slice(0, 3).map((data) => (
                  <Link className="col-span-1 " href={`/${data.slug}`} key={data.id}>
                    <CardProduct data={data} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <>
          <section>
            <JackInTheBox triggerOnce>
              <div className="text-center">
                <h1 className={title({ color: "blue" })}>สินค้าทั้งหมด</h1>
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
        </>
      )}

      <section className="mt-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <h3 className="text-xl text-start mb-3 sm:mb-0">ตัวกรอง</h3>
          <ProductFilter
            onFilterChange={handleFilterChange}
            onSortChange={handleSortChange}
          />
        </div>
        <br />
        <Divider />
      </section>

      <section>
        <div className="grid grid-cols-12 mt-10 gap-3 ">
          {sortedProducts.map((data: product_type, i) => (
            <Link
              className="col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-2 "
              href={`/${data.slug}`}
              key={data.id}
            >
              <CardProduct data={data} />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
