import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  valueItem: null,
}
export const productModalSlice = createSlice({
  name: 'modalView',
  initialState,
  reducers: {
      set: (state, action) => {
          state.valueItem = action.payload
      },
      remove: (state) => {
          state.valueItem = null
      },
  },
})

export const { set, remove } = productModalSlice.actions

export default productModalSlice.reducer