import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminPanel.css';

const STORAGE_KEY = 'drugdroprx_contacts';

const AdminPanel = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Check if user is logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('admin_logged_in') === 'true';
    if (!isLoggedIn) {
      navigate('/admin/login');
    }
  }, [navigate]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = () => {
    try {
      setLoading(true);
      const storedContacts = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      // Sort by date (newest first)
      const sortedContacts = storedContacts.sort((a, b) => 
        new Date(b.createdAt) - new Date(a.createdAt)
      );
      setContacts(sortedContacts);
      setError(null);
    } catch (err) {
      setError('Failed to load contacts from localStorage.');
      console.error('Error fetching contacts:', err);
    } finally {
      setLoading(false);
    }
  };

  const clearAllContacts = () => {
    if (window.confirm('Are you sure you want to delete all contacts? This action cannot be undone.')) {
      localStorage.removeItem(STORAGE_KEY);
      setContacts([]);
    }
  };

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      localStorage.removeItem('admin_logged_in');
      localStorage.removeItem('admin_login_time');
      navigate('/admin/login');
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  return (
    <div className="admin-panel">
      <div className="admin-header">
        <div>
          <h2>Contact Form Submissions</h2>
          <p className="admin-subtitle">Admin Dashboard</p>
        </div>
        <div className="admin-actions">
          <button onClick={fetchContacts} className="refresh-btn">
            🔄 Refresh
          </button>
          {contacts.length > 0 && (
            <button onClick={clearAllContacts} className="clear-btn">
              🗑️ Clear All
            </button>
          )}
          <button onClick={handleLogout} className="logout-btn">
            🚪 Logout
          </button>
        </div>
      </div>

      {loading && <div className="loading">Loading contacts...</div>}

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      {!loading && !error && (
        <>
          <div className="stats">
            <span>Total Submissions: <strong>{contacts.length}</strong></span>
          </div>

          {contacts.length === 0 ? (
            <div className="no-contacts">
              <p>No contact submissions yet.</p>
              <p>Submit a form to see data here.</p>
            </div>
          ) : (
            <div className="contacts-table-container">
              <table className="contacts-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Description</th>
                    <th>Submitted At</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((contact) => (
                    <tr key={contact.id}>
                      <td>{contact.id ? contact.id.substring(0, 12) + '...' : 'N/A'}</td>
                      <td>{contact.name}</td>
                      <td>
                        <a href={`mailto:${contact.email}`}>{contact.email}</a>
                      </td>
                      <td>
                        <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                      </td>
                      <td className="description-cell">
                        {contact.description || <em>No description</em>}
                      </td>
                      <td>{formatDate(contact.createdAt)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AdminPanel;

