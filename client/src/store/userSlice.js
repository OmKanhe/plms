import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
    "user/loginUser",
    async (loginCredentials) => {
        try {
            
        } catch (error) {
            console.log("Error : ", error);
        }
    }
)

const userSlice = createSlice({
    name : "user",
    initialState : {
        user : null,
        loading : false,
        error : null,
    }, extraReducers : (builder) => {
        builder
        .addCase(loginUser.pending, (state) => {
            state.error = null,
            state.user = null,
            state.loading = true
        })
        .addCase(loginUser.fulfilled,(state, action) =>{
            state.user = action.payload,
            state.error = null,
            state.loading = false
        })
        .addCase(loginUser.rejected,(state,action) => {
            state.user = null,
            state.loading = false,
            console.log(action.error.message);
            if(action.error.message === 'Request failed with status code 401'){
                state.error = "Invalid Credentials!"
               }
               else{
                state.error = action.error.message
               }
        })
    }
})

export default userSlice.reducer;