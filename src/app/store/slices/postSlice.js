import { createSlice } from '@reduxjs/toolkit'
import { END_POINT } from '@/config/end-point'
import axios from 'axios'

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    posts: [],
  },

  reducers: {
    setMyPosts: (state, actions) => {
        state.posts = actions.payload.posts
    },
    uppendPost: (state, actions) => {
      state.posts = [...state.posts, actions.payload.newPosts]
    },
    hendelDeletePost: (state, action) => {
      let posts = [...state.posts]
      posts = posts.filter(currentPost => currentPost.id !== action.payload)
      state.posts = posts
    },
    
  },
})

    // Action creators are generated for each case reducer function
export const {setMyPosts, uppendPost, hendelDeletePost } = postSlice.actions

export const getMyPosts = () => async (dispatch) => {
    try{
        const res = await axios.get(`${END_POINT}/api/post/getAllUserPosts`)
        dispatch(setMyPosts({posts: res.data}))
    }catch(e){
        alert("Что то пошло не так сооющите о ошибке Тех. специалистам")
    }
}

export const createPost = (sendData) => async (dispatch) => {
  try{
      const res = await axios.post(`${END_POINT}/api/post/newPost`, sendData)
      dispatch(uppendPost({newPosts: res.data}))
  }catch(e){
      alert("Что то пошло не так сообщите о ошибке Тех. специалистам")
  }
}

export const editPost = (sendData, router) => async (dispatch) => {
  try{
      const res = await axios.put(`${END_POINT}/api/post/editPost`, sendData)
  }catch(e){
      alert("Что то прошло не так, сообщите о ошибке Тех. специалистам сайта!")
  }
}
export const deletePost = (id) => async (dispatch) => {
  try{
      const res = await axios.delete(`${END_POINT}/api/post/deletePostByID/${id}`)
      dispatch(hendelDeletePost(id))
  }catch(e){
      alert("Что то прошло не так, сообщите о ошибке Тех. специалистам сайта!")
  }
}

export default postSlice.reducer