import React, { useState } from "react";
import axios from "axios";
import Bitech from "../MyComponent/Bitech.png";

const Login = ({ navigate, logoSrc = "https://via.placeholder.com/100" }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/api/admin/login", {
        email,
        password,
      });

      if (response.data?.success) {
        localStorage.setItem("adminToken", response.data.token);
        navigate("/administration");
      } else {
        setError(response.data?.message || "Login failed. Please check your credentials.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError(
        err.response?.data?.message || "Server connection error. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f6f8",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          padding: "40px 32px",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
          border: "1px solid #eaedf1",
          textAlign: "center",
        }}
      >
        {/* Logo / Header Section */}
        <div style={{ marginBottom: "28px" }}>
          <img
            src={Bitech}
            alt="Logo"
            style={{
              width: "80px",
              height: "80px",
              objectFit: "contain",
              borderRadius: "50%",
              marginBottom: "16px",
            }}
          />
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "600",
              color: "#2d3748",
              margin: 0,
            }}
          >
            Admin Login
          </h2>
          <p
            style={{
              fontSize: "0.875rem",
              color: "#718096",
              marginTop: "6px",
              marginBottom: 0,
            }}
          >
            
          </p>
        </div>

        {/* Error Feedback */}
        {error && (
          <div
            className="alert alert-danger py-2 px-3 mb-3 text-start"
            style={{ fontSize: "0.875rem", borderRadius: "6px" }}
          >
            {error}
          </div>
        )}

        {/* Form Fields */}
        <form onSubmit={handleLogin}>
          <div className="text-start mb-3">
            <label
              style={{
                fontSize: "0.85rem",
                fontWeight: "600",
                color: "#4a5568",
                marginBottom: "6px",
                display: "block",
              }}
            >
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="admin@example.com"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              style={{
                padding: "10px 14px",
                borderRadius: "6px",
                fontSize: "0.95rem",
              }}
            />
          </div>

          <div className="text-start mb-4">
            <label
              style={{
                fontSize: "0.85rem",
                fontWeight: "600",
                color: "#4a5568",
                marginBottom: "6px",
                display: "block",
              }}
            >
              Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="••••••••"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              style={{
                padding: "10px 14px",
                borderRadius: "6px",
                fontSize: "0.95rem",
              }}
            />
          </div>

          <button
            type="submit"
            className="btn btn-success w-100"
            disabled={loading}
            style={{
              padding: "11px",
              fontWeight: "600",
              borderRadius: "6px",
              fontSize: "0.95rem",
            }}
          >
            {loading ? "Signing in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;