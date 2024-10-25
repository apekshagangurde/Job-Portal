// src/components/JobList.js
import React from "react";
import JobCard from "./JobCard";

function JobList({ jobs }) {
  if (jobs.length === 0) return <p>No jobs found.</p>;

  return (
    <div className="job-list">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

export default JobList;
