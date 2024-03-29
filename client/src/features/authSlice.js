import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  IsError: false,
  IsLoading: false,
  IsSuccess: false,
  message: "",
};

export const loginUser = createAsyncThunk("auth/loginUser", async (data, { rejectWithValue }) => {
  try {
    const response = await axios.post("http://localhost:5000/login", {
      email: data.email,
      password: data.password,
    });
    return response.data;
  } catch (err) {
    if (err.response) {
      return rejectWithValue(err.response.data);
    }
  }
});

export const whoAmI = createAsyncThunk("auth/whoami", async (_data, { rejectWithValue }) => {
  try {
    const response = await axios.get("http://localhost:5000/whoami");
    return response.data;
  } catch (error) {
    if (error.response) {
      const message = error.response.data.message;
      return rejectWithValue(message);
    }
  }
});

// export const whoAmI = createAsyncThunk("auth/whoami", async (_data, { rejectWithValue }) => {
//   try {
//     const response = await axios.get("http://localhost:5000/whoami");
//     return response.data;
//   } catch (error) {
//     if (error.response) {
//       const message = error.response.data.message;
//       return rejectWithValue(message);
//     }
//   }
// });


export const logOut = createAsyncThunk("auth/logout", async () => {
  await axios.delete("http://localhost:5000/logout");
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.IsLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.IsLoading = false;
      state.IsSuccess = true;
      state.user = action.payload;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.IsLoading = false;
      state.IsError = true;
      state.message = action.payload.message;
    });
    // get User Login

    builder.addCase(whoAmI.pending, (state) => {
      state.IsLoading = true;
    });
    builder.addCase(whoAmI.fulfilled, (state, action) => {
      state.IsLoading = false;
      state.IsSuccess = true;
      state.user = action.payload;
    });
    builder.addCase(whoAmI.rejected, (state, action) => {
      state.IsLoading = false;
      state.IsError = true;
      state.message = action.payload;
    });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
