// src/components/Filter.js
import React, { useState } from "react";

const Filter = ({ onFilterChange }) => {
  const [jobType, setJobType] = useState("");
  const [location, setLocation] = useState("");

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    onFilterChange({ jobType, location });
  };

  return (
    <form className="filter-form" onSubmit={handleFilterSubmit}>
      <select value={jobType} onChange={(e) => setJobType(e.target.value)}>
        <option value="">Select Job Type</option>
        <option value="full-time">Full-Time</option>
        <option value="part-time">Part-Time</option>
        <option value="internship">Internship</option>
      </select>
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button type="submit">Filter</button>
    </form>
  );
};

export default Filter;
