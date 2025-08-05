import React from 'react';

export default function Table({ submissions }) {
  if (submissions.length === 0) {
    return <p>No submissions yet.</p>;
  }

  return (
    <table border="1" cellPadding="8" cellSpacing="0" style={{ marginTop: '20px', width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th>Pet Name</th>
          <th>Pet Type</th>
          <th>Breed</th>
          <th>Your Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {submissions.map((entry, index) => (
          <tr key={index}>
            <td>{entry.petName}</td>
            <td>{entry.petType}</td>
            <td>{entry.breed}</td>
            <td>{entry.yourName}</td>
            <td>{entry.email}</td>
            <td>{entry.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
