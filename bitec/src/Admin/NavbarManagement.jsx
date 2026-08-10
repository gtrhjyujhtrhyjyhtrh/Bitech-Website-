import React, { useEffect, useState } from "react";
import axios from "axios";

const NavbarManagement = () => {
  const [items, setItems] = useState([]);
  const [footerLinks, setFooterLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [savingId, setSavingId] = useState(null);
  const [activeTab, setActiveTab] = useState("navbar");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      await Promise.all([fetchItems(), fetchFooter()]);
    } catch (error) {
      console.error("Error fetching navigation settings:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchItems = async () => {
    const response = await axios.get("http://localhost:5000/api/navbar");
    setItems(response.data);
  };

  const fetchFooter = async () => {
    const response = await axios.get("http://localhost:5000/api/footer");
    setFooterLinks(response.data);
  };

  // Generic helper for updating state array immutably
  const updateItemInState = (setter, list, id, field, value) => {
    setter(
      list.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const handleUpdateNavbar = async (item) => {
    setSavingId(`nav-${item.id}`);
    try {
      await axios.put(`http://localhost:5000/api/navbar/${item.id}`, item);
      alert("Navbar item saved successfully!");
      fetchItems();
    } catch (error) {
      console.error("Error updating navbar item:", error);
      alert("Failed to update navbar item.");
    } finally {
      setSavingId(null);
    }
  };

  const toggleFooter = async (item) => {
    setSavingId(`footer-${item.id}`);
    try {
      await axios.put(`http://localhost:5000/api/footer/${item.id}`, {
        visible: item.visible,
      });
      alert("Footer link status saved!");
      fetchFooter();
    } catch (error) {
      console.error("Error toggling footer visibility:", error);
      alert("Failed to save footer link visibility.");
    } finally {
      setSavingId(null);
    }
  };

  return (
    <div style={{ padding: "24px" }}>
      {/* Page Heading */}
      <div className="mb-4">
        <h2 className="fw-bold mb-1" style={{ color: "#0f172a" }}>
          Navigation & Layout Settings
        </h2>
        <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>
          Manage menu positions, route labels, and visibility across the site navigation.
        </p>
      </div>

      {/* Tabs Filter */}
      <ul className="nav nav-tabs mb-4" style={{ borderColor: "#e2e8f0" }}>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "navbar" ? "active fw-semibold" : "text-secondary"}`}
            onClick={() => setActiveTab("navbar")}
            style={{ cursor: "pointer" }}
          >
            🧭 Main Navbar ({items.length})
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "footer" ? "active fw-semibold" : "text-secondary"}`}
            onClick={() => setActiveTab("footer")}
            style={{ cursor: "pointer" }}
          >
            🦶 Footer Links ({footerLinks.length})
          </button>
        </li>
      </ul>

      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary mb-2" role="status"></div>
          <p className="text-muted mb-0">Loading settings...</p>
        </div>
      ) : (
        <>
          {/* Main Navbar Section */}
          {activeTab === "navbar" && (
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                border: "1px solid #e2e8f0",
                overflow: "hidden",
              }}
            >
              <div className="table-responsive">
                <table className="table table-hover align-middle mb-0">
                  <thead style={{ backgroundColor: "#f8fafc", borderBottom: "2px solid #e2e8f0" }}>
                    <tr>
                      <th className="py-3 px-4" style={{ fontSize: "0.8rem", textTransform: "uppercase", color: "#64748b" }}>
                        Title / Label
                      </th>
                      <th className="py-3 px-4" style={{ fontSize: "0.8rem", textTransform: "uppercase", color: "#64748b" }}>
                        Route / URL
                      </th>
                      <th className="py-3 px-4" style={{ fontSize: "0.8rem", textTransform: "uppercase", color: "#64748b", width: "130px" }}>
                        Position
                      </th>
                      <th className="py-3 px-4" style={{ fontSize: "0.8rem", textTransform: "uppercase", color: "#64748b" }}>
                        Visibility
                      </th>
                      <th className="py-3 px-4 text-end" style={{ fontSize: "0.8rem", textTransform: "uppercase", color: "#64748b" }}>
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <tr key={item.id}>
                        {/* Title Editable Input */}
                        <td className="py-3 px-4">
                          <input
                            type="text"
                            className="form-control"
                            value={item.title}
                            onChange={(e) =>
                              updateItemInState(setItems, items, item.id, "title", e.target.value)
                            }
                            style={{ borderRadius: "6px", fontSize: "0.9rem" }}
                          />
                        </td>

                        {/* Route Display */}
                        <td className="py-3 px-4">
                          <code
                            style={{
                              backgroundColor: "#f1f5f9",
                              padding: "4px 8px",
                              borderRadius: "4px",
                              color: "#0284c7",
                              fontSize: "0.85rem",
                            }}
                          >
                            {item.route}
                          </code>
                        </td>

                        {/* Position Input */}
                        <td className="py-3 px-4">
                          <input
                            type="number"
                            className="form-control"
                            value={item.position}
                            onChange={(e) =>
                              updateItemInState(setItems, items, item.id, "position", Number(e.target.value))
                            }
                            style={{ borderRadius: "6px", fontSize: "0.9rem" }}
                          />
                        </td>

                        {/* Visibility Switch */}
                        <td className="py-3 px-4">
                          <div className="form-check form-switch m-0">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              checked={item.visible}
                              onChange={(e) =>
                                updateItemInState(setItems, items, item.id, "visible", e.target.checked)
                              }
                              style={{ cursor: "pointer" }}
                            />
                            <label className="form-check-label ms-2" style={{ fontSize: "0.85rem", color: item.visible ? "#16a34a" : "#dc2626" }}>
                              {item.visible ? "Visible" : "Hidden"}
                            </label>
                          </div>
                        </td>

                        {/* Save Action Button */}
                        <td className="py-3 px-4 text-end">
                          <button
                            className="btn btn-primary btn-sm px-3"
                            onClick={() => handleUpdateNavbar(item)}
                            disabled={savingId === `nav-${item.id}`}
                            style={{ borderRadius: "6px", fontWeight: "500" }}
                          >
                            {savingId === `nav-${item.id}` ? "Saving..." : "Save"}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Footer Section */}
          {activeTab === "footer" && (
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                border: "1px solid #e2e8f0",
                overflow: "hidden",
              }}
            >
              <div className="table-responsive">
                <table className="table table-hover align-middle mb-0">
                  <thead style={{ backgroundColor: "#f8fafc", borderBottom: "2px solid #e2e8f0" }}>
                    <tr>
                      <th className="py-3 px-4" style={{ fontSize: "0.8rem", textTransform: "uppercase", color: "#64748b" }}>
                        Title / Label
                      </th>
                      <th className="py-3 px-4" style={{ fontSize: "0.8rem", textTransform: "uppercase", color: "#64748b" }}>
                        Section
                      </th>
                      <th className="py-3 px-4" style={{ fontSize: "0.8rem", textTransform: "uppercase", color: "#64748b" }}>
                        Visibility Toggle
                      </th>
                      <th className="py-3 px-4 text-end" style={{ fontSize: "0.8rem", textTransform: "uppercase", color: "#64748b" }}>
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {footerLinks.map((item) => (
                      <tr key={item.id}>
                        {/* Title */}
                        <td className="py-3 px-4 fw-medium" style={{ color: "#1e293b" }}>
                          {item.title}
                        </td>

                        {/* Section Badge */}
                        <td className="py-3 px-4">
                          <span
                            className="badge bg-light text-dark border px-2 py-1"
                            style={{ fontSize: "0.8rem", fontWeight: "500" }}
                          >
                            {item.section || "General"}
                          </span>
                        </td>

                        {/* Visibility Switch */}
                        <td className="py-3 px-4">
                          <div className="form-check form-switch m-0">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              checked={item.visible}
                              onChange={(e) =>
                                updateItemInState(setFooterLinks, footerLinks, item.id, "visible", e.target.checked)
                              }
                              style={{ cursor: "pointer" }}
                            />
                            <label className="form-check-label ms-2" style={{ fontSize: "0.85rem", color: item.visible ? "#16a34a" : "#dc2626" }}>
                              {item.visible ? "Visible" : "Hidden"}
                            </label>
                          </div>
                        </td>

                        {/* Save Action Button */}
                        <td className="py-3 px-4 text-end">
                          <button
                            type="button"
                            className="btn btn-primary btn-sm px-3"
                            onClick={() => toggleFooter(item)}
                            disabled={savingId === `footer-${item.id}`}
                            style={{ borderRadius: "6px", fontWeight: "500" }}
                          >
                            {savingId === `footer-${item.id}` ? "Saving..." : "Save"}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default NavbarManagement;