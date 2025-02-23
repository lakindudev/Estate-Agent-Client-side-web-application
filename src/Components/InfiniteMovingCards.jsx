import React, { useEffect, useState } from "react";
import { cn } from "../../utils";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}>
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}>
        {items.map((item, idx) => (
          <li
          className="w-[350px] max-w-full relative rounded-2xl border border-slate-200 flex-shrink-0 px-8 py-6 md:w-[450px]"
          style={{
            background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
          }}
          key={item.name}
        >
          <blockquote>
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/50 to-slate-50/50 backdrop-blur-sm"
            />
            <span className="relative z-20 text-base leading-[1.6] text-slate-700 font-normal">
              {item.quote}
            </span>
            <div className="relative z-20 mt-6 flex flex-row items-center">
              <span className="flex flex-col gap-1">
                <span className="text-sm leading-[1.6] text-slate-900 font-medium">
                  {item.name}
                </span>
                <span className="text-sm leading-[1.6] text-slate-500 font-normal">
                  {item.title}
                </span>
              </span>
            </div>
          </blockquote>
        </li>
        ))}
      </ul>
    </div>
  );
};