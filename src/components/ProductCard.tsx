type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="rounded-xl border p-4">
      <img
        src={product.image}
        alt={product.title}
        className="h-48 w-full object-contain"
      />

      <h2 className="mt-4 font-semibold">{product.title}</h2>

      <p className="mt-2 text-gray-500">${product.price}</p>
    </div>
  );
}
