import { useState, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    sex: "",
    placeOfBirth: "",
    address: "",
    country: "",
    state: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const fetchProfileData = async () => {
    try {
      const response = await axios.get("/api/profile");
      setProfileData(response.data);
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  const handleSave = async () => {
    try {
      await axios.post("/api/profile", profileData);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile.");
    }
  };

  const handleClear = () => {
    setProfileData({
      name: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      sex: "",
      placeOfBirth: "",
      address: "",
      country: "",
      state: "",
    });
  };

  return (
    <div style={{ marginLeft: "10px" }}>
      <h2>Manage Profile</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={profileData.name}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={profileData.email}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your phone number"
            name="phone"
            value={profileData.phone}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDateOfBirth">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            type="date"
            name="dateOfBirth"
            value={profileData.dateOfBirth}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formSex">
          <Form.Label>Sex</Form.Label>
          <Form.Select name="sex" value={profileData.sex} onChange={handleInputChange}>
            <option value="">Select your sex</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPlaceOfBirth">
          <Form.Label>Place of Birth</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your place of birth"
            name="placeOfBirth"
            value={profileData.placeOfBirth}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your address"
            name="address"
            value={profileData.address}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCountry">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your country"
            name="country"
            value={profileData.country}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formState">
          <Form.Label>State/Province</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your state or province"
            name="state"
            value={profileData.state}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Row className="mb-3">
          <Button as={Col} variant="primary" type="button" onClick={handleSave}>
            Save
          </Button>
          <Button className="ms-2" as={Col} variant="secondary" type="button" onClick={handleClear}>
            Clear
          </Button>
        </Row>
      </Form>
    </div>
  );
};

export default Profile;
