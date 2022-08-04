import jsonServer from "../api/jsonServer";
import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "getBlogPosts":
      return action.payload;
    case "deleteBlogPost":
      return state.filter((blogPost) => blogPost.id !== action.payload);
    case "editBlogPost":
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    default:
      return state;
  }
};

const getBlogPosts = (dispatch) => {
  return async () => {
    try {
      const response = await jsonServer.get("/blogposts");
      const data = response.data;

      dispatch({ type: "getBlogPosts", payload: data });
    } catch (err) {
      console.error(err);
    }
  };
};

const addBlogPost = () => {
  return async (title, content, callback) => {
    try {
      await jsonServer.post("/blogposts", { title, content });

      if (callback) {
        callback();
      }
    } catch (err) {
      console.error(err);
    }
  };
};

const deleteBlogPost = (dispatch) => {
  try {
    return async (id) => {
      await jsonServer.delete(`/blogposts/${id}`);

      dispatch({ type: "deleteBlogPost", payload: id });
    };
  } catch (err) {
    console.error(err);
  }
};

const editBlogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    try {
      await jsonServer.put(`/blogposts/${id}`, { title, content });

      dispatch({ type: "editBlogPost", payload: { id, title, content } });

      if (callback) {
        callback();
      }
    } catch (err) {
      console.error(err);
    }
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
);
