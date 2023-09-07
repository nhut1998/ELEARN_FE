import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "types";
import { ISidebar } from "types/models/Sidebar";


const initialState:ISidebar = {
  sidebar: ""
}

const SidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setSidebar(state, action: PayloadAction<string>) {
      state.sidebar = action.payload
    }
  }
})

export const sidebar = SidebarSlice.actions.setSidebar;


export const getSidebar = (state:RootState) => state.sidebar.sidebar;


const SidebarReducer = SidebarSlice.reducer;
export default SidebarReducer