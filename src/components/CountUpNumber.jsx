import { useMotionValue, animate, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const CountUpNumber = ({ to }) => {
  const ref = useRef(null);
  const count = useMotionValue(0);
  const [current, setCurrent] = useState(0);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;

    const controls = animate(count, to, {
      duration: 2,
      ease: "easeOut",
      onUpdate: latest => setCurrent(Math.floor(latest)),
    });

    return controls.stop;
  }, [inView, to]);

  return <span ref={ref}>{current}</span>;
};

export default CountUpNumber;
