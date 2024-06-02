import "./tracks.css";
import { useState } from "react";
const Track = () => {
    const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      currentCourse: '',
      yearOfStudy: '',
      desiredTrack: ''
    });
  
    const handleChange = (value) => {
      const { name, choice } = value.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const handleSubmit = (value) => {
      value.preventDefault();
  
      console.log('Form submitted:', formData);
    };
  
    return (
      <div>
        <h1>MUTC Registration Form</h1>
        <form className="FOR" onSubmit={handleSubmit}>
          <label>
            Full Name:
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required className="lab"/>
          </label>
          <br /><br />
          <label>
            Email Address:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required className="lab"/>
          </label>
          <br /><br />
          <label>
            Course of Study:
            <input type="text" name="currentCourse" value={formData.currentCourse} onChange={handleChange} required className="lab"/>
          </label>
          <br /><br />
          <label>
            Year of Study:
            <input type="text" name="yearOfStudy" value={formData.yearOfStudy} onChange={handleChange} required className="lab"/>
          </label>
          <br /><br />
          <label>
            Desired Track:
            <select name="desiredTrack" value={formData.desiredTrack} onChange={handleChange} required className="lab">
              <option value="">Select a track</option>
              <option value="cyber-security">Cyber Security</option>
              <option value="ui-ux-design">UI/UX Design</option>
              <option value="web-development">Web Development</option>
              <option value="mobile-apps-development">Mobile Apps Development</option>
              <option value="cloud-engineering">Cloud Engineering</option>
              <option value="power-platform">Power Platform</option>
            </select>
          </label>
          <br /><br />
          <button type="submit" className="lab">Submit Registration</button>
        </form>
      </div>
    );
  };
export default Track;  