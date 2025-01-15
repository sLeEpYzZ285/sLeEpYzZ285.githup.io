import { productTypeListType } from "@/api/product_type";
import Content from "./Content";
import { product_type, products } from "@/api/product_data";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  // แสดง slug ที่ต้องการสร้างแบบ static
  const slugs = ["product1", "product2", "product3"];
  
  return slugs.map((slug) => ({
    slug,
  }));
}


export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  
  const slug = (await params).slug;

  const data = products.find((product) => product.slug === slug);

  if(!data){
    notFound()
  }
  
  
  return(
    <>
    {/* <div>slug product: {slug}</div> */}
    <Content data = {data||undefined} />
  </>
  )
 
}
