import { useEffect, useState } from "react";
import axios from "axios";

const Careers = () => {
  const [careers, setCareers] =
    useState([]);

  useEffect(() => {
    fetchCareers();
  }, []);

  const [formData, setFormData] =
  useState({
    title: "",
    description: "",
    departments: "",
    learningPoints: "",
    eligibility: "",
    location: "",
    applyEmail: "",
    whatsapp: "",
    status: true,
  });

  const [editingId, setEditingId] =
  useState(null);

  const fetchCareers = async () => {
    try {
      const response =
        await axios.get(
          "http://localhost:5000/api/careers"
        );

      setCareers(response.data);
    } catch (error) {
      console.error(
        "Failed to fetch careers:",
        error
      );
    }
  };


  const handleEdit = (career) => {
  setEditingId(career.id);

  setFormData({
    title: career.title || "",
    description: career.description || "",
    departments:
      career.departments || "",
    learningPoints:
      career.learningPoints || "",
    eligibility:
      career.eligibility || "",
    location:
      career.location || "",
    applyEmail:
      career.applyEmail || "",
    whatsapp:
      career.whatsapp || "",
    status: career.status,
  });
};


const handleDelete = async (id) => {
  const confirmed = window.confirm(
    "Are you sure you want to delete this career?"
  );

  if (!confirmed) return;

  try {
    await axios.delete(
      `http://localhost:5000/api/careers/${id}`
    );

    fetchCareers();
  } catch (error) {
    console.error(error);
  }
};

  const handleSubmit = async () => {
  try {
    if (editingId) {
      await axios.put(
        `http://localhost:5000/api/careers/${editingId}`,
        formData
      );
    } else {
      await axios.post(
        "http://localhost:5000/api/careers",
        formData
      );
    }

    fetchCareers();

    setEditingId(null);

    setFormData({
      title: "",
      description: "",
      departments: "",
      learningPoints: "",
      eligibility: "",
      location: "",
      applyEmail: "",
      whatsapp: "",
      status: true,
    });
  } catch (error) {
    console.error(error);
  }
};

  return (
    <div>
      <h2 className="mb-4">
        Careers Management
      </h2>

      <div className="card p-3 mb-4">
  <h4>Add Career</h4>

  <input
    className="form-control mb-2"
    placeholder="Job Title"
    value={formData.title}
    onChange={(e) =>
      setFormData({
        ...formData,
        title: e.target.value,
      })
    }
  />

  <textarea
  className="form-control mb-2"
  placeholder="Departments"
  value={formData.departments}
  onChange={(e) =>
    setFormData({
      ...formData,
      departments: e.target.value,
    })
  }
/>

<textarea
  className="form-control mb-2"
  placeholder="Learning Points"
  value={formData.learningPoints}
  onChange={(e) =>
    setFormData({
      ...formData,
      learningPoints: e.target.value,
    })
  }
/>

<textarea
  className="form-control mb-2"
  placeholder="Eligibility"
  value={formData.eligibility}
  onChange={(e) =>
    setFormData({
      ...formData,
      eligibility: e.target.value,
    })
  }
/>

<div>
  {/* Apply Email Field */}
  <div className="mb-3">
    <input
      className="form-control mb-1"
      placeholder="Apply Email"
      value={formData.applyEmail}
      onChange={(e) =>
        setFormData({
          ...formData,
          applyEmail: e.target.value,
        })
      }
    />
    {formData.applyEmail && (
      <small className="d-block text-muted">
        Preview:{" "}
        <a
          href={`mailto:${formData.applyEmail}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary text-decoration-none"
        >
          {formData.applyEmail} ✉️
        </a>
      </small>
    )}
  </div>

  {/* WhatsApp Field */}
  <div className="mb-3">
    <input
      className="form-control mb-1"
      placeholder="WhatsApp (e.g. +923005005086)"
      value={formData.whatsapp}
      onChange={(e) =>
        setFormData({
          ...formData,
          whatsapp: e.target.value,
        })
      }
    />
    {formData.whatsapp && (
      <small className="d-block text-muted">
        Preview:{" "}
        <a
          href={`https://wa.me/${formData.whatsapp.replace(/[^0-9]/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-success text-decoration-none"
        >
          Chat on WhatsApp 💬
        </a>
      </small>
    )}
  </div>
</div>

  <input
    className="form-control mb-3"
    placeholder="Location"
    value={formData.location}
    onChange={(e) =>
      setFormData({
        ...formData,
        location: e.target.value,
      })
    }
  />

  <button
  className="btn btn-success"
  onClick={handleSubmit}
>
  {editingId
    ? "Update Career"
    : "Add Career"}
</button>
</div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Location</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {careers.map((career) => (
            <tr key={career.id}>
              <td>{career.id}</td>
              <td>{career.title}</td>
              <td>{career.location}</td>
              <td>
  <div className="d-flex gap-2">
  <button
    className="btn btn-warning btn-sm"
    onClick={() =>
      handleEdit(career)
    }
  >
    Edit
  </button>

  <button
    className="btn btn-danger btn-sm"
    onClick={() =>
      handleDelete(career.id)
    }
  >
    Delete
  </button>
</div>




</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Careers;