import { baseApi } from "./api/baseApi";
import cartReducer from "./featuresSlice/cartItemsSlice";

export const reducer = {
   [baseApi.reducerPath]: baseApi.reducer,
   cart: cartReducer,
};
