import React from "react";

function Registration(props) {
  const { formValues, formErrors, handleChange, handleSubmit } = props;

  return (
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
  );
}

export default Registration;
