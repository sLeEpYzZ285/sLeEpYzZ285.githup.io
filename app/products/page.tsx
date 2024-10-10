"use client"
import React from "react";
import { title } from "@/components/primitives";
import ProductFilter from "@/components/ProductFilter";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { product_type, products } from "@/api/product_data";
import { Divider } from "@nextui-org/react";
import Link from "next/link";
import CardProduct from "@/components/CardProduct";

export default function BlogPage() {
  const [filterKeys, setFilterKeys] = React.useState<Set<string>>(new Set());
  const [sortKey, setSortKey] = React.useState<string>(""); // สถานะสำหรับจัดเรียง

  const handleFilterChange = (selectedKeys: Set<string>) => {
    setFilterKeys(selectedKeys); // อัปเดต filterKeys เมื่อมีการเลือกใหม่
  };

  // กรองผลิตภัณฑ์ตามประเภทที่เลือก
  const filteredProducts = products.filter((product) => {
    if (filterKeys.size === 0) return true; // ถ้ายังไม่มีการเลือก ให้แสดงทั้งหมด
    return filterKeys.has(product.type);
  });

  const handleSortChange = (key: string) => {
    setSortKey(key); // อัปเดตสถานะเรียงลำดับ
  };


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

  return (
    <>
      <section>
        <h1 className={title()}>สินค้าทั้งหมด</h1>
      </section>
      <section className="mt-10">
        <div className="flex items-center justify-between">
          <h3 className="text-xl">ตัวกรอง</h3>
          <ProductFilter onFilterChange={handleFilterChange} onSortChange={handleSortChange} /> {/* ส่งฟังก์ชันกรอง */}
        </div>
        <br />
        <Divider />
      </section>

      <section>
        <div className="grid grid-cols-12 mt-10 gap-3 ">
          {sortedProducts.map((data:product_type, i) => (
            <Link className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-2 " href={`/products/${data.id}`} key={data.id} >
              <CardProduct  data = {data}/>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
