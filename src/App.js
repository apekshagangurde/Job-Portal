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

  const loadJobs = async () => {
    setLoading(true);
    try {
      const jobData = await fetchJobs(filters);
      setJobs(jobData);
    } catch (error) {
      console.error("Error fetching jobs:", error);
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
      {loading ? <p>Loading jobs...</p> : <JobList jobs={jobs} />}
    </div>
  );
}

export default App;
