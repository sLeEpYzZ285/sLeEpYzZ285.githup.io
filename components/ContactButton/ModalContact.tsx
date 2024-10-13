"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Image,
  Link,
} from "@nextui-org/react";
import { title } from "@/components/primitives";
import { siteConfig } from "@/config/site";

export default function ModalContact({
  text,
  buttonStyle = "",
}: {
  text: string;
  buttonStyle?: string;
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        className={buttonStyle}
        color="primary"
        variant="shadow"
        onPress={onOpen}
      >
        {text}
      </Button>

      <Modal
        className="overflow-hidden"
        backdrop="transparent"
        placement="center"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex justify-center ">
                <Image
                  className="w-4/5 mx-auto"
                  src="logo/rayong_oa_newlogo2.png"
                />
              </ModalHeader>
              <ModalBody className=" relative z-10 mt-8">
                <h1
                  className={`${title({
                    color: "blue",
                    size: "sm",
                  })} !text-2xl`}
                >
                  ช่องทางการติดต่อ
                </h1>
                <div className="mt-6">
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
                      <p className="">{siteConfig?.footer.contact.facebook}</p>
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
                      <p className="">{siteConfig?.footer?.contact.line}</p>
                    </Link>
                  </div>

                  <div className="flex mb-2">
                    <Link
                      isExternal
                      className="flex items-center gap-1 text-current"
                      href={`mailto:${siteConfig?.footer?.contact.mail}`}
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
                      <p className="">{siteConfig?.footer?.contact.mail}</p>
                    </Link>
                  </div>
                  <div className=" mt-4 md:inline-block bg-primary-50 text-center text-blue-600 rounded-3xl px-5 py-2">
                    {siteConfig?.footer?.contact.phone.map((data, index) => (
                      <Link
                        className="me-3"
                        key={index}
                        href={`tel:${siteConfig?.footer?.contact.phone[index]}`}
                      >
                        {siteConfig?.footer?.contact.phone[index]}{" "}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="h-32"></div>
                <div className="-m-7 -mb-4 -z-10 absolute bottom-0">
                  <Image className="w-full" src="photo/contact_bg.svg" />
                </div>
              </ModalBody>
              {/* <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter> */}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
