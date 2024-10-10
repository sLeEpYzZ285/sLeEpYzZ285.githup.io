import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
  } from "@nextui-org/react";
  import Image from "next/image";
  
  export default function ProductTypeBanner() {
    return (
        <div className="grid grid-cols-12 gap-6 mt-10">
          
        <div className="col-span-12 sm:col-span-8">
        <Card isFooterBlurred radius="lg" className="border-none">
          <Image
            alt="Woman listing to music"
            height={200}
            src="https://assets-prd.ignimgs.com/2022/07/18/lenovolegion5pro-1658155480534.jpg"
            width={200}
            className=" rounded-xl overflow-hidden object-cover  !w-full !h-full hover:shadow-lg hover:shadow-primary-100 hover:scale-105 transition-all  cursor-pointer"
          />
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-tiny text-white/80">โน๊ตบุ๊ค ทั้งสายเกมมิ่ง และสายทำงาน</p>
            <Button
              className="text-tiny  text-white "
              variant="flat"
              color="primary"
              radius="lg"
              size="sm"
            >
              เพิ่มเติม
            </Button>
          </CardFooter>
        </Card> 
        </div>
        <div className="col-span-12 sm:col-span-4 ">
        <Card  isFooterBlurred radius="lg" className="border-none h-full">
          <Image
            alt="Woman listing to music"
            height={200}
            src="https://m.media-amazon.com/images/I/81wLYpb0INL._AC_SL1500_.jpg"
            width={200}
            className=" rounded-xl  overflow-hidden object-cover  !w-full !h-full hover:shadow-lg hover:shadow-primary-100 hover:scale-105 transition-all  cursor-pointer"
          />
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-tiny text-white/80">All in one PC สำหรับสายทำงาน แบบครบจบ</p>
            <Button
              className="text-tiny  text-white "
              variant="flat"
              color="primary"
              radius="lg"
              size="sm"
            >
              เพิ่มเติม
            </Button>
          </CardFooter>
        </Card> 
 
        </div>
        <div className="col-span-12 sm:col-span-6">
        <Card isFooterBlurred radius="lg" className="border-none">
          <Image
            alt="Woman listing to music"
            height={200}
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/61c4b817005143.56344c02a158c.jpg"
            width={200}
            className=" rounded-xl overflow-hidden object-cover  !w-full !h-full hover:shadow-lg hover:shadow-primary-100 hover:scale-105 transition-all  cursor-pointer"
          />
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-tiny text-white/80">Printer คุณภาพขั้นสุด ลื่นไหล ไม่มีสะดุด</p>
            <Button
              className="text-tiny  text-white "
              variant="flat"
              color="primary"
              radius="lg"
              size="sm"
            >
              เพิ่มเติม
            </Button>
          </CardFooter>
        </Card> 
        
        </div>
        <div className="col-span-12 sm:col-span-6 w-full h-full">
        <Card isFooterBlurred radius="lg" className="border-none h-full">
          <Image
            alt="Woman listing to music"
            height={200}
            src="https://www.hardwarezone.com.sg/thumbs/685089/og.jpg?9348"
            width={200}
            className=" rounded-xl overflow-hidden object-cover  !w-full !h-full hover:shadow-lg hover:shadow-primary-100 hover:scale-105 transition-all  cursor-pointer"
          />
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-tiny text-white/80">Computer ที่ออกแบบได้ดั่งใจ เพื่อประสิทธิภาพขั้นสุด</p>
            <Button
              className="text-tiny  text-white "
              variant="flat"
              color="primary"
              radius="lg"
              size="sm"
            >
              เพิ่มเติม
            </Button>
          </CardFooter>
        </Card> 

        </div>
      </div>
    );
  }
  