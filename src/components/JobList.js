// src/components/JobList.js
import React from "react";
import "./JobList.css"; // Optional: Create a CSS file for styles

const JobList = ({ jobs }) => {
  return (
    <div className="job-list">
      {jobs.length > 0 ? (
        jobs.map((job) => (
          <div key={job.id} className="job-card">
            <h2>{job.title}</h2>
            <p>{job.company}</p>
            <p>{job.location}</p>
            <a href={job.applyLink} target="_blank" rel="noopener noreferrer">
              Apply Now
            </a>
          </div>
        ))
      ) : (
        <p>No jobs found</p>
      )}
    </div>
  );
};

export default JobList;
