import React from "react";
import { Card, Button, Image } from "@nextui-org/react";

const HeroSection = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto flex justify-between items-center">
        {/* Konten kiri */}
        <div className="max-w-lg mx-4">
          <h1 className="text-3xl font-bold mb-6">Welcome to Our Website</h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
          </p>
          <Button color="primary" variant="flat" className="mt-4">
            Get Started
          </Button>
        </div>

        <div className="flex justify-end gap-3">
          {/* Card pertama */}
          <Card className="rounded-lg overflow-hidden shadow-lg">
            <div className="relative">
              <Image
                src="/violet-landscape.jpg"
                alt="Landscape"
                className="w-full h-96 object-cover rounded-t-lg"
              />
            </div>
          </Card>

          {/* Card kedua */}
          <Card
            className="rounded-lg overflow-hidden shadow-lg mr-5"
            style={{ width: "max-content" }}
          >
            <div className="">
              <Image
                src="/violet.jpg"
                alt="Portrait"
                className="w-full h-96 object-cover rounded-t-lg"
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
