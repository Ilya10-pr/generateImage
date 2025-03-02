import axios from "axios";

const apiKey = 'justOurApp';

const instance = axios.create({
  headers: {
    "Content-Type": "application/json",
    'X-API-Key': apiKey,
  },
  baseURL: "http://localhost:3000/",
  withCredentials: true
});


export const createImage = async(payload) => {
  return await instance.post("/images", payload).then((res) => res.data).catch((error) => error.response.data);
}


export const updateImage = async(count, id) => {
  return await instance.put(`/images/${id}`, count).then((res) => res.data)
}


export const registerUser = async (data) => {
  return await instance.post("/user/register", data).then((res) => res.data)
}

export const loginUser = async (data) => {
  return await instance.post("/user/login", data).then((res) => res.data)
}


export const authUser = async (data) => {
  return await instance.get("/user/auth", data).then((res) => res.data).catch(() => false)

}


export const getAllImages = async() => {
  return await instance.get("/images").then((res) => res.data)
}
// export const deleteProductFromCart = (productId: string): Promise<IProduct[]> => {
//   return instance.delete(`cart/${productId}`).then((res) => res.data);
// }


// export const getProductFromCart = (): Promise<IProduct[]> => {
//   return instance.get("cart").then((res) => res.data)
// }


// instance.interceptors.request.use((config) => {
//   config.headers.Authorization = window.localStorage.getItem("token");
//   return config
// });