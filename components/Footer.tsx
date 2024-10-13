"use client";
import React from "react";
import { Link } from "@nextui-org/link";
import { Chip } from "@nextui-org/chip";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
// import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { usePathname } from "next/navigation";
import Image from "next/image";
import NewLogo from "./NewLogo";
// import { Locale } from "@/i18n/config";
// import { useNavbarContext } from "@/app/Context/NavbarContext";
const footer = {
  address: {
    title: "สำนักงานใหญ่",
    detail:
      "ตั้งอยู่เลขที่ 31,33,35 ซอยศูนย์การค้าสาย 4 ถนนสุขุมวิท ตำบลท่าประดู่ อำเภอเมืองระยองจังหวัดระยอง 21000",
  },
  site_map_title: "เมนู",
  contact: {
    title: "ช่องทางการติดต่อ",
    facebook: "ระยอง โอเอ แอนด์ เซอร์วิส",
    line: "@rayongoa",
    mail: "all@rayong-oa.com",
    phone: ["038-860278", "086-3276841", " 038-860279"],
  },
};

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  //   const { itemActive, setItemActive } = useNavbarContext()
  const pathName = usePathname();
  const pathNameCurrent = pathName.split("/")[2];

  return (
    <div className="w-full ">
      <div
        className="container flex 
      items-center justify-center 
      pb-5 pt-16 
        p-10 
      rounded-t-3xl
      
      "
        // shadow-lg   shadow-blue-500/50 bg-primary bg-gradient-to-r from-[#0E8BFF] to-[#006FEE]  text-white
      >
        <div className="grid grid-cols-12 max-w-7xl gap-6">
          <div className="col-span-12 h-[2px] bg-primary-100 w-full mt-24 mb-8   "></div>
          <div className="LOGO text-center block col-span-12 xl:col-span-2 xl:flex gap-4">
            <div className=" flex text-center justify-center -mt-32 mb-4 xl:my-0">
              <div className="   p-4 w-32 h-32 object-center flex justify-center items-center">
                {/* <svg
                  width="100"
                  height="100"
                  viewBox="0 0 335 210"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M121.791 115.304H108.022C107.623 115.304 107.424 115.114 107.424 114.734L107.663 34.5881C107.663 34.2843 107.823 34.1324 108.142 34.1324H131.728C139.231 34.1324 145.157 36.316 149.507 40.6831C153.897 45.0123 156.092 50.9174 156.092 58.3985C156.092 63.8669 154.954 68.6327 152.68 72.6961C150.365 76.7214 147.372 79.8354 143.7 82.0379C140.029 84.2405 136.038 85.3417 131.728 85.3417H122.389V114.734C122.389 115.114 122.19 115.304 121.791 115.304ZM131.728 47.9743L122.389 48.0882V71.215H131.728C134.322 71.215 136.577 70.0378 138.492 67.6834C140.408 65.2909 141.366 62.196 141.366 58.3985C141.366 55.3605 140.508 52.8731 138.792 50.9364C137.076 48.9617 134.721 47.9743 131.728 47.9743Z"
                    fill="black"
                  />
                  <path
                    d="M163.002 114.734L178.207 34.5881C178.287 34.2843 178.487 34.1324 178.806 34.1324H196.585C196.904 34.1324 197.104 34.2843 197.183 34.5881L211.79 114.734C211.83 115.114 211.67 115.304 211.311 115.304H197.722C197.323 115.304 197.104 115.114 197.064 114.734L195.747 106.19H179.045L177.728 114.734C177.688 115.114 177.489 115.304 177.13 115.304H163.481C163.162 115.304 163.002 115.114 163.002 114.734ZM188.264 60.9618L187.546 56.6326L187.007 60.9618L181.5 93.7152H193.292L188.264 60.9618Z"
                    fill="black"
                  />
                  <path
                    d="M245.698 116.443C241.268 116.443 237.218 115.38 233.546 113.253C229.914 111.127 227.021 108.279 224.866 104.709C222.751 101.101 221.693 97.095 221.693 92.6899L221.813 56.2908C221.813 51.9617 222.851 48.0503 224.926 44.5566C227.001 41.0249 229.855 38.1957 233.486 36.0691C237.158 33.9046 241.228 32.8223 245.698 32.8223C250.248 32.8223 254.298 33.8666 257.85 35.9552C261.442 38.0438 264.295 40.873 266.41 44.4426C268.565 47.9743 269.643 51.9237 269.643 56.2908V61.6453C269.643 61.9491 269.483 62.101 269.164 62.101H255.396C255.077 62.101 254.917 61.9491 254.917 61.6453V56.2908C254.917 53.7085 254.039 51.487 252.283 49.6262C250.527 47.7654 248.332 46.8351 245.698 46.8351C242.785 46.8351 240.55 47.7844 238.994 49.6832C237.437 51.5819 236.659 53.7845 236.659 56.2908V92.6899C236.659 95.538 237.537 97.8735 239.293 99.6963C241.049 101.481 243.184 102.374 245.698 102.374C248.332 102.374 250.527 101.386 252.283 99.4115C254.039 97.3988 254.917 95.1583 254.917 92.6899V87.2785C254.917 86.9747 255.077 86.8228 255.396 86.8228H269.284C269.603 86.8228 269.763 86.9747 269.763 87.2785V92.6899C269.763 97.057 268.685 101.044 266.53 104.652C264.335 108.222 261.442 111.089 257.85 113.253C254.258 115.38 250.208 116.443 245.698 116.443Z"
                    fill="black"
                  />
                  <path
                    d="M296.727 115.304H282.839C282.52 115.304 282.36 115.114 282.36 114.734L282.6 34.702C282.6 34.3223 282.759 34.1324 283.078 34.1324H296.847C297.166 34.1324 297.326 34.3223 297.326 34.702V62.3289L316.541 34.5881C316.861 34.2843 317.16 34.1324 317.439 34.1324H331.507C331.866 34.1324 331.946 34.2843 331.746 34.5881L310.555 66.772L334.32 114.848C334.52 115.152 334.32 115.304 333.722 115.304H318.756C318.357 115.304 318.118 115.152 318.038 114.848L301.456 80.5569L297.206 86.9367V114.734C297.206 115.114 297.046 115.304 296.727 115.304Z"
                    fill="black"
                  />
                  <path
                    d="M144.462 199.142H107.902C107.583 199.142 107.424 198.988 107.424 198.681L107.52 188.398L131.542 144.176H108.812C108.524 144.176 108.381 144.053 108.381 143.807V133.893C108.381 133.585 108.524 133.432 108.812 133.432H144.271C144.59 133.432 144.749 133.585 144.749 133.893V144.084L120.871 188.075H144.462C144.717 188.075 144.845 188.244 144.845 188.582L144.941 198.681C144.941 198.988 144.781 199.142 144.462 199.142Z"
                    fill="#3887FD"
                  />
                  <path
                    d="M172.19 200.064C168.713 200.064 165.507 199.204 162.572 197.482C159.669 195.76 157.324 193.47 155.537 190.611C153.783 187.722 152.905 184.555 152.905 181.112L153.001 151.185C153.001 147.68 153.878 144.529 155.633 141.732C157.356 138.904 159.685 136.644 162.62 134.953C165.555 133.232 168.745 132.371 172.19 132.371C175.763 132.371 178.97 133.216 181.809 134.907C184.68 136.598 186.977 138.873 188.7 141.732C190.454 144.56 191.332 147.711 191.332 151.185L191.427 181.112C191.427 184.555 190.566 187.706 188.843 190.565C187.089 193.455 184.76 195.76 181.857 197.482C178.954 199.204 175.731 200.064 172.19 200.064ZM172.19 188.675C174.168 188.675 175.891 187.906 177.358 186.369C178.826 184.801 179.56 183.049 179.56 181.112L179.464 151.185C179.464 149.095 178.778 147.327 177.406 145.882C176.035 144.437 174.296 143.715 172.19 143.715C170.18 143.715 168.458 144.422 167.022 145.836C165.587 147.25 164.869 149.033 164.869 151.185V181.112C164.869 183.172 165.587 184.955 167.022 186.461C168.458 187.937 170.18 188.675 172.19 188.675Z"
                    fill="#3887FD"
                  />
                  <path
                    d="M212.456 199.142H202.646C202.136 199.142 201.88 198.927 201.88 198.496L201.785 134.169C201.785 133.678 202.04 133.432 202.55 133.432H211.403L227.96 170.645L227.482 134.169C227.482 133.678 227.769 133.432 228.343 133.432H238.057C238.44 133.432 238.632 133.678 238.632 134.169L238.727 198.589C238.727 198.958 238.568 199.142 238.249 199.142H229.635L212.647 164.373L213.365 198.404C213.365 198.896 213.062 199.142 212.456 199.142Z"
                    fill="#3887FD"
                  />
                  <path
                    d="M282.247 199.142H250.568C250.313 199.142 250.185 198.988 250.185 198.681L250.281 133.801C250.281 133.555 250.409 133.432 250.664 133.432H282.151C282.406 133.432 282.534 133.585 282.534 133.893V144.453C282.534 144.699 282.406 144.821 282.151 144.821H262.053V159.577H282.151C282.406 159.577 282.534 159.7 282.534 159.946L282.63 170.645C282.63 170.89 282.502 171.013 282.247 171.013H262.053V187.522H282.247C282.502 187.522 282.63 187.675 282.63 187.983V198.773C282.63 199.019 282.502 199.142 282.247 199.142Z"
                    fill="#3887FD"
                  />
                  <path
                    d="M0 92.9807V126.089L62.9773 63.1117L46.8244 46.1562L0 92.9807ZM40.773 39.8041L0 80.5772V43.3666L22.6188 20.7478L40.773 39.8041ZM16.5674 14.3957L3.44807 0.624501C2.20286 -0.682586 0 0.198746 0 2.00402V30.9632L16.5674 14.3957ZM72.3231 78.5729L2.9031 147.993L21.0573 167.049L72.3231 115.783V78.5729ZM72.3231 128.187L27.1087 173.401L33.1601 179.753L72.3231 140.59V128.187ZM72.3231 152.994L39.2115 186.105L43.2616 190.357L72.3231 161.295V152.994ZM72.3231 186.102L55.3644 203.061L61.4158 209.413L72.3231 198.506V186.102Z"
                    fill="#3887FD"
                  />
                </svg> */}
                {/* <NewLogo /> */}
                <Image
                  src={
                    "logo/rayong_oa_newlogo.png"
                  }
                  width={100}
                  height={100}
                  alt="RayongOA Logo"
                  className=" drop-shadow-xl "
                />
              </div>
            </div>
          </div>

          <div className="LOGO col-span-12 lg:col-span-4 xl:col-span-4 gap-4">
            <h3 className="text-xl font-bold mb-2">{footer?.address.title}</h3>
            <p className="">{footer?.address.detail}</p>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-2">
            <h3 className="text-xl font-bold mb-2">{footer?.site_map_title}</h3>
            <div className="flex flex-wrap gap-2">
              {siteConfig.navItems.map((data, index) => (
                <NextLink key={index} href={data.href} className="">
                  <Chip
                    className=" text-blue-600 hover:text-blue-800 cursor-pointer "
                    variant="flat"
                    color={"primary"}
                  >
                    {data.label}
                  </Chip>
                </NextLink>
              ))}

              {/* {siteConfig.navItems.map((item, index) => (
              <Chip
                key={item.href}
                className=" text-white hover:text-blue-200 cursor-pointer"
                variant="flat"
                color={`${item.href == itemActive ? "default" : 'primary'}`}
              >
                <NextLink color="foreground"
                  onClick={() => (setItemActive(item.href))}
                  href={`${item.href == "#contact" ? item.href :
                    pathNameCurrent
                      ? item.href == "/" ? `/${lang}` : item.href
                      : item.href == "/" ? `/${lang}`
                        : item.href == "package"
                          ? `/${lang}/${'package'}`
                          : `/${lang}/${'package' + item.href}`

                    }`}

                >
                  {item.label[lang]}
                </NextLink>
              </Chip>
            ))}
          </div> */}
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <h3 className="text-xl font-bold mb-2 ">{footer?.contact.title}</h3>
            <div className="flex mb-2">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://www.facebook.com/rayongoaandservice?mibextid=ZbWKwL"
                title="natachat fanpage"
              >
                <div className="me-4 bg-white p-1 rounded-full">
                  <svg
                    fill="#006FEE"
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                  </svg>
                </div>
                <p className="">{footer?.contact.facebook}</p>
              </Link>
            </div>
            <div className="flex mb-2">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://liff.line.me/1645278921-kWRPP32q/?accountId=rayongoa"
                title="natachat lineadd"
              >
                <div className="me-4 bg-white p-1 rounded-full">
                  <svg
                    fill="#006FEE"
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path d="M311 196.8v81.3c0 2.1-1.6 3.7-3.7 3.7h-13c-1.3 0-2.4-.7-3-1.5l-37.3-50.3v48.2c0 2.1-1.6 3.7-3.7 3.7h-13c-2.1 0-3.7-1.6-3.7-3.7V196.9c0-2.1 1.6-3.7 3.7-3.7h12.9c1.1 0 2.4 .6 3 1.6l37.3 50.3V196.9c0-2.1 1.6-3.7 3.7-3.7h13c2.1-.1 3.8 1.6 3.8 3.5zm-93.7-3.7h-13c-2.1 0-3.7 1.6-3.7 3.7v81.3c0 2.1 1.6 3.7 3.7 3.7h13c2.1 0 3.7-1.6 3.7-3.7V196.8c0-1.9-1.6-3.7-3.7-3.7zm-31.4 68.1H150.3V196.8c0-2.1-1.6-3.7-3.7-3.7h-13c-2.1 0-3.7 1.6-3.7 3.7v81.3c0 1 .3 1.8 1 2.5c.7 .6 1.5 1 2.5 1h52.2c2.1 0 3.7-1.6 3.7-3.7v-13c0-1.9-1.6-3.7-3.5-3.7zm193.7-68.1H327.3c-1.9 0-3.7 1.6-3.7 3.7v81.3c0 1.9 1.6 3.7 3.7 3.7h52.2c2.1 0 3.7-1.6 3.7-3.7V265c0-2.1-1.6-3.7-3.7-3.7H344V247.7h35.5c2.1 0 3.7-1.6 3.7-3.7V230.9c0-2.1-1.6-3.7-3.7-3.7H344V213.5h35.5c2.1 0 3.7-1.6 3.7-3.7v-13c-.1-1.9-1.7-3.7-3.7-3.7zM512 93.4V419.4c-.1 51.2-42.1 92.7-93.4 92.6H92.6C41.4 511.9-.1 469.8 0 418.6V92.6C.1 41.4 42.2-.1 93.4 0H419.4c51.2 .1 92.7 42.1 92.6 93.4zM441.6 233.5c0-83.4-83.7-151.3-186.4-151.3s-186.4 67.9-186.4 151.3c0 74.7 66.3 137.4 155.9 149.3c21.8 4.7 19.3 12.7 14.4 42.1c-.8 4.7-3.8 18.4 16.1 10.1s107.3-63.2 146.5-108.2c27-29.7 39.9-59.8 39.9-93.1z" />
                  </svg>
                </div>
                <p className="">{footer?.contact.line}</p>
              </Link>
            </div>

            <div className="flex mb-2">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href={`mailto:${footer?.contact.mail}`}
                title="natachat email"
              >
                <div className="me-4 bg-white p-1 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 18 16"
                    fill="none"
                  >
                    <path
                      d="M8.72013 0.0078125C4.07696 0.0078125 0.308594 3.51206 0.308594 7.8298C0.308594 12.1475 4.07696 15.6518 8.72013 15.6518H12.9259V14.0874H8.72013C5.06952 14.0874 1.9909 11.2245 1.9909 7.8298C1.9909 4.43506 5.06952 1.57221 8.72013 1.57221C12.3707 1.57221 15.4494 4.43506 15.4494 7.8298V8.94835C15.4494 9.56629 14.8521 10.1764 14.1876 10.1764C13.5231 10.1764 12.9259 9.56629 12.9259 8.94835V7.8298C12.9259 5.67093 11.0417 3.91881 8.72013 3.91881C6.39855 3.91881 4.51436 5.67093 4.51436 7.8298C4.51436 9.98867 6.39855 11.7408 8.72013 11.7408C9.88092 11.7408 10.9408 11.3028 11.6978 10.591C12.2446 11.2871 13.1867 11.7408 14.1876 11.7408C15.8447 11.7408 17.1317 10.4893 17.1317 8.94835V7.8298C17.1317 3.51206 13.3633 0.0078125 8.72013 0.0078125ZM8.72013 10.1764C7.32381 10.1764 6.19667 9.12825 6.19667 7.8298C6.19667 6.53135 7.32381 5.48321 8.72013 5.48321C10.1164 5.48321 11.2436 6.53135 11.2436 7.8298C11.2436 9.12825 10.1164 10.1764 8.72013 10.1764Z"
                      fill="#006FEE"
                    />
                  </svg>
                </div>
                <p className="">{footer?.contact.mail}</p>
              </Link>
            </div>
            <div className=" mt-4 md:inline-block bg-primary-50 text-center text-blue-600 rounded-3xl px-5 py-2">
              {footer?.contact.phone.map((data, index) => (
                <Link
                  className="me-3"
                  key={index}
                  href={`tel:${footer?.contact.phone[index]}`}
                >
                  {footer?.contact.phone[index]}{" "}
                </Link>
              ))}
            </div>
          </div>
          <div className="col-span-12 flex  justify-center sm:justify-center">
            <hr />
            <p className="text-center">
              ©{year} ALL RIGHTS RESERVED
              {/* |{" "}
              <Link href="/terms" isExternal className="  transition-all">
                Hosted & Developed by ProXtae Production
              </Link> */}
            </p>
          </div>
        </div>
        <div id="contact"></div>
      </div>
    </div>
  );
}
