import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function FeedbackDashboard() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/feedback')
      .then(res => setFeedbacks(res.data));
  }, []);

  const styles = {
    container: {
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
    },
    title: {
      textAlign: 'center',
      marginBottom: '1rem',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    th: {
      backgroundColor: '#4CAF50',
      color: 'white',
      padding: '12px',
    },
    td: {
      border: '1px solid #ddd',
      padding: '10px',
      textAlign: 'center',
    },
    trHover: {
      backgroundColor: '#f2f2f2',
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Feedback Dashboard</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>User</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Feedback</th>
            <th style={styles.th}>Category</th>
            <th style={styles.th}>Date</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.map((f, i) => (
            <tr key={i} style={i % 2 === 0 ? styles.trHover : null}>
              <td style={styles.td}>{f.userName}</td>
              <td style={styles.td}>{f.email}</td>
              <td style={styles.td}>{f.feedbackText}</td>
              <td style={styles.td}>{f.category}</td>
              <td style={styles.td}>{new Date(f.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
