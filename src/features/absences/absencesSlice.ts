import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import absencesService from "../../services/absencesService";
import { Absence } from "../../utils/models";
 
  
const initialState = {
  absences: [],
  absencesContainer: [],
  loading: false,
  error: false,
};
export const getAbsencesList = createAsyncThunk("getAbsences", async () => {
  try { 
    const res = await absencesService.getAbsences();
    return res;
  } catch (error) {
    console.error(error);
  }
});

export const getMembersList = createAsyncThunk("getMembers", async () => {
  try { 
    const res = await absencesService.getAbsences();
    return res;
  } catch (error) {
    console.error(error);
  }
});

const absencesSlice = createSlice({
  name: "absencesList",
  initialState,
  reducers: {}, 
  extraReducers: (builder) => {
    builder.addCase(getAbsencesList.pending, (state, action) => { 
      state.loading = true;
    });
    builder.addCase(getAbsencesList.fulfilled, (state, action) => {
      debugger
      state.loading = false;
      state.absencesContainer = action.payload;
      state.absences = action.payload;
    });
    builder.addCase(getAbsencesList.rejected, (state, action) => {
      debugger 
      state.error = true;
    });
  },
});

export const { filteredAbsences, filteredAbsencesByDate } =
  absencesSlice.actions;

export default absencesSlice.reducer;
