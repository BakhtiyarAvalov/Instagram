import { createSlice, current } from '@reduxjs/toolkit'
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
    setAllPosts: (state, actions) => {
      state.posts = actions.payload.posts
    },
    handleEditPost: (state, action) => {
      // console.log("action", action.payload);
      // const { editedPost } = action.payload;
      // const editedPostId = editedPost.id;
      // const postIndexToEdit = state.posts.findIndex((post) => post.id === editedPostId);
      // if (postIndexToEdit !== -1) {
      //   const newState = { ...state };
      //   posts[postIndexToEdit] = editedPost;
      //   return newState;
      // }
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
export const {setMyPosts, uppendPost, hendelDeletePost, setAllPosts, handleEditPost } = postSlice.actions

export const getMyPosts = () => async (dispatch) => {
    try{
        const res = await axios.get(`${END_POINT}/api/post/getAllUserPosts`)
        dispatch(setMyPosts({posts: res.data}))
    }catch(e){
        alert("Что то пошло не так сооющите о ошибке Тех. специалистам")
    }
}

export const getAllPosts = () => async (dispatch) => {
  try{
      const res = await axios.get(`${END_POINT}/api/post/getAllUsersPosts`)
      dispatch(setAllPosts({posts: res.data}))
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

export const editPost = (sendData) => async (dispatch) => {
  try{
      const res = await axios.put(`${END_POINT}/api/post/editPost`, sendData)
      dispatch(handleEditPost({editedPost: res.data}))
      console.log("editedPost3", res.data);
  }catch(e){
      alert("Что то прошло не так, сообщите о ошибке Тех. специалистам сайта!")
      console.log("err", e);
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