import React, { useState, useEffect } from "react";
import Contacts from "./Contacts";
import Applications from "./Applications";
import Careers from "./Careers";
import Gallery from "./Gallery";
import NavbarManagement from "./NavbarManagement";

const Dashboard = ({ navigate }) => {
  const [activePage, setActivePage] = useState("contacts");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/admin");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin");
  };

  const navItems = [
    { id: "contacts", label: "Contacts", icon: "💬" },
    { id: "applications", label: "Applications", icon: "📑" },
    { id: "careers", label: "Careers", icon: "💼" },
    { id: "gallery", label: "Gallery", icon: "🖼️" },
    { id: "navbar", label: "Navbar Settings", icon: "⚙️" },
  ];

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#f8fafc" }}>
      {/* Sidebar Overlay for Mobile */}
      {!isSidebarOpen && (
        <div
          className="d-md-none"
          onClick={() => setIsSidebarOpen(true)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.4)",
            zIndex: 99,
          }}
        />
      )}

      {/* Sidebar Navigation */}
      <aside
        style={{
          width: "260px",
          backgroundColor: "#0f172a",
          color: "#f8fafc",
          display: "flex",
          flexDirection: "column",
          position: "sticky",
          top: 0,
          height: "100vh",
          transition: "transform 0.3s ease",
          zIndex: 100,
        }}
      >
        {/* Brand Header */}
        <div
          style={{
            padding: "24px 20px",
            borderBottom: "1px solid #1e293b",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "8px",
              backgroundColor: "#2563eb",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              color: "#ffffff",
            }}
          >
            A
          </div>
          <div>
            <h5 style={{ margin: 0, fontSize: "1.05rem", fontWeight: "600" }}>
              Admin Console
            </h5>
            <small style={{ color: "#94a3b8", fontSize: "0.75rem" }}>
              Management Portal
            </small>
          </div>
        </div>

        {/* Navigation Links */}
        <nav style={{ padding: "16px 12px", flexGrow: 1 }}>
          <div
            style={{
              fontSize: "0.75rem",
              fontWeight: "600",
              color: "#64748b",
              padding: "8px 12px",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Main Menu
          </div>
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "10px 14px",
                  margin: "4px 0",
                  borderRadius: "8px",
                  border: "none",
                  backgroundColor: isActive ? "#1e293b" : "transparent",
                  color: isActive ? "#38bdf8" : "#94a3b8",
                  fontWeight: isActive ? "600" : "400",
                  fontSize: "0.925rem",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.15s ease",
                }}
              >
                <span style={{ fontSize: "1.1rem" }}>{item.icon}</span>
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Sidebar Footer / User Info & Logout */}
        <div style={{ padding: "16px", borderTop: "1px solid #1e293b" }}>
          <button
            onClick={handleLogout}
            className="btn btn-outline-danger w-100 d-flex align-items-center justify-content-center gap-2"
            style={{
              borderRadius: "8px",
              padding: "9px",
              fontSize: "0.9rem",
              fontWeight: "500",
            }}
          >
            <span>🚪</span> Log Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main style={{ flexGrow: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        {/* Header Bar */}
        <header
          style={{
            height: "64px",
            backgroundColor: "#ffffff",
            borderBottom: "1px solid #e2e8f0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 28px",
            position: "sticky",
            top: 0,
            zIndex: 10,
          }}
        >
          <div className="d-flex align-items-center gap-3">
            <h4
              style={{
                margin: 0,
                fontSize: "1.15rem",
                fontWeight: "600",
                color: "#0f172a",
                textTransform: "capitalize",
              }}
            >
              {activePage} Overview
            </h4>
          </div>

          <div className="d-flex align-items-center gap-3">
            <span
              className="badge bg-primary-subtle text-primary border border-primary-subtle px-3 py-2"
              style={{ fontSize: "0.8rem", borderRadius: "20px" }}
            >
              ● System Active
            </span>
          </div>
        </header>

        {/* Page Content Viewport */}
        <div style={{ padding: "0px", flexGrow: 1 }}>
          {activePage === "contacts" && <Contacts />}
          {activePage === "applications" && <Applications />}
          {activePage === "navbar" && <NavbarManagement />}
          {activePage === "careers" && <Careers />}
          {activePage === "gallery" && <Gallery />}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;