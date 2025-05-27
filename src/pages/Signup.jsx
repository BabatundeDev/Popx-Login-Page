import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    userType: "agency",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  if (
    !formData.fullName ||
    !formData.phone ||
    !formData.email ||
    !formData.password ||
    !formData.company
  ) {
    alert("Please fill in all fields.");
    return;
  }
  // console.log("Form submitted:", formData);
  // alert("Account created successfully!");
  
  navigate("/profile");
};

  const inputWrapperStyle = {
    position: "relative",
    marginBottom: "1.5rem",
  };

  const labelStyle = {
    position: "absolute",
    top: "-10px",
    left: "12px",
    backgroundColor: "#f8f9fa",
    padding: "0 4px",
    fontSize: "0.8rem",
    fontWeight: "500",
    color: "#6c25ff",
    paddingRight: "12px",
  };

  const inputStyle = {
    border: "2px solid #dee2e6",
    borderRadius: "8px",
    padding: "16px 12px 8px",
    backgroundColor: "#f8f9fa",
    width: "100%",
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          border: "1px solid #dee2e6",
          padding: "20px",
          backgroundColor: "#f8f9fa",
          maxWidth: "400px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          height: "95vh",
        }}
      >
        <h2 className="mb-4 fw-bold">
          Create your <br /> PopX account
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div style={inputWrapperStyle}>
            <label htmlFor="fullName" style={labelStyle}>
              Full Name<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              style={inputStyle}
              placeholder="Enter full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone Number */}
          <div style={inputWrapperStyle}>
            <label htmlFor="phone" style={labelStyle}>
              Phone number<span className="text-danger">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              style={inputStyle}
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email Address */}
          <div style={inputWrapperStyle}>
            <label htmlFor="email" style={labelStyle}>
              Email address<span className="text-danger">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              style={inputStyle}
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div style={inputWrapperStyle}>
            <label htmlFor="password" style={labelStyle}>
              Password<span className="text-danger">*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              style={inputStyle}
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Company Name */}
          <div style={inputWrapperStyle}>
            <label htmlFor="company" style={labelStyle}>
              Company name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              style={inputStyle}
              placeholder="Enter company name"
              value={formData.company}
              onChange={handleChange}
              required
            />
          </div>

          {/* Radio Buttons */}
          <fieldset
            style={{ border: "none", padding: 0, marginBottom: "1.5rem" }}
          >
            <legend
              style={{
                fontSize: "16px",
                marginBottom: "10px",
                fontWeight: "500",
              }}
            >
              Are you an Agency?<span className="text-danger">*</span>
            </legend>

            <div style={{ display: "flex", gap: "20px" }}>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="userType"
                  value="agency"
                  id="agencyYes"
                  checked={formData.userType === "agency"}
                  onChange={handleChange}
                />
                <label htmlFor="agencyYes" className="form-check-label">
                  Yes
                </label>
              </div>

              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="userType"
                  value="individual"
                  id="agencyNo"
                  checked={formData.userType === "individual"}
                  onChange={handleChange}
                />
                <label htmlFor="agencyNo" className="form-check-label">
                  No
                </label>
              </div>
            </div>
          </fieldset>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-100"
            style={{
              backgroundColor: "#6c25ff",
              color: "#fff",
              fontWeight: "bold",
              padding: "12px",
              fontSize: "1rem",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
