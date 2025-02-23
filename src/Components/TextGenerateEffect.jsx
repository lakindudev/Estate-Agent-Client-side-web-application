import React, { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";

export const TextGenerateEffect = ({
  words,
  className = "",
  filter = true,
  duration = 0.5
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate("span", {
      opacity: 1,
      filter: filter ? "blur(0px)" : "none",
    }, {
      duration: duration,
      delay: (i) => i * 0.2,
    });
  }, [scope.current]);

  return (
    <div className={className}>
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="opacity-0 text-inherit"
            style={{
              filter: filter ? "blur(10px)" : "none",
            }}>
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};