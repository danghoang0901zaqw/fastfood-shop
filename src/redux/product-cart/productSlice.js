import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartState: false,
  totalQuantity: 0,
  cartProducts: localStorage.getItem("cart-items")
    ? JSON.parse(localStorage.getItem("cart-items"))
    : [],
};
const productSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setOpenCart: (state, action) => {
      state.cartState = action.payload;
    },
    setCloseCart: (state, action) => {
      state.cartState = action.payload;
    },
    addItems: (state, action) => {
      const newItem = action.payload;
      const indexExist = state.cartProducts.findIndex((x) => {
        return (
          x.id === newItem.id &&
          x.color === newItem.color &&
          x.size === newItem.size
        );
      });
      if (indexExist >= 0) {
        state.cartProducts[indexExist] = {
          ...state.cartProducts[indexExist],
          quantity: (state.cartProducts[indexExist].quantity += 1),
        };
      } else {
        state.cartProducts = [...state.cartProducts, newItem];
      }
      localStorage.setItem("cart-items", JSON.stringify(state.cartProducts));
    },
    removeItems: (state, action) => {
      const deleteItem = action.payload;
      console.log(deleteItem);
      state.cartProducts = state.cartProducts.filter((x) => {
        return (
          x.id !== deleteItem.id ||
          x.color !== deleteItem.color ||
          x.size !== deleteItem.size
        );
      });
      localStorage.setItem("cart-items", JSON.stringify(state.cartProducts));
    },
    increaseItem: (state, action) => {
      const increaseItem = action.payload;
      const indexItem = state.cartProducts.findIndex((x) => {
        return (
          x.id === increaseItem.id &&
          x.color === increaseItem.color &&
          x.size === increaseItem.size
        );
      });
      state.cartProducts[indexItem].quantity += 1;
      localStorage.setItem("cart-items", JSON.stringify(state.cartProducts));
    },
    decreaseItem: (state, action) => {
      const decreaseItem = action.payload;
      console.log(decreaseItem);
      const indexItem = state.cartProducts.findIndex((x) => {
        return (
          x.id === decreaseItem.id &&
          x.color === decreaseItem.color &&
          x.size === decreaseItem.size
        );
      });
      state.cartProducts[indexItem].quantity === 1
        ? (state.cartProducts[indexItem].quantity = 1)
        : (state.cartProducts[indexItem].quantity -= 1);
      localStorage.setItem("cart-items", JSON.stringify(state.cartProducts));
    },
    deleteCart: (state, action) => {
      state.cartProducts = [];
      localStorage.setItem("cart-items", JSON.stringify(state.cartProducts));
    },
    totalProduct: (state, action) => {
      const total = state.cartProducts.reduce(
        (total, item) => (total += item.quantity),
        0
      );
      state.totalQuantity = total;
    },
  },
});
export const {
  setOpenCart,
  setCloseCart,
  addItems,
  removeItems,
  increaseItem,
  decreaseItem,
  deleteCart,
  totalProduct,
} = productSlice.actions;
export default productSlice.reducer;
