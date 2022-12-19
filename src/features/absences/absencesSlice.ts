import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import absencesService from "../../services/absencesService";
import { filData } from "../../utils/models";
 
  
const initialState = {
  absences: [],
  absencesContainer: [],
  loading: false,
  error: false,
};
 
/**
 * Thunk to get absences list in rudux
 * @param _filData - object of filter data : {stardate, enddate, type}
 * @returns list of absences 
 */
export const getAbsencesList = createAsyncThunk("getAbsences", async (_filData: filData = new filData) => {
  try {  
    const res = await absencesService.getAbsences(_filData);
    return res;
  } catch (error) {
    // console.error(error);
  }
});

/**
 * Redux Slice using Redux Toolkit - Toolkit make it easy :) 
 * @returns member 
 */
const absencesSlice = createSlice({
  name: "absencesList",
  initialState,
  reducers: {}, 
  extraReducers: (builder) => {
    builder.addCase(getAbsencesList.pending, (state, action) => { 
      state.loading = true;
    });
    builder.addCase(getAbsencesList.fulfilled, (state, action) => { 
      state.loading = false;
      state.absencesContainer = action.payload;
      state.absences = action.payload;
    });
    builder.addCase(getAbsencesList.rejected, (state, action) => { 
      state.error = true;
    });
  },
});

export const { } =
  absencesSlice.actions;

export default absencesSlice.reducer;
