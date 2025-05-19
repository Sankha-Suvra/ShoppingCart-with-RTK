import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './store'; // Import your types from store.tsx

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
// gives access to dispatch function of store
// which will be used to send (or "dispatch") actions to the store. 
// It's typed with AppDispatch for better type safety
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// This hook allows your components to extract data from the Redux store state. 
// It takes a selector function (e.g., state => state.cart.items.length) and returns the selected data. 
// It's typed with "RootState" so that state inside your selector function is correctly typed.