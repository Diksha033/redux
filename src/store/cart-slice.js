import { createSlice } from "@reduxjs/toolkit";

const cartstate = {
  items: [],
  totalquantity: 0,
  changed:false
};
const cartslice = createSlice({
  name: "cart",
  initialState: cartstate,
  reducers: {
    replacecart(state,action){
      state.totalquantity=action.payload.totalquantity
      state.items=action.payload.items
    },
    additem(state, action) {
      const newitem = action.payload;
      const existingitem = state.items.find((item) => item.id === newitem.id);
      state.totalquantity++;
      state.changed=true;
      if (!existingitem) {
        state.items.push({
          id: newitem.id,
          price: newitem.price,
          quantity: 1,
          totalprice: newitem.price,
          name: newitem.title,
        });
      } else {
        existingitem.quantity++;
        existingitem.totalprice = existingitem.totalprice + newitem.price;
      }
    },
    removeitem(state, action) {
      const id = action.payload;
      const existingitem = state.items.find((item) => item.id === id);
      state.totalquantity--;
      state.changed=true;
      if (existingitem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== existingitem.id);
      } else {
        existingitem.quantity--;
        existingitem.totalprice = existingitem.totalprice - existingitem.price;
      }
    },
  },
});
export default cartslice.reducer;
export const cartactions = cartslice.actions;
