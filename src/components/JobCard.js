// src/components/JobCard.js
import React from "react";
import "./JobCard.css";

function JobCard({ job }) {
  return (
    <div className="job-card">
      <h2>{job.title}</h2>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p>{job.description}</p>
    </div>
  );
}

export default JobCard;
