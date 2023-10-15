import React, { useState, useEffect } from "react";
import "./Form.css";

import Formtable from "./Formtable";

function Form() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    birthDate: "",
    gender: "",
    address: "",
    country: "",
    city: "",
    region: "",
    postalCode: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [formData, setFormData] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [editIndex, setEditIndex] = useState(null);
  const [editedData, setEditedData] = useState({});

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditedData({ ...formData[index] });
  };

  const handleEditChange = (e, fieldName) => {
    const value = e.target.value;
    setEditedData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleSave = (index) => {
    const updatedFormData = [...formData];
    updatedFormData[index] = editedData;
    setFormData(updatedFormData);
    setEditIndex(null);

    localStorage.setItem("formData", JSON.stringify(updatedFormData));
  };

  const handleCancel = () => {
    setEditIndex(null);
  };

  const validateField = (name, value) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    switch (name) {
      case "firstName":
        errors.firstName = value ? "" : "First Name is required";
        break;
      case "lastName":
        errors.lastName = value ? "" : "Last Name is required";
        break;
      case "email":
        errors.email = value
          ? emailRegex.test(value)
            ? ""
            : "Invalid Email address"
          : "Email is required";
        break;
      case "phoneNumber":
        errors.phoneNumber = value
          ? phoneRegex.test(value)
            ? ""
            : "Invalid phone number (10 digits)"
          : "Phone Number is required";
        break;
      case "birthDate":
        errors.birthDate = value ? "" : "Birth Date is required";
        break;
      case "gender":
        errors.gender = value ? "" : "Gender is required";
        break;
      case "address":
        errors.address = value ? "" : "Address is required";
        break;
      case "country":
        errors.country = value ? "" : "Country is required";
        break;
      case "city":
        errors.city = value ? "" : "City is required";
        break;
      case "region":
        errors.region = value ? "" : "Region is required";
        break;
      case "postalCode":
        errors.postalCode = value ? "" : "Postal Code is required";
        break;
      default:
        break;
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
    const fieldErrors = validateField(name, value);
    setFormErrors({ ...formErrors, ...fieldErrors });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const fieldErrors = {};
    for (const field in formValues) {
      const fieldError = validateField(field, formValues[field]);
      if (fieldError[field]) {
        fieldErrors[field] = fieldError[field];
      }
    }

    setFormErrors(fieldErrors);
    setIsSubmit(true);

    if (Object.keys(fieldErrors).length === 0) {
      const updatedFormData = [...formData, formValues];
      setFormData(updatedFormData);

      clearForm();
      openPopup();

      localStorage.setItem("formData", JSON.stringify(updatedFormData));
    }
  };

  const clearForm = () => {
    setFormValues(initialValues);
  };

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  useEffect(() => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }

    if (formData.length === 0) {
      closePopup();
    }
  }, [formErrors, formValues, isSubmit, formData.length]);

  const handleDelete = (index) => {
    const updatedFormData = formData.filter((_, i) => i !== index);
    setFormData(updatedFormData);
    localStorage.setItem("formData", JSON.stringify(updatedFormData));
  };

  return (
    <>
      {isPopupOpen && (
        <Formtable
          formData={formData}
          editIndex={editIndex}
          editedData={editedData}
          handleEdit={handleEdit}
          handleEditChange={handleEditChange}
          handleSave={handleSave}
          handleCancel={handleCancel}
          handleDelete={handleDelete}
          closePopup={closePopup}
        />
      )}

      <div className="formbold-main-wrapper">
        <div className="formbold-form-wrapper">
          <div className="container">
            <div>
              <h3>Registration Form</h3>
            </div>

            <form className="form" onSubmit={handleSubmit}>
              <div className="column">
                <div className="input-box">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formValues.firstName}
                    onChange={handleChange}
                  />

                  <p className="error-message">{formErrors.firstName}</p>
                </div>
                <div className="input-box">
                  <label className="top">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formValues.lastName}
                    onChange={handleChange}
                  />

                  <p className="error-message">{formErrors.lastName}</p>
                </div>
              </div>

              <div className="column">
                <div className="input-box">
                  <label>Email</label>
                  <input
                    type="text"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                  />

                  <p className="error-message">{formErrors.email}</p>
                </div>
                <div className="input-box">
                  <label>Phone Number</label>
                  <input
                    type="number"
                    name="phoneNumber"
                    value={formValues.phoneNumber}
                    onChange={handleChange}
                  />
                  <p className="error-message">{formErrors.phoneNumber}</p>
                </div>
              </div>

              <div className="column">
                <div className="input-box">
                  <label>Birth Date</label>
                  <input
                    type="date"
                    name="birthDate"
                    value={formValues.birthDate}
                    onChange={handleChange}
                  />
                  <p className="error-message">{formErrors.birthDate}</p>
                </div>

                <div className="input-box">
                  <label className="top">Gender</label>
                  <div className="radio-group">
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value="male"
                      checked={formValues.gender === "male"}
                      onChange={handleChange}
                    />
                    <label htmlFor="male">Male</label>
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                      checked={formValues.gender === "female"}
                      onChange={handleChange}
                    />
                    <label htmlFor="female">Female</label>
                    <input
                      type="radio"
                      id="other"
                      name="gender"
                      value="other"
                      checked={formValues.gender === "other"}
                      onChange={handleChange}
                    />
                    <label htmlFor="other">Other</label>
                  </div>
                  <p className="error-message">{formErrors.gender}</p>
                </div>
              </div>

              <div className="input-box ">
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Street address"
                  value={formValues.address}
                  onChange={handleChange}
                />
                <p className="error-message">{formErrors.address}</p>

                <div className="column">
                  <div className="select-box">
                    <select
                      type="text"
                      name="country"
                      placeholder="Country"
                      value={formValues.country}
                      onChange={handleChange}
                    >
                      <option hidden>Country</option>
                      <option>America</option>
                      <option>Japan</option>
                      <option>India</option>
                      <option>Nepal</option>
                    </select>

                    <p className="error-message">{formErrors.country}</p>
                  </div>
                  <div className="select-box">
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={formValues.city}
                      onChange={handleChange}
                    />
                    <p className="error-message">{formErrors.city}</p>
                  </div>
                </div>

                <div className="column">
                  <div className="input-box">
                    <input
                      type="text"
                      name="region"
                      placeholder="Region"
                      value={formValues.region}
                      onChange={handleChange}
                    />

                    <p className="error-message">{formErrors.region}</p>
                  </div>
                  <div className="input-box">
                    <input
                      type="number"
                      name="postalCode"
                      placeholder="Postal Code"
                      value={formValues.postalCode}
                      onChange={handleChange}
                    />
                    <p className="error-message">{formErrors.postalCode}</p>
                  </div>
                </div>
              </div>

              <button type="submit">Register</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
