import { AnyAction, createSlice, ThunkAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

interface UsersInterface {
  isLoading: boolean;
  data: Array<UsersDataInterface>;
  isError: boolean;
}

interface UsersDataInterface {
  name: string;
  phone: string;
  birth: string;
  address1: string;
  address2: string;
}

const API_URL = "http://localhost:8080/user";

let initialState: UsersInterface = {
  isLoading: false,
  data: [],
  isError: false,
};

const slice = createSlice({
  name: "users",
  initialState,
  reducers: {
    callApiStart: (state) => {
      state.isLoading = true;
    },
    fetchData: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.data = [...action.payload];
    },
    callError: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const fetchUsers =
  (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) => {
    dispatch(callApiStart());
    try {
      const response = await axios.get(`${API_URL}/all`);
      dispatch(fetchData(response.data));
    } catch (err) {
      console.log(err);
      dispatch(callError());
    }
  };

export const { callApiStart, fetchData, callError } = slice.actions;
export default slice.reducer;
