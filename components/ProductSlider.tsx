import React, { useState, useEffect, useCallback } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
  photo: string[];
};
type PropTypeButton = {
  selected: boolean;
  index: number;
  photo: string;
  onClick: () => void;
};

export const Thumb: React.FC<PropTypeButton> = (props) => {
  const { selected, index, onClick, photo } = props;

  return (
    <div
      className={"mx-1 mb-3 border-2 border-primary/0 rounded-xl !aspect-square  !p-0     ".concat(
        selected ? "   border-primary/30  shadow-lg shadow-primary-100 rounded-xl" : ""
      )}
    >
      <button onClick={onClick} type="button" className="">
        <Image
          src={photo}
          alt="product_photo"
          width={1000}
          height={1000}
          className=" rounded-xl overflow-hidden object-cover aspect-square   !h-full m-0"
        />
        {/* {index + 1} */}
      </button>
    </div>
  );
};

const ProductSlider: React.FC<PropType> = (props) => {
  const { slides, options, photo } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();

    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="embla">
      <div
        className="embla__viewport "
        ref={emblaMainRef}
      >
        <div className="embla__container w-full">
          {photo.map((_,index) => (
            <div className="embla__slide h-auto! w-full mx-10 " key={index}>
              <div className="!w-full !h-full">
                <Image
                  src={photo[index]}
                  alt="asuslogo"
                  width={1000}
                  height={1000}
                  className=" rounded-xl  !w-full !h-full"
                />
              </div>
              {/* Photo */}
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-hidden mt-5">
        <div className="" ref={emblaThumbsRef}>
          <div className="flex py-10 ">
            {photo.map((_, index) => (
              <Thumb
                key={index}
                photo={photo[index]}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
