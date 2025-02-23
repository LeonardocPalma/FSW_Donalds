import { Product } from "@prisma/client";
import Link from "next/link";


interface ProductsProps {
    products: Product[]
}

const Products = ({ products }: ProductsProps) => {
    return <div className="space-y-3">
        {products.map(product => (
            <Link key={product.id} href="/" className="flex items-center justify-between gap-10 py-3">
                <div>
                    <h3 className="text-sm font-medium">
                    {product.name}
                    </h3>
                    <p className="line-clamp-2 text sm text muted-foreground">
                    {product.description}
                    </p>
                    <p className="pt-3 text-sm font-semibold">
                        {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
                    </p>
                </div>
            </Link>
        ))}
    </div>
}
 
export default Products;