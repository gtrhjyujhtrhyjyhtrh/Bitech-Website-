import React, { useEffect, useState } from "react";
import axios from "axios";

const Contacts = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMessage, setSelectedMessage] = useState(null); // For detail preview modal
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get("http://localhost:5000/api/contacts");
      // Fallback in case response.data is wrapped in an object
      const data = Array.isArray(response.data)
        ? response.data
        : response.data?.contacts || [];
      setMessages(data);
    } catch (err) {
      console.error("Error fetching messages:", err);
      setError("Failed to load contact messages. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const deleteMessage = async (id) => {
    if (!window.confirm("Are you sure you want to delete this message?")) return;

    setDeletingId(id);
    try {
      await axios.delete(`http://localhost:5000/api/contacts/${id}`);
      // Optimistically update state without full refetch
      setMessages((prev) => prev.filter((msg) => (msg.id || msg._id) !== id));
      if (selectedMessage && (selectedMessage.id || selectedMessage._id) === id) {
        setSelectedMessage(null);
      }
    } catch (err) {
      console.error("Error deleting message:", err);
      alert("Failed to delete message.");
    } finally {
      setDeletingId(null);
    }
  };

  // Filter messages based on search input
  const filteredMessages = messages.filter((msg) => {
    const term = searchTerm.toLowerCase();
    return (
      msg.name?.toLowerCase().includes(term) ||
      msg.email?.toLowerCase().includes(term) ||
      msg.subject?.toLowerCase().includes(term) ||
      msg.phone?.toLowerCase().includes(term)
    );
  });

  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
        padding: "32px 16px",
      }}
    >
      <div className="container" style={{ maxWidth: "1100px" }}>
        {/* Header Section */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
          <div>
            <h2 className="fw-bold mb-1" style={{ color: "#1a202c" }}>
              Contact Messages
            </h2>
            <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>
              Manage and respond to incoming user inquiries ({messages.length} total)
            </p>
          </div>

          {/* Search Bar */}
          <div style={{ minWidth: "280px" }}>
            <input
              type="text"
              className="form-control"
              placeholder="🔍 Search by name, email, or subject..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                borderRadius: "8px",
                padding: "9px 14px",
                fontSize: "0.9rem",
                border: "1px solid #cbd5e1",
              }}
            />
          </div>
        </div>

        {/* Error State */}
        {error && (
          <div className="alert alert-danger d-flex align-items-center justify-content-between mb-4" role="alert">
            <span>{error}</span>
            <button className="btn btn-outline-danger btn-sm" onClick={fetchMessages}>
              Retry
            </button>
          </div>
        )}

        {/* Card Container */}
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
            border: "1px solid #e2e8f0",
            overflow: "hidden",
          }}
        >
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary mb-2" role="status"></div>
              <p className="text-muted mb-0">Loading messages...</p>
            </div>
          ) : filteredMessages.length === 0 ? (
            <div className="text-center py-5">
              <p className="text-muted mb-0 fs-5">
                {searchTerm ? "No messages match your search filter." : "No contact messages found."}
              </p>
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead style={{ backgroundColor: "#f8fafc", borderBottom: "2px solid #e2e8f0" }}>
                  <tr>
                    <th className="py-3 px-4" style={{ fontSize: "0.8rem", textTransform: "uppercase", color: "#64748b" }}>Sender</th>
                    <th className="py-3 px-4" style={{ fontSize: "0.8rem", textTransform: "uppercase", color: "#64748b" }}>Contact Info</th>
                    <th className="py-3 px-4" style={{ fontSize: "0.8rem", textTransform: "uppercase", color: "#64748b" }}>Subject</th>
                    <th className="py-3 px-4 text-end" style={{ fontSize: "0.8rem", textTransform: "uppercase", color: "#64748b" }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredMessages.map((msg) => {
                    const id = msg.id || msg._id;
                    return (
                      <tr key={id} style={{ transition: "background-color 0.15s" }}>
                        {/* Name Column */}
                        <td className="py-3 px-4">
                          <div className="fw-semibold" style={{ color: "#1e293b" }}>
                            {msg.name || "N/A"}
                          </div>
                        </td>

                        {/* Contact Info */}
                        <td className="py-3 px-4">
                          <div style={{ fontSize: "0.875rem", color: "#334155" }}>
                            <a href={`mailto:${msg.email}`} className="text-decoration-none" style={{ color: "#2563eb" }}>
                              {msg.email}
                            </a>
                          </div>
                          {msg.phone && (
                            <div style={{ fontSize: "0.8rem", color: "#64748b" }}>
                              📞 {msg.phone}
                            </div>
                          )}
                        </td>

                        {/* Subject Column */}
                        <td className="py-3 px-4">
                          <span
                            className="badge bg-light text-dark border px-2 py-1"
                            style={{ fontWeight: "500", fontSize: "0.825rem" }}
                          >
                            {msg.subject || "No Subject"}
                          </span>
                        </td>

                        {/* Action Buttons */}
                        <td className="py-3 px-4 text-end">
                          <div className="d-inline-flex gap-2">
                            {/* View Button */}
                            <button
                              className="btn btn-outline-primary btn-sm px-3"
                              onClick={() => setSelectedMessage(msg)}
                              style={{ borderRadius: "6px" }}
                            >
                              View
                            </button>

                            {/* Delete Button */}
                            <button
                              className="btn btn-outline-danger btn-sm px-3"
                              onClick={() => deleteMessage(id)}
                              disabled={deletingId === id}
                              style={{ borderRadius: "6px" }}
                            >
                              {deletingId === id ? "Deleting..." : "Delete"}
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Message Preview Modal */}
      {selectedMessage && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(15, 23, 42, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1050,
            padding: "20px",
          }}
          onClick={() => setSelectedMessage(null)}
        >
          <div
            style={{
              backgroundColor: "#ffffff",
              width: "100%",
              maxWidth: "550px",
              borderRadius: "12px",
              padding: "28px",
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
            }}
            onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
          >
            <div className="d-flex justify-content-between align-items-start mb-3">
              <h4 className="fw-bold m-0" style={{ color: "#0f172a" }}>
                {selectedMessage.subject || "Message Details"}
              </h4>
              <button
                className="btn-close"
                onClick={() => setSelectedMessage(null)}
              ></button>
            </div>

            <div className="mb-3 p-3 rounded" style={{ backgroundColor: "#f8fafc", border: "1px solid #f1f5f9" }}>
              <div className="mb-1">
                <strong>From:</strong> {selectedMessage.name} (&lt;{selectedMessage.email}&gt;)
              </div>
              {selectedMessage.phone && (
                <div className="mb-1">
                  <strong>Phone:</strong> {selectedMessage.phone}
                </div>
              )}
            </div>

            <div className="mb-4">
              <label className="text-muted fw-semibold mb-2" style={{ fontSize: "0.85rem" }}>
                MESSAGE CONTENT
              </label>
              <div
                style={{
                  backgroundColor: "#ffffff",
                  padding: "16px",
                  borderRadius: "8px",
                  border: "1px solid #e2e8f0",
                  fontSize: "0.95rem",
                  color: "#334155",
                  whiteSpace: "pre-wrap",
                  minHeight: "100px",
                }}
              >
                {selectedMessage.message || selectedMessage.body || "No message body available."}
              </div>
            </div>

            <div className="d-flex justify-content-end gap-2">
              <a
                href={`mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject || ""}`}
                className="btn btn-primary px-4"
                style={{ borderRadius: "6px" }}
              >
                Reply via Email
              </a>
              <button
                className="btn btn-secondary px-4"
                onClick={() => setSelectedMessage(null)}
                style={{ borderRadius: "6px" }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contacts;