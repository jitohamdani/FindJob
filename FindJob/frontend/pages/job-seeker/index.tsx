import axios from 'axios';
import { useState, useEffect } from 'react';

export default function JobSeeker() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/jobs').then((res) => setJobs(res.data));
  }, []);

  return (
    <div>
      <h1>Available Jobs</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <h2>{job.title}</h2>
            <p>{job.company} - {job.location}</p>
            <p>{job.description}</p>
            <button disabled={!job.isOpen}>
              {job.isOpen ? 'Apply' : 'Closed'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
