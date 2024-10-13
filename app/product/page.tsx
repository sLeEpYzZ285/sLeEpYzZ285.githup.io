import Content from "./Content";
import { products } from "@/api/product_data";
// ฟังก์ชัน generateStaticParams สำหรับสร้าง static paths
// ฟังก์ชัน generateStaticParams สำหรับสร้าง static paths
// export async function generateStaticParams() {
//   return products.map((product) => ({
//     product_id: product.id,
//   }));
// }

// component สำหรับแสดงผลข้อมูลผลิตภัณฑ์
export default async function ProductPage() {
//   {
//   params,
// }: {
//   params: { product_id: string };
// }
  // const { product_id } = params;

  // // หา product ที่ตรงกับ product_id
  // const product = products.find((prod) => prod.id === product_id);

  // // ถ้าไม่เจอผลิตภัณฑ์ที่ต้องการ ให้แสดงข้อความ error
  // if (!product) {
  //   return <div>Product not found</div>;
  // }

  return (
    <>
      <Content />
      {/* <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: {product.price}</p> */}
    </>
  );
}
