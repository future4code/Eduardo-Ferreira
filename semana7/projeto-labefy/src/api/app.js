import axios from "axios";

const base =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
const axiosConfig = {
  headers: {
    Authorization: "eduardo-ferreira-cruz"
  }
};

export const createUser = async (body) => {
  try {
    await axios.post(base, body, axiosConfig);
    return getUsers().then((res) => {
      return res.data;
    });
  } catch (err) {
    console.log(err.response);
  }
};

export const getUsers = async () => {
  try {
    return await axios.get(base, axiosConfig);
  } catch (err) {
    console.log(err.response);
  }
};

export const deletUser = async (id) => {
  try {
    await axios.delete(base + `/${id}`, axiosConfig);
    return getUsers().then((res) => {
      return res.data;
    });
  } catch (err) {
    console.log(err.response);
  }
};

export const editUser = async (id, body) => {
  try {
    await axios.put(base + `/${id}`, body, axiosConfig);
    return getUsers().then((res) => {
      return res.data;
    });
  } catch (err) {
    console.log(err.response);
  }
};

export const getUserByiD = async (id) => {
  try {
    return await axios.get(base + `/${id}`, axiosConfig);
  } catch (err) {
    console.log(err.response);
  }
};
