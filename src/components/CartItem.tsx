import type React from "react";
import type { cartItem as Item } from "../features/cart/cartSlice";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "../features/cart/cartSlice";
import { useAppDispatch } from "../Hooks";

interface Props {
  item: Item;
}

const cartItem: React.FC<Props> = ({ item }) => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex items-center justify-between border-b py-4">
      <div>
        <h4 className="font-semibold">{item.title}</h4>
        <p>
          ${item.price.toFixed(2)} x {item.quantity} = $
          {(item.price * item.quantity).toFixed(2)}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={() => dispatch(decreaseQuantity(item.id))} className="px-2 bg-gray-300">-</button>
        <span>{item.quantity}</span>
        <button onClick={() => dispatch(increaseQuantity(item.id))} className="px-2 bg-gray-300">+</button>
        <button onClick={() => dispatch(removeFromCart(item.id))} className="ml-2 text-red-500">🗑</button>
      </div>
    </div>
  );
};

export default cartItem;