import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IResponse, RootState } from "types";
import { ICatalog, ICourse, IResponseCatalog } from "types/models/Course";


const initialState: IResponseCatalog = {
  isFetching: false,
  data: []
}

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    getCatalog(state, action: PayloadAction<string>) {
      // state.isFetching = action.payload;
      state.data = []
    },
    catalogList(state, action: PayloadAction<ICatalog[]>) {
      state.isFetching = false;
      state.data = action.payload;
    },
    // addCourse(state, action: PayloadAction<ICourse>) {
    //   state.isFetching = false;
    // }

  }
})


export const catalog = catalogSlice.actions.getCatalog;
export const catalogData = catalogSlice.actions.catalogList;
console.log("catalog", catalogData)
// export const addCourse = courseSlice.actions.addCourse;

export const catalogList = (state: RootState) => state.catalog.data;


const CatalogReducer = catalogSlice.reducer;
export default CatalogReducer;


