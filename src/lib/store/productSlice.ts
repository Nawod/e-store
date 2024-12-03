/**
 * @class productSlice
 * @description purpose of this slice is to manage product states
 * @author Nawod Madhuwantha
*/

import { createSlice } from "@reduxjs/toolkit";
import { ProductList } from "../constants/products";

const initialState: Product[] = ProductList;

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productSlice;
