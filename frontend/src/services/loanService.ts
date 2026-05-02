import axios from "axios";

const API_BASE = "http://localhost:3000"; // backend URL

export const submitLoan = async (data: any) => {
  const res = await axios.post(`${API_BASE}/loans`, data);
  return res.data;
};