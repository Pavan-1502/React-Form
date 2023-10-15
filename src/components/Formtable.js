import React from "react";

function Formtable(props) {
  const {
    formData,
    editIndex,
    editedData,
    handleEdit,
    handleEditChange,
    handleSave,
    handleCancel,
    handleDelete,
    closePopup,
  } = props;

  return (
    <div className="popup">
      <div className="popup-content">
        <h3>Submitted Data</h3>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone No</th>
              <th>Birth Date</th>
              <th>Gender</th>
              <th>Address</th>
              <th>Country</th>
              <th>City</th>
              <th>Region</th>
              <th>Postal Code</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {formData.map((data, index) => (
              <tr className="tr" key={index}>
                <td className="td">
                  {editIndex === index ? (
                    <input
                      className="int"
                      type="text"
                      value={editedData.firstName}
                      onChange={(e) => handleEditChange(e, "firstName")}
                    />
                  ) : (
                    data.firstName
                  )}
                </td>
                <td>
                  {editIndex === index ? (
                    <input
                      className="int"
                      type="text"
                      value={editedData.lastName}
                      onChange={(e) => handleEditChange(e, "lastName")}
                    />
                  ) : (
                    data.lastName
                  )}
                </td>
                <td className="cell-content">
                  {editIndex === index ? (
                    <div>
                      <input
                        className="int"
                        type="text"
                        value={editedData.email}
                        onChange={(e) => handleEditChange(e, "email")}
                      />
                    </div>
                  ) : (
                    data.email
                  )}
                </td>
                <td>
                  {editIndex === index ? (
                    <input
                      className="int"
                      type="text"
                      value={editedData.phoneNumber}
                      onChange={(e) => handleEditChange(e, "phoneNumber")}
                    />
                  ) : (
                    data.phoneNumber
                  )}
                </td>
                <td>
                  {editIndex === index ? (
                    <input
                      className="int"
                      type="text"
                      value={editedData.birthDate}
                      onChange={(e) => handleEditChange(e, "birthDate")}
                    />
                  ) : (
                    data.birthDate
                  )}
                </td>
                <td>
                  {editIndex === index ? (
                    <input
                      className="int"
                      type="text"
                      value={editedData.gender}
                      onChange={(e) => handleEditChange(e, "gender")}
                    />
                  ) : (
                    data.gender
                  )}
                </td>
                <td>
                  {editIndex === index ? (
                    <input
                      className="int"
                      type="text"
                      value={editedData.address}
                      onChange={(e) => handleEditChange(e, "address")}
                    />
                  ) : (
                    data.address
                  )}
                </td>
                <td>
                  {editIndex === index ? (
                    <input
                      className="int"
                      type="text"
                      value={editedData.country}
                      onChange={(e) => handleEditChange(e, "country")}
                    />
                  ) : (
                    data.country
                  )}
                </td>
                <td>
                  {editIndex === index ? (
                    <input
                      className="int"
                      type="text"
                      value={editedData.city}
                      onChange={(e) => handleEditChange(e, "city")}
                    />
                  ) : (
                    data.city
                  )}
                </td>
                <td>
                  {editIndex === index ? (
                    <input
                      className="int"
                      type="text"
                      value={editedData.region}
                      onChange={(e) => handleEditChange(e, "region")}
                    />
                  ) : (
                    data.region
                  )}
                </td>
                <td>
                  {editIndex === index ? (
                    <input
                      className="int"
                      type="text"
                      value={editedData.postalCode}
                      onChange={(e) => handleEditChange(e, "postalCode")}
                    />
                  ) : (
                    data.postalCode
                  )}
                </td>
                <td>
                  {editIndex === index ? (
                    <div>
                      <button
                        className="save"
                        onClick={() => handleSave(index)}
                      >
                        Save
                      </button>
                      <button className="cancel" onClick={handleCancel}>
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <div>
                      <button
                        className="edit"
                        onClick={() => handleEdit(index)}
                      >
                        Edit
                      </button>
                      <button
                        className="delete"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn" onClick={closePopup}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Formtable;
