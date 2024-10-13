import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

export default function PromotionCard() {
  return (
    <div className="w-full gap-3 grid grid-cols-12 grid-rows-2 ">
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          {/* <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
        <h4 className="text-white font-medium text-large">Stream the Acme event</h4> */}
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://dlcdnwebimgs.asus.com/gain/CBECA40C-88C6-449A-956B-3C7A96CEB865/w750/h470"
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
          Computer ที่ออกแบบได้ดั่งใจ เพื่อประสิทธิภาพขั้นสุด
          </p>
          <h4 className="text-white font-medium text-large">
          เพื่อประสิทธิภาพขั้นสุด
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://assets.hardwarezone.com/img/2020/06/asus-rog-strix-g35.jpg"
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
          Printer
          </p>
          <h4 className="text-white font-medium text-large">
          คมชัด ลื่นไหล ไม่มีสะดุด
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://cdn.thewirecutter.com/wp-content/media/2024/08/laserprinters-2048px-02603-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp"
        />
      </Card>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-5 bg-black"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          {/* <p className="text-tiny text-white/60 uppercase font-bold">New</p>
          <h4 className="text-black font-medium text-2xl">Acme camera</h4> */}
        </CardHeader>
        <div className="">
        <iframe
          className="w-full aspect-video rounded-2xl pointer-events-none "
          src="https://www.youtube.com/embed/RRJbotw4g3w?controls=0&modestbranding=1&rel=0&autoplay=1&mute=1&disablekb=1&loop=1&playlist=RRJbotw4g3w,fmSmcSfC5fk"
          title="2022 Nitro 5 | Gaming Laptop | Acer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
        {/* <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src="https://nextui.org/images/card-example-6.jpeg"
        /> */}
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            {/* <p className="text-black text-tiny">Available soon.</p>
            <p className="text-black text-tiny">Get notified.</p> */}
          </div>
          {/* <Button className="text-tiny" color="primary" radius="full" size="sm">
            Notify Me
          </Button> */}
        </CardFooter>
      </Card>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-7"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          {/* <p className="text-tiny text-white/60 uppercase font-bold">
            Your day your way
          </p>
          <h4 className="text-white/90 font-medium text-xl">
            Your checklist for better sleep
          </h4> */}
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src="https://cdn.mercular.com/images/homepage/sections/8/spaces/11/1727687490709_MW_HP.jpg"
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          {/* <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Breathing app icon"
              className="rounded-full w-10 h-11 bg-black"
              src="https://nextui.org/images/breathing-app-icon.jpeg"
            />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">Breathing App</p>
              <p className="text-tiny text-white/60">
                Get a good night's sleep.
              </p>
            </div>
          </div>
          <Button radius="full" size="sm">
            Get App
          </Button> */}
        </CardFooter>
      </Card>
    </div>
  );
}
