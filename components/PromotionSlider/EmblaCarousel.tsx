"use client";
import React, { useCallback, useEffect, useRef } from "react";
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import Autoplay from 'embla-carousel-autoplay'

const TWEEN_FACTOR_BASE = 0.52;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
  photo: string[];
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options, photo } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options,[
    Autoplay({ playOnInit: false, delay: 5000 })
  ]);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);
  const autoplay = emblaApi?.plugins()?.autoplay
  autoplay?.play();
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi
  );

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".embla__slide__number") as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenScale = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === "scroll";

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
          const scale = numberWithinRange(tweenValue, 0.85, 1.2).toString();
          // const opacity = numberWithinRange(tweenValue, 0.5, 1).toString();
          const tweenNode = tweenNodes.current[slideIndex];
          tweenNode.style.transform = `scale(${scale})`;
          // tweenNode.style.opacity = scale;
        });
      });
    },
    []
  );

  useEffect(() => {
    
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenScale)
      .on("scroll", tweenScale)
      .on("slideFocus", tweenScale)
  }, [emblaApi, tweenScale]);

  return (
    <div className="embla_02 ">
      <div className="embla__viewport rounded-2xl py-10  " ref={emblaRef}>
        <div className="embla__container   flex items-center  ">
          {photo.map((src, index) => (
            <div
              className={"embla__slide transition-all aspect-[4/2]  ".concat(
                index === selectedIndex ? " z-50 drop-shadow-xl  " : "z-20  "
              )}
              key={index}
            >
              <div className="embla__slide__number  aspect-[4/2] ">
                <img
                  src={src}
                  className="  !w-full !h-full rounded-2xl object-cover overflow-hidden mx-0 sm:!-mx-10"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-5">
        <div className=" !flex !justify-center mt-5">
          {/* <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} /> */}
          <div className="embla__dots">
            {photo.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={"embla__dot ".concat(
                  index === selectedIndex ? " embla__dot--selected" : ""
                )}
              />
            ))}
          </div>
          {/* <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} /> */}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
