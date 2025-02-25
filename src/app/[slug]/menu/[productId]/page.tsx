import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

import ProductHeader from "./components/product-header";

interface ProductPageProps {
  params: Promise<{ slug: string; productId: string }>;
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const { slug, productId } = await params;

  const products = await db.product.findUnique({ where: { id: productId } });

  if (!products) return notFound();

  return (
    <>
      <ProductHeader products={products} />
      <h1>Product Page</h1>
      {slug}
      {productId}
    </>
  );
};

export default ProductPage;
