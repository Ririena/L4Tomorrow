import { Carousel } from "antd";
import { useSpring, animated } from "@react-spring/web";
import {Image} from "@nextui-org/react"
const HeroCarousel = () => {
  const springProps = useSpring({
    from: { opacity: 0, transform: "translateY(-50px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { duration: 1000 },
  });

  return (
    <animated.div style={springProps}>
      <Carousel autoplay dots>
        <div>
          <img src="/violet.jpg"  />
        </div>
        <div>
          <img src="/violetP.jpg" />
        </div>
      </Carousel>
    </animated.div>
  );
};


export default HeroCarousel
