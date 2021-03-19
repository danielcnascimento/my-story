import * as api from "../api";
import { FETCH_ALL, CREATE, UPDATE, DELETE } from "./constants/actionTypes";

/*Action creator:
 * 1.SHOW POSTS
 * 2.CREATE A NEW POST
 * 3.UPDATE A POST
 * 4.LIKE A POST
 * 5.DELETE A POST
 */

// SHOW POSTS
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log();
  }
};

//CREATE A NEW POST
export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

//UPDATE A POST
export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

//Delete a post
export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

//LIKE A POST
export const likePost = (id) => async (dispatch) => {
  try {
    console.log(id);
    const { data } = await api.updateLike(id);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
