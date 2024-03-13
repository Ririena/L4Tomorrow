import { TypeAnimation } from "react-type-animation";
import { Image } from "@nextui-org/react";
export default function RankLoader() {
  return (
    <>
      <div className="backdrop">
        <div className="loader-container">
          <Image src="/memories.gif" className="w-full max-w-[800px]" />
          <div className="font-montserrat mt-4 text-2xl lg:text-4xl xl:text-4xl">
            <TypeAnimation
              sequence={[
                "Eternity",
                1000,
                "Eternity And",
                1000,
                "Eternity And The Auto Memories Doll",
                1000,
              ]}
              wrapper="h1"
              speed={50}
              repeat={Infinity}
            />
          </div>
        </div>
      </div>
    </>
  );
}
