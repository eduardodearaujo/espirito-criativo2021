import Image from "next/image";
import { useContent } from "@contexts/ContentProvider/ContentProvider";
import { useState } from 'react'
import {
  SlideShowWrapper,
  SlideShowNav,
  SlideShowNavButton,
  SlideShowContentWrapper,
  SlideShowContent,
  ContentTitle,
  ContentDescription,
} from "./SlideShow.style";

const nextSlideshowPos = (slides, currentPos) => increment => {
  const futurePos = (currentPos + increment) % slides.length

  return futurePos >= 0 ? futurePos : slides.length + futurePos
}

export const SlideShow = () => {
  const slides = useContent("home.slideshow");
  const [slidePos, setSlidePos] = useState(0)
  const slide = slides[slidePos]
  const walkSlideshow = nextSlideshowPos(slides, slidePos)

  return (
    <SlideShowWrapper>
      <SlideShowNav>
        <SlideShowNavButton pos="left" onClick={() => setSlidePos(walkSlideshow(-1))} />
        <SlideShowNavButton pos="right" onClick={() => setSlidePos(walkSlideshow(1))} />
      </SlideShowNav>

      <SlideShowContentWrapper>
        <SlideShowContent>
          <ContentTitle dangerouslySetInnerHTML={{ __html: slide.title }} />

          <ContentDescription>{slide.description}</ContentDescription>
        </SlideShowContent>
        <Image
          width={slide.image.width}
          height={slide.image.height}
          src={slide.image.src}
          alt={slide.image.alt}
        />
      </SlideShowContentWrapper>
    </SlideShowWrapper>
  );
};
