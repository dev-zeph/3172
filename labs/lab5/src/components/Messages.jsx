import React, { useState, useEffect } from 'react';
import './Messages.css';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  // Fetch messages from backend
  const fetchMessages = async (isRefresh = false) => {
    try {
      if (isRefresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }
      
      const response = await fetch('http://localhost:5001/api/messages');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      
      if (result.success) {
        setMessages(result.data);
        setError(null);
      } else {
        throw new Error(result.error || 'Failed to fetch messages');
      }
    } catch (err) {
      console.error('Error fetching messages:', err);
      setError(err.message);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  // Load messages when component mounts
  useEffect(() => {
    fetchMessages();
  }, []);

  const handleRefresh = () => {
    fetchMessages(true);
  };

  if (loading) {
    return (
      <div className="messages-container">
        <div className="container">
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-2">Loading messages...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="messages-container">
        <div className="container">
          <div className="alert alert-danger" role="alert">
            <h4 className="alert-heading">Error Loading Messages</h4>
            <p>{error}</p>
            <hr />
            <button className="btn btn-outline-danger" onClick={() => fetchMessages()}>
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="messages-container">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h1 className="messages-title">Messages</h1>
              <button
                className="btn btn-outline-primary"
                onClick={handleRefresh}
                disabled={refreshing}
              >
                {refreshing ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Refreshing...
                  </>
                ) : (
                  <>
                    <i className="bi bi-arrow-clockwise me-2"></i>
                    Refresh
                  </>
                )}
              </button>
            </div>

            {messages.length === 0 ? (
              <div className="text-center py-5">
                <div className="empty-state">
                  <i className="bi bi-envelope display-1 text-muted mb-3"></i>
                  <h3 className="text-muted">No messages yet</h3>
                  <p className="text-muted">Messages sent through the contact form will appear here.</p>
                </div>
              </div>
            ) : (
              <>
                <div className="messages-count mb-3">
                  <span className="badge bg-primary">
                    {messages.length} {messages.length === 1 ? 'message' : 'messages'}
                  </span>
                </div>

                <div className="messages-grid">
                  {messages.map((message) => (
                    <div key={message.id} className="col-12 mb-4">
                      <div className="card message-card h-100">
                        <div className="card-header d-flex justify-content-between align-items-center">
                          <h5 className="card-title mb-0">{message.subject}</h5>
                          <small className="text-muted">{message.dateReceived}</small>
                        </div>
                        <div className="card-body">
                          <div className="message-sender mb-3">
                            <strong className="text-primary">From: {message.name}</strong>
                          </div>
                          <div className="message-content">
                            <p className="card-text">{message.message}</p>
                          </div>
                        </div>
                        <div className="card-footer bg-transparent">
                          <small className="text-muted">
                            Message ID: {message.id}
                          </small>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;