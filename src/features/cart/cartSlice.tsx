import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
// A "slice" is a collection of Redux reducer logic and actions 
// for a single feature in your app, in this case, the shopping cart

export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};
export type cartItem = Product & { quantity: number };

interface CartState {
  items: cartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState, //initial state for this slice of reducer e.g.items[]
  reducers: {

    addToCart:(state, action: PayloadAction<Product>) => {
      // reducers are An object where keys are action names and values are reducer functions
      // addToCart is the key. Its value is the reducer function
      // Redux Toolkit internally maps this to action "cart/addToCart"
      // RTK creates a same action internally too 
      // {"cart/addToCart": (state, action) => { /* ... */ }}
      // so with useDispatch(addToCart(product)) we are actually calling the action when then calls the related reducer function to perform the state change                                                                                      
      const existing = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existing) { 
        // RTK uses Immer internally. 
        // This allows us to write "mutating" logic (like state.items.push(...) or existing.quantity++) directly, and Immer will handle the immutable updates under the hood. This makes reducer logic much cleaner and easier to read
        existing.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart:(state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    increaseQuantity:(state, action: PayloadAction<number>) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) item.quantity++;
    },
    decreaseQuantity:(state, action: PayloadAction<number>) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) item.quantity--;
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity,decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;
