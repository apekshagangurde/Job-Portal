// src/api.js
const API_BASE_URL = "http://localhost:5000/api"; // Change to deployed backend URL if hosted

export const fetchJobs = async (filters) => {
  const query = new URLSearchParams(filters).toString();
  const response = await fetch(`${API_BASE_URL}/jobs?${query}`);
  if (!response.ok) throw new Error("Failed to fetch jobs");
  return response.json();
};
