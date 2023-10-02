import { createSlice } from '@reduxjs/toolkit'
import { END_POINT } from '@/config/end-point'
import axios from 'axios'

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    posts: [],
    // post: {}
  },

  reducers: {
    setMyPosts: (state, actions) => {
        state.posts = actions.payload.posts
    },
    uppendPost: (state, actions) => {
      state.posts = [...state.posts, actions.payload.newPosts]
    },
    // setPost: (state, actions) => {
    // state.post = actions.payload.post
    // },
  },
})

    // Action creators are generated for each case reducer function
export const {setMyPosts, uppendPost, setPost } = postSlice.actions

export const getMyPosts = () => async (dispatch) => {
    try{
        const res = await axios.get(`${END_POINT}/api/post/getAllUserPosts`)
        dispatch(setMyPosts({posts: res.data}))
        // console.log("test", res.data);
    }catch(e){
        alert("Что то пошло не так сооющите о ошибке Тех. специалистам")
    }
}
  // export const getPostsById = (id) => async (dispatch) => {
  //   try{
  //       const res = await axios.get(`${END_POINT}/api/post/getAllUserPosts`)
  //       dispatch(setPost({post: res.data}))
  //       console.log("test", res.data);
  //   }catch(e){
  //       alert("Что то пошло не так сооющите о ошибке Тех. специалистам")
  //   }
  // }
export const createPost = (sendData) => async (dispatch) => {
  try{
      const res = await axios.post(`${END_POINT}/api/post/newPost`, sendData)
      dispatch(uppendPost({newPosts: res.data}))
  }catch(e){
      alert("Что то пошло не так сообщите о ошибке Тех. специалистам")
  }
}

export default postSlice.reducer