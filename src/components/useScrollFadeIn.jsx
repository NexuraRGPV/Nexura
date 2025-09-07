import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useScrollFadeIn = ({ contentSelector, imageSelector }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return; // Exit if the element is not yet available

    const content = el.querySelector(contentSelector);
    const image = el.querySelector(imageSelector);

    // Animate the text content
    if (content) {
      gsap.fromTo(
        content,
        { y: 50, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Animate the image container
    if (image) {
      gsap.fromTo(
        image,
        { x: 100, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 1,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [contentSelector, imageSelector]); // Rerun effect if selectors change

  return elementRef;
};

export default useScrollFadeIn;