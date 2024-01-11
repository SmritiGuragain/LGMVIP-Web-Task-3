import React, { useState } from 'react';

const initialFormData = {
    name: '',
    email: '',
    website: '',
    imageLink: '',
    gender: '',
    skills: [],
};

function FormExample() {
    const [formData, setFormData] = useState(initialFormData);
    const [submittedDataList, setSubmittedDataList] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            skills: checked
                ? [...prevData.skills, name]
                : prevData.skills.filter((skill) => skill !== name),
        }));
    };

    const handleRadioChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedDataList((prevList) => [...prevList, formData]);
        setFormData(initialFormData);

    };

    const handleClear = (e) => {
        e.preventDefault();
        setFormData(initialFormData);
    }

    return (
        <div className="container-fluid">
            <div className="row">
                {/* Left side (Form) */}
                <div className="col-md-6">
                    <form >
                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label">Name:</label>
                            <div className="col-sm-9">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label">Email:</label>
                            <div className="col-sm-9">
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label">Website:</label>
                            <div className="col-sm-9">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="website"
                                    value={formData.website}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label">Image Link:</label>
                            <div className="col-sm-9">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="imageLink"
                                    value={formData.imageLink}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label">Gender:</label>
                            <div className="col-sm-9">
                                <div className="form-check form-check-inline" style={{ marginRight: '40px' }}>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="male"
                                        className="form-check-input border-dark"
                                        checked={formData.gender === 'male'}
                                        onChange={handleRadioChange}
                                    />
                                    <label className="form-check-label">Male</label>
                                </div>

                                <div className="form-check form-check-inline" style={{ marginLeft: '40px' }}>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="female"
                                        className="form-check-input border-dark"
                                        checked={formData.gender === 'female'}
                                        onChange={handleRadioChange}
                                    />
                                    <label className="form-check-label">Female</label>
                                </div>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label className="col-sm-3 col-form-label">Skills:</label>
                            <div className="col-sm-9">
                                <label className="mr-2">
                                    <input
                                        type="checkbox"
                                        name="Java"
                                        checked={formData.skills.includes('Java')}
                                        onChange={handleCheckboxChange}
                                        style={{ marginRight: '10px' }}
                                        
                                    />
                                    Java
                                </label>
                                <label style={{ marginLeft: '40px' }}>
                                    <input
                                        type="checkbox"
                                        name="HTML"
                                        checked={formData.skills.includes('HTML')}
                                        onChange={handleCheckboxChange}
                                        style={{ marginRight: '10px' }}
                                    />
                                    HTML
                                </label>
                                <label style={{ marginLeft: '40px' }}>
                                    <input
                                        type="checkbox"
                                        name="CSS"
                                        checked={formData.skills.includes('CSS')}
                                        onChange={handleCheckboxChange}
                                        style={{ marginRight: '10px' }}
                                    />
                                    CSS
                                </label>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary" onClick={handleSubmit}style={{ marginLeft: '40px' }}>
                            Enroll Student
                        </button>
                        <button type="submit" className="btn btn-danger" onClick={handleClear}style={{ marginLeft: '40px' }}>
                            Clear
                        </button>
                    </form>
                </div>

                {/* Vertical line */}
                <div className="col-md-1 vertical-line bg-info " style={{ width: '0.5px', height: '100vh' }}></div>

                {/* Right side (Submitted Data) */}
                <div className="col-md-5">
                    {submittedDataList.length > 0 && (
                        <div>
                            <h3>Enrolled Students</h3>
                            <table className="table table-bordered">
                                <tbody>
                                    <tr>
                                        <th>Description</th>
                                        <th>Image</th>
                                    </tr>
                                    {submittedDataList.map((submittedData, index) => (
                                        <tr key={index}>
                                            <td>
                                                <strong>Name:</strong> {submittedData.name} <br />
                                                <strong>Email:</strong> {submittedData.email} <br />
                                                <strong>Website:</strong> {submittedData.website} <br />
                                                <strong>Gender:</strong> {submittedData.gender} <br />
                                                <strong>Skills:</strong> {submittedData.skills.join(', ')} <br />
                                            </td>

                                            <td>
                                                <img
                                                    src={submittedData.imageLink || 'https://via.placeholder.com/100x100'}
                                                    alt={submittedData.name}
                                                    style={{ width: '100px', height: '100px' }}
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default FormExample;
