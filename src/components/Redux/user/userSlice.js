import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "./UserService";


export const userRegister = createAsyncThunk('user/register', async(data) =>{
    try {
        const response = await userService.register(data);
        return response;
    } catch (error) {
        throw error
    }
})

export const userLogin = createAsyncThunk('user/login', async(data)=>{
    try {
        const response = await userService.login(data);
        return response;
    } catch (error) {
        throw error;
    }
})
const userSlice = createSlice({
    name: 'user',
    initialState: {
      userToken: "",
      isAuthenticated: false,
      isLoading: false,
      userData: {}
    },
    reducers: {
      getUserData: (state, action) => {
        state.userData = action.payload;
      },
      userLogout: (state, action) => {
        state.userToken = "";
        state.isAuthenticated = false;
        state.isLoading = false;
        state.userData = {};
      },
    },
    extraReducers: (builder) =>{
        builder
        .addCase(userRegister.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(userRegister.fulfilled, (state, action)=>{
            state.isLoading = false;
        })
        .addCase(userRegister.rejected, (state, action)=>{
            state.isLoading = false;
        })

        builder
        .addCase(userLogin.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(userLogin.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.userToken = action.payload.token;
            state.isAuthenticated = true
            localStorage.setItem("token",action.payload.token)
        })
    }
});
  

export const { getUserData, userLogout} = userSlice.actions;

export default userSlice.reducer;