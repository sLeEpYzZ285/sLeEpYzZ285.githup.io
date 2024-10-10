import React from "react";
// import Image from 'next/image'
import { product_type } from "@/api/product_data";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { Chip } from "@nextui-org/react";

export default function HitProduct({
  data,
  rank,
}: {
  data: product_type;
  rank: number;
}) {
  return (
    <Card className="flex py-4 h-auto sm:h-[250px] mb-3  shadow-normal hover:shadow-primary-50 hover:shadow-xl scale-100 hover:scale-[1.02] transition-all">
      <CardBody className="  overflow-visible  p-4  ">
      <div className="absolute top-0 left-4 z-20  ">
              <Chip
                color="warning"
                variant="shadow"
                className="  h-10 py-3  text-white"
              >
                <p className="font-bold text-large">อันดับ{rank}</p>
              </Chip>
            </div>
        <div className="block sm:flex items-center gap-3">
          <div className="rounded-xl flex  justify-center items-center p-1">
            <Image
              alt={data.name}
              className="object-cover rounded-xl   aspect-square w-full "
              src={data.image}
              width={240}
            />
            {/* <div className="absolute top-4 left-4 z-20  ">
              <Chip
                color="warning"
                variant="shadow"
                className="  h-10 py-3  text-white"
              >
                <p className="font-bold text-xl">อันดับ{rank}</p>
              </Chip>
            </div> */}
          </div>
          <div className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-xl uppercase font-bold  text-clip overflow-hidden te">
              {data.name}
            </p>
            <small className="text-default-500 mt-3 mb-2">
              สินค้าคงเหลือ {data.stock} ชิ้น
            </small>
            <div className="mt-2">
              <Chip
                color="primary"
                variant="shadow"
                className="text-white h-10 px-4 "
              >
                <p className="font-semibold text-base ">
                  ฿{data.price.toLocaleString()}
                </p>
              </Chip>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
