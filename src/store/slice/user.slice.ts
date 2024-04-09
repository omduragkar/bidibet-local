import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
  name: "UserData",
  initialState: {
    initialUser: true,
    user: {
        mobileNumber: "",
        name: "",
        userId: "",
        token: ""
    }
  },
  reducers: {
    setUserData(state, action: PayloadAction<{
      mobileNumber: string,
      displayName: string,
      userId: string,
      token: string
    }>) {
      state.user = {
        ...state.user,
        mobileNumber: action.payload.mobileNumber,
        name: action.payload.displayName,
        userId: action.payload.userId,
        token: action.payload.token
      }
    },
    setIsInitialUser(state, action: PayloadAction<boolean>) {
      state.initialUser = action.payload
    }
  }
})
export const { setUserData, setIsInitialUser } = userSlice.actions
export default userSlice.reducer
