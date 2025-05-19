import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import { Routes, Route, Link } from "react-router-dom";
import { useAppSelector } from "./Hooks"

const App: React.FC = () => {
    const itemCount = useAppSelector(state => state.cart.items.length);
    //Here, state is your "RootState". "state.cart" accesses the cart slice of your state (as defined in store.tsx), 
    // and state.cart.items.length gets the length of the items array within that slice.
    //Whenever an action is dispatched that changes state.cart.items, 
    // useAppSelector will detect this change, and if the itemCount value has changed, the App component will re-render to display the updated count.
  return (
    <div>
      <header className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/">Simple Shopping Cart</Link>
        </h1>
        <nav className="flex items-center">
          <Link to="/" className="mr-4 hover:underline">
            Products
          </Link>
          <Link to="/cart" className="flex items-center hover:underline">
            Cart
            {itemCount > 0 && (
              <span className="ml-1 bg-red-500 text-white text-xs font-bold flex items-center justify-center w-5 h-5 rounded-full">
                {itemCount}
              </span>
            )}
          </Link>
        </nav>
      </header>

      <main className="p-6">
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
