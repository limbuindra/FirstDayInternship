import axios from "axios";

const API_URL = "http://localhost:3000/users";

// export const fetchUsers = async ({ pageParam = 1 }) => {
//     const response = await axios.get(`http://localhost:3000/users?_page=${pageParam}&_limit=5`);
//     return response.data;
//   };
  export const fetchUsers = async (page = 1, limit = 5) => {
    const response = await fetch(`http://localhost:3000/users?page=${page}&limit=${limit}`);
    const data = await response.json();
    return data; // Ensure this returns an array
  };
  
  

export const addUser = async (name: string) => {
  const response = await axios.post(API_URL, { name });
  return response.data;
};

export const updateUser = async (id: number, name: string) => {
  const response = await axios.put(`${API_URL}/${id}`, { name });
  return response.data;
};

export const deleteUser = async (id: number) => {
  await axios.delete(`${API_URL}/${id}`);
};
