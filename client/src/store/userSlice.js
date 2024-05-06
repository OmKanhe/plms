import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";

export const loginUser = createAsyncThunk(
  "user/loginUser",
//   async (loginCredentials) => {
    // try {
    //     console.log("reahed thunk");
    //     const {data : loginData} = axios.post("/login", loginCredentials);
    //     if(loginData){
    //         toast.success("Logged in")
    //     }
    //     else{
    //         toast.error(loginData.error)
    //     }
    //     console.log(loginData);
    //     localStorage.setItem("user", JSON.stringify(loginData));
    //     return loginData;
    // } catch (error) {
    //     console.log("Error while logging : ", error);
    // }
    async (loginCredentials) => {
      try {
        console.log("reached thunk");
        const response = await axios.post("/login", loginCredentials);
        console.log("this is response",response);
        const loginData = response.data;

        if (loginData.error) {
          toast.error(loginData.error);
        } else {
          toast.success("Logged in");
          localStorage.setItem("user", JSON.stringify(loginData));
        }
        return loginData;
      } catch (error) {
        console.log("Error while logging: ", error);
        toast.error("An error occurred while logging in.");
      }
    }
)

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        (state.error = null), (state.user = null), (state.loading = true);
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        (state.user = action.payload),
          (state.error = null),
          (state.loading = false);
      })
      .addCase(loginUser.rejected, (state, action) => {
        (state.user = null),
          (state.loading = false),
          console.log(action.error.message);
        if (action.error.message === "Request failed with status code 401") {
          state.error = "Invalid Credentials!";
        } else {
          state.error = action.error.message;
        }
      });
  },
});

export default userSlice.reducer;
