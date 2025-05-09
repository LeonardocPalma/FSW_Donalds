"use client";

import { Product } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext } from "react";

import { Button } from "@/components/ui/button";

import { CartContext } from "../../contexts/cart";

interface ProductHeaderProps {
  products: Pick<Product, "name" | "imageUrl">;
}

const ProductHeader = ({ products }: ProductHeaderProps) => {
  const router = useRouter();
  const handleBackClick = () => router.back();

  const { toggleCart } = useContext(CartContext);

  return (
    <div className="relative min-h-[300px] w-full">
      <Button
        variant={"secondary"}
        size="icon"
        className="absolute left-4 top-4 z-50 rounded-full"
        onClick={handleBackClick}
      >
        <ChevronLeftIcon />
      </Button>

      <Image
        src={products.imageUrl}
        fill
        alt={products.name}
        className="object-contain"
      />

      <Button
        variant={"secondary"}
        size="icon"
        className="absolute right-4 top-4 z-50 rounded-full"
        onClick={toggleCart}
      >
        <ScrollTextIcon />
      </Button>
    </div>
  );
};

export default ProductHeader;
