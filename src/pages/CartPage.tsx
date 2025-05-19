import React from "react";
import { useAppSelector } from "../Hooks";
import CartItem from "../components/CartItem";

const CartPage: React.FC = () => {
  const items = useAppSelector(state => state.cart.items);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {items.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className="mt-4 text-right text-xl font-semibold">
            Subtotal: ${subtotal.toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
