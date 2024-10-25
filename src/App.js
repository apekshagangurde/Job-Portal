// src/App.js
import React, { useEffect, useState } from "react";
import JobList from "./components/JobList";
import Filter from "./components/Filter";
import { fetchJobs } from "./api";
import "./App.css";

function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({ jobType: "", location: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadJobs = async () => {
    setLoading(true);
    setError(""); // Reset error state
    try {
      const jobData = await fetchJobs(filters);
      setJobs(jobData);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      setError("Failed to load jobs. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadJobs();
  }, [filters]);

  const handleFilterChange = (newFilters) => setFilters(newFilters);

  return (
    <div className="App">
      <h1>Job Listings</h1>
      <Filter onFilterChange={handleFilterChange} />
      {loading && <p>Loading jobs...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && <JobList jobs={jobs} />}
    </div>
  );
}

export default App;
