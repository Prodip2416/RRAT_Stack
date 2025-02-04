import { API_ENDPOINT } from "../../apiEndPoints";
import apiClient from "../../lib/apiClient";

export const fetchUsersAPI = async () => apiClient.get(API_ENDPOINT.GET_USERS);
export const createUserAPI = async (user) => apiClient.post(API_ENDPOINT.POST_USERS, user);
export const updateUserAPI = async (id, user) =>
  apiClient.put(`/users/${id}`, user);
export const deleteUserAPI = async (id) => apiClient.delete(`/users/${id}`);
