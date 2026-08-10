import React, { useEffect, useState } from "react";
import axios from "axios";

const Applications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get("http://localhost:5000/api/applications");
      const data = Array.isArray(response.data)
        ? response.data
        : response.data?.applications || [];
      setApplications(data);
    } catch (err) {
      console.error("Error fetching applications:", err);
      setError("Failed to load job applications. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const deleteApplication = async (id) => {
    if (!window.confirm("Are you sure you want to delete this application?")) return;

    setDeletingId(id);
    try {
      await axios.delete(`http://localhost:5000/api/applications/${id}`);
      // Optimistic state update
      setApplications((prev) => prev.filter((app) => (app.id || app._id) !== id));
    } catch (err) {
      console.error("Error deleting application:", err);
      alert("Failed to delete application.");
    } finally {
      setDeletingId(null);
    }
  };

  // Filter applications by name, email, or phone
  const filteredApplications = applications.filter((app) => {
    const term = searchTerm.toLowerCase();
    const name = app.username || app.name || "";
    return (
      name.toLowerCase().includes(term) ||
      app.email?.toLowerCase().includes(term) ||
      app.phone?.toLowerCase().includes(term)
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
              Job Applications
            </h2>
            <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>
              Review submitted candidate resumes and details ({applications.length} total)
            </p>
          </div>

          {/* Search Filter */}
          <div style={{ minWidth: "280px" }}>
            <input
              type="text"
              className="form-control"
              placeholder="🔍 Search applicant name, email..."
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
          <div className="alert alert-danger d-flex align-items-center justify-content-between mb-4">
            <span>{error}</span>
            <button className="btn btn-outline-danger btn-sm" onClick={fetchApplications}>
              Retry
            </button>
          </div>
        )}

        {/* Applications Table Card */}
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
              <p className="text-muted mb-0">Loading applications...</p>
            </div>
          ) : filteredApplications.length === 0 ? (
            <div className="text-center py-5">
              <p className="text-muted mb-0 fs-5">
                {searchTerm ? "No applications match your search criteria." : "No applications received yet."}
              </p>
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead style={{ backgroundColor: "#f8fafc", borderBottom: "2px solid #e2e8f0" }}>
                  <tr>
                    <th className="py-3 px-4" style={{ fontSize: "0.8rem", textTransform: "uppercase", color: "#64748b" }}>Applicant</th>
                    <th className="py-3 px-4" style={{ fontSize: "0.8rem", textTransform: "uppercase", color: "#64748b" }}>Contact Info</th>
                    <th className="py-3 px-4" style={{ fontSize: "0.8rem", textTransform: "uppercase", color: "#64748b" }}>Resume</th>
                    <th className="py-3 px-4 text-end" style={{ fontSize: "0.8rem", textTransform: "uppercase", color: "#64748b" }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredApplications.map((app) => {
                    const id = app.id || app._id;
                    const applicantName = app.username || app.name || "N/A";
                    return (
                      <tr key={id}>
                        {/* Name Column */}
                        <td className="py-3 px-4">
                          <div className="fw-semibold" style={{ color: "#1e293b" }}>
                            {applicantName}
                          </div>
                        </td>

                        {/* Contact Info */}
                        <td className="py-3 px-4">
                          <div style={{ fontSize: "0.875rem", color: "#334155" }}>
                            <a href={`mailto:${app.email}`} className="text-decoration-none" style={{ color: "#2563eb" }}>
                              {app.email}
                            </a>
                          </div>
                          {app.phone && (
                            <div style={{ fontSize: "0.8rem", color: "#64748b" }}>
                              📞 {app.phone}
                            </div>
                          )}
                        </td>

                        {/* Resume Download / View */}
                        <td className="py-3 px-4">
                          {app.resumeFile ? (
                            <a
                              href={`http://localhost:5000/uploads/resumes/${app.resumeFile}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-outline-secondary btn-sm d-inline-flex align-items-center gap-2"
                              style={{ borderRadius: "6px", fontSize: "0.85rem", fontWeight: "500" }}
                            >
                              📄 View Resume
                            </a>
                          ) : (
                            <span className="text-muted" style={{ fontSize: "0.85rem" }}>
                              No file uploaded
                            </span>
                          )}
                        </td>

                        {/* Action Column */}
                        <td className="py-3 px-4 text-end">
                          <button
                            className="btn btn-outline-danger btn-sm px-3"
                            onClick={() => deleteApplication(id)}
                            disabled={deletingId === id}
                            style={{ borderRadius: "6px" }}
                          >
                            {deletingId === id ? "Deleting..." : "Delete"}
                          </button>
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
    </div>
  );
};

export default Applications;