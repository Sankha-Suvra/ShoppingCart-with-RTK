import type { Product } from "../features/cart/cartSlice";
import { useAppDispatch } from "../Hooks";
import { addToCart } from "../features/cart/cartSlice";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <img src={product.image} alt={product.title} className="w-full h-40 object-cover mb-2" />
      <h2 className="text-lg font-bold">{product.title}</h2>
      <p>${product.price.toFixed(2)}</p>
      <button
        onClick={() => dispatch(addToCart(product))}
        className="mt-2 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

