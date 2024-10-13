import React from 'react'
// import Image from 'next/image'
import { product_type } from '@/api/product_data'
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

export default function CardProduct({data}:{data:product_type}) {
  return (
   
    <Card className=" mx-w-[350px] min-w-[150px] shadow-normal hover:shadow-primary-50 hover:shadow-xl scale-100 hover:scale-[1.02] transition-all">
      <CardBody className="overflow-visible ">
        <div className="rounded-xl flex justify-center  bg-white">
        <Image
          alt={data.name}
          className="object-cover rounded-xl   aspect-square w-full "
          src={data.image} 
          width={270}
        />
        </div>
      </CardBody>
      <CardHeader className=" p-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold !h-8 text-clip overflow-hidden ">{data.name}</p>
        <small className="text-default-500 mt-3 mb-2">สินค้าคงเหลือ {data.stock} ชิ้น</small>
        <h4 className="font-bold text-large ">฿{data.price.toLocaleString()}</h4>
      </CardHeader>
    </Card>
  )
}
