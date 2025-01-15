import { productTypeListType } from "@/api/product_type";
import Content from "./Content";
import { product_type, products } from "@/api/product_data";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  // สร้าง slug จาก product data
  const slugs = products.map((product) => product.slug);

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
