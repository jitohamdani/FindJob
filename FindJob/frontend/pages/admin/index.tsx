import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Admin() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/jobs').then((res) => setJobs(res.data));
  }, []);

  const toggleJobStatus = (id, isOpen) => {
    axios.put(`http://localhost:3000/jobs/${id}`, { isOpen }).then(() => {
      setJobs((prev) =>
        prev.map((job) => (job.id === id ? { ...job, isOpen } : job)),
      );
    });
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <h2>{job.title}</h2>
            <button onClick={() => toggleJobStatus(job.id, !job.isOpen)}>
              {job.isOpen ? 'Close Job' : 'Reopen Job'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

