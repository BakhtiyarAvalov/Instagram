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
        user_name: decoded.user_name,
        phone: decoded.phone,
        role: decoded.role,

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


export const signUp = (email, full_name, username, password) => (dispatch) => {
  axios.post(`${END_POINT}/api/auth/signup`,{
    email, 
    full_name,
    username,
    password,
  } ).then(res => {
    dispatch(authorize(res.data)) 
  })

}

export default authSlice.reducer