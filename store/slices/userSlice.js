import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCurrentUser, loginServices } from "../../services/loginServices";
import { signupServices } from "../../services/signupService";
import { editProfileService } from "../../services/userService";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const userSlice = createSlice({
  name: "user",
  initialState: {
    status: "idle",
    message: "logout",
    token: {},
    currentUser: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userLoginApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(userLoginApi.fulfilled, (state, action) => {
        state.status = "idle";
        state.message = "loginSucess"
        state.token = action.payload.accessToken;
        state.currentUser = action.payload.currentUser;
      }).addCase(userLoginApi.rejected, (state) => {
        state.message = "loginFail";
      })
      // .addCase(userSignupApi.pending, (state) => {
      //   state.status = "loading";
      // });
  },
});

export const userLoginApi = createAsyncThunk(
  "user/userLogin",
  async (dataLogin) => {
    const responeToken = await loginServices(dataLogin);
    const accessToken = responeToken.data.accessToken;
    const responeCurrenUser = await getCurrentUser(accessToken);
    const respone = {
      accessToken,
      currentUser: responeCurrenUser.data,
    };
    console.log(respone);
    if (accessToken === undefined) {
      await AsyncStorage.setItem('message', "loginFail");
      return Promise.reject();
    }
    await AsyncStorage.setItem('token', JSON.stringify(accessToken));
    await AsyncStorage.setItem('currentUser', JSON.stringify(responeCurrenUser.data));
    await AsyncStorage.setItem('message', "loginSuccess");
    return respone;
  }
);

export const userSignupApi = createAsyncThunk(
  "user/userSignup",
  async (dataSignup) => {
    await signupServices(dataSignup);
  }
);
export const editProfileApi = (userId,userEdit,token) => {
  // console.log(userId,userEdit);
  return async (dispatch) => {
    const { data } = await editProfileService(userId,userEdit,token);
    // console.log(data);

    localStorage.setItem("currentUser", JSON.stringify(data));

  };
};
