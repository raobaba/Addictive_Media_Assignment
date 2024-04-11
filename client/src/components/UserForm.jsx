import React, { useState } from "react";
import "../styles/UserForm.css";

function UserForm() {
  const [slide, setSlide] = useState(1);

  const nextStep = () => {
    setSlide(slide + 1);
  };

  const prevStep = () => {
    setSlide(slide - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted!");
  };

  return (
    <div className="user-form-container">
      <form onSubmit={handleSubmit}>
        {slide === 1 && (
          <div className="form-slide">
            <h2>Enter Your Personal Details</h2>
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="Your First Name"
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" name="lastName" placeholder="Your Last Name" />
            </div>
            <label className="dob-label">Enter Your Date of Birth</label>
            <div className="form-group">
              <div className="dob-container">
                <span class="dob-text">Date Of Birth</span>
                <div className="input-group">
                  <input type="text" placeholder="Date"/>
                  <input type="text" placeholder="Month"/>
                  <input type="text" placeholder="Year"/>
                </div>
              </div>
            </div>

            <button type="button" onClick={nextStep}>
              Next
            </button>
          </div>
        )}
        {slide === 2 && (
          <div className="form-slide">
            <h2>Enter Your Contact Details</h2>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" placeholder="Enter Your Email Address"/>
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input type="tel" name="phone" placeholder="Enter Your Phone Number"/>
            </div>
           <div className="btn-group">
           <button type="button" onClick={prevStep}>
              Previous
            </button>
            <button type="submit">Submit</button>
           </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default UserForm;
