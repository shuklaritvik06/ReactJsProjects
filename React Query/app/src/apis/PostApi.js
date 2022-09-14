import axios from "axios";

const endPoint = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
  },
});

export const fetchPosts = async (id) => {
  try {
    const { data } = await endPoint.get(
      `/posts?page=${id}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
      }
    );
    return data;
  } catch (e) {
    throw Error("Error fetching posts");
  }
};

export const addNewPost = async ({ title, body }) => {
  try {
    const { data } = await endPoint.post(
      `/posts`,
      {
        title,
        body,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
      }
    );
    return data;
  } catch (error) {
    throw Error(error.response.statusText);
  }
};

export const updatePost = async ({ title, body,id }) => {
  try {
    const { data } = await endPoint.patch(
      `/posts/${id}`,
      {
        title,
        body,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
      }
    );
    return data;
  } catch (error) {
    throw Error(error.response.statusText);
  }
};
