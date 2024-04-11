import React, { useState } from "react";
import "../styles/UserForm.css";

function UserForm() {
  const [slide, setSlide] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const nextStep = () => {
    if (slide === 1 && (!firstName || !lastName || !date || !month || !year)) {
      highlightFields();
      return;
    }
    if (slide === 2 && (!email || !phone)) {
      highlightFields();
      return;
    }
    setSlide(slide + 1);
  };

  const prevStep = () => {
    setSlide(slide - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !phone) {
      highlightFields();
      return;
    }
    console.log("Form submitted!");
  };

  const highlightFields = () => {
    const fields = document.querySelectorAll(".form-group input[required]");
    console.log(fields)
    fields.forEach((field) => {
      if (!field.value) {
        field.classList.add("error");
      } else {
        field.classList.remove("error");
      }
    });
  
    const dobSelects = document.querySelectorAll(".dob-container select");
    console.log(dobSelects)
    dobSelects.forEach((select) => {
      if (!select.value) {
        select.classList.add("error");
      } else {
        select.classList.remove("error");
      }
    });
    
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
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Your Last Name"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <label className="dob-label">Enter Your Date of Birth</label>
            <div className="form-group">
              <div className="dob-container">
                <span className="dob-text">Date of Birth</span>
                <div className="input-group">
                  <select
                    name="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  >
                    <option value="">Day</option>
                    {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    ))}
                  </select>
                  <select
                    name="month"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    required
                  >
                    <option value="">Month</option>
                    {Array.from({ length: 12 }, (_, i) => i + 1).map(
                      (month) => (
                        <option key={month} value={month}>
                          {month}
                        </option>
                      )
                    )}
                  </select>
                  <select
                    name="year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    required
                  >
                    <option value="">Year</option>
                    {Array.from(
                      { length: 100 },
                      (_, i) => new Date().getFullYear() - i
                    ).map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
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
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email Address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter Your Phone Number"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
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
