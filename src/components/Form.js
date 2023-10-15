import React, { useState, useEffect } from "react";
import "./Form.css";

import Formtable from "./Formtable";
import Registration from "./Registration"; 

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
    const updatedFormData = [...formData];
    updatedFormData.splice(index, 1);
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

      <Registration
        formValues={formValues}
        formErrors={formErrors}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default Form;
