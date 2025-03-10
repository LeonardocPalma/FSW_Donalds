import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

import ProductDetails from "./components/product-details";
import ProductHeader from "./components/product-header";

interface ProductPageProps {
  params: Promise<{ slug: string; productId: string }>;
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const { slug, productId } = await params;

  const products = await db.product.findUnique({
    where: { id: productId },
    include: {
      restaurant: {
        select: {
          avatarImageUrl: true,
          name: true,
          slug: true,
        },
      },
    },
  });

  if (!products) return notFound();

  if (products.restaurant.slug.toUpperCase() !== slug.toUpperCase()) return notFound();

  return (
    <div className="flex h-full flex-col">
      <ProductHeader products={products} />
      <ProductDetails product={products} />
    </div>
  );
};

export default ProductPage;
