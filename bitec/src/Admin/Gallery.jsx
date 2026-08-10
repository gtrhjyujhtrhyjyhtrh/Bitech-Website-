import React, { useEffect, useState } from "react";
import axios from "axios";

const Gallery = () => {
  const [categories, setCategories] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    fetchCategories();
    fetchGallery();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/gallery/categories");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchGallery = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/gallery");
      setGallery(response.data);
    } catch (error) {
      console.error("Error fetching gallery:", error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this image?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/gallery/${id}`);
      // Optimistic update for snappier UI
      setGallery((prev) => prev.filter((img) => img.id !== id));
      alert("Image deleted!");
    } catch (error) {
      console.error("Error deleting image:", error);
      alert("Failed to delete image.");
    }
  };

  const handleUpload = async () => {
    if (!selectedFile || !selectedCategory) {
      alert("Please select both a file and a category.");
      return;
    }

    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append("image", selectedFile);
      formData.append("categoryId", selectedCategory);

      await axios.post("http://localhost:5000/api/gallery/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // Reset form and refresh gallery
      setSelectedFile(null);
      setSelectedCategory("");
      // Clear the file input visually
      document.getElementById("image-upload-input").value = "";
      
      fetchGallery();
      alert("Image uploaded successfully!");
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Upload failed.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Upload Section */}
      <div 
        className="card mb-4" 
        style={{ 
          maxWidth: "600px", 
          boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
          border: "1px solid #e2e8f0" 
        }}
      >
        <div className="card-header bg-white pb-0 border-bottom-0 pt-4 px-4">
          <h4 style={{ margin: 0, fontWeight: "600", color: "#1e293b" }}>Upload Image</h4>
        </div>
        
        <div className="card-body p-4">
          <div className="mb-3">
            <label className="form-label" style={{ fontSize: "0.875rem", fontWeight: "500" }}>
              Category
            </label>
            <select
              className="form-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="form-label" style={{ fontSize: "0.875rem", fontWeight: "500" }}>
              Image File
            </label>
            <input
              id="image-upload-input"
              type="file"
              className="form-control"
              accept="image/*"
              onChange={(e) => setSelectedFile(e.target.files[0])}
            />
          </div>

          <button
            className="btn btn-primary w-100"
            onClick={handleUpload}
            disabled={isUploading || !selectedFile || !selectedCategory}
            style={{ fontWeight: "600", padding: "10px" }}
          >
            {isUploading ? "Uploading..." : "Upload Image"}
          </button>
        </div>
      </div>

      {/* Gallery Section */}
      <div>
        <div className="d-flex justify-content-between align-items-end mb-4">
          <div>
            <h2 style={{ fontWeight: "600", color: "#0f172a", margin: 0 }}>Gallery Management</h2>
            <p className="text-muted mb-0 mt-1" style={{ fontSize: "0.9rem" }}>
              {gallery.length} Images across {categories.length} Categories
            </p>
          </div>
        </div>

        {gallery.length === 0 ? (
          <div className="text-center py-5" style={{ backgroundColor: "#f8fafc", borderRadius: "8px" }}>
            <p className="text-muted mb-0">No images in the gallery yet.</p>
          </div>
        ) : (
          /* 3-Column Grid Layout */
          <div 
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "24px"
            }}
          >
            {gallery.map((image) => (
              <div 
                key={image.id} 
                className="card h-100" 
                style={{ 
                  overflow: "hidden", 
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  border: "none",
                  borderRadius: "10px"
                }}
              >
                {/* Image Preview */}
                <div style={{ aspectRatio: "4/3", backgroundColor: "#f1f5f9" }}>
                  <img
                    src={`http://localhost:5000${image.imageUrl}`}
                    alt={`Gallery item ${image.id}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    onError={(e) => {
                      // Fallback if image fails to load
                      e.target.src = "https://via.placeholder.com/400x300?text=Image+Not+Found";
                    }}
                  />
                </div>
                
                {/* Card Footer / Actions */}
                <div className="card-body d-flex flex-column justify-content-between p-3 bg-white">
                  <div className="mb-3">
                    <span 
                      className="badge bg-secondary-subtle text-secondary px-2 py-1"
                      style={{ fontSize: "0.75rem", fontWeight: "600" }}
                    >
                      {image.category?.name || "Uncategorized"}
                    </span>
                  </div>
                  
                  <button
                    className="btn btn-outline-danger w-100 btn-sm"
                    onClick={() => handleDelete(image.id)}
                    style={{ fontWeight: "500", borderRadius: "6px" }}
                  >
                    Delete Image
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;