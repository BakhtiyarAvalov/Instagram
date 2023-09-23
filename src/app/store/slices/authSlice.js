import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { END_POINT } from '@/config/end-point'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
    currentUser: null,
    tokenExt: 0
  },
  reducers: {
    authorize: (state, actions) => {
      const decoded = jwt_decode(actions.payload.token);
      state.currentUser = {
        id: decoded.id,
        email: decoded.email,
        full_name: decoded.full_name,
        username: decoded.username,
      }
      state.isAuth = true
      state.tokenExt = decoded.exp
    },
    logOut: (state) => {
      state.isAuth = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { authorize, logOut} = authSlice.actions

export const signIn = (email,  password) => (dispatch) => {
  axios.post(`${END_POINT}/api/auth/signin`,{
    email, 
    password,
  } ).then(res => {
    // console.log(res.data);
    dispatch(authorize(res.data)) 
  })
}

export const signUp = (email, full_name, username, password, router) => (dispatch) => {
  axios.post(`${END_POINT}/api/auth/signup`,{
    email, 
    full_name,
    username,
    password,
  })
  router.push("/register")
}

export default authSlice.reducer