import Image from "next/image";
import { useContent } from "@contexts/ContentProvider/ContentProvider";
import {
  SlideShowWrapper,
  SlideShowNav,
  SlideShowNavButton,
  SlideShowContentWrapper,
  SlideShowContent,
  ContentTitle,
  ContentDescription,
} from "./SlideShow.style";

export const SlideShow = () => {
  const slides = useContent("home.slideshow");

  return (
    <SlideShowWrapper>
      <SlideShowNav>
        <SlideShowNavButton pos="left" />
        <SlideShowNavButton pos="right" />
      </SlideShowNav>

      <SlideShowContentWrapper>
        {slides.map((slide) => (
          <>
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
          </>
        ))}
      </SlideShowContentWrapper>
    </SlideShowWrapper>
  );
};
