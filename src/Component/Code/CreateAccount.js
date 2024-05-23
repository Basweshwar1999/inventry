import React, { useState } from 'react';
import '../Styles/Style.css'; // Import your CSS stylesheet

function CreateAccount() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Basic form validation (optional but recommended)
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match. Please try again.');
        return;
      }else{

        window.location.href = '/login'; // Redirect using window.location.href
      }


      // Make an API request to your backend endpoint for account creation
      // const response = await axios.post('/api/create-account', formData);

      // if (response.data.success) {
      //   console.log('Account created successfully!');
      //   // Redirect to login page after successful account creation
      //   window.location.href = '/login'; // Redirect using window.location.href
      // } else {
      //   // Handle errors from the backend (e.g., display error message to user)
      //   console.error('Error creating account:', response.data.error);
      //   alert('Error creating account: ' + response.data.error);
      // }
    } catch (error) {
      console.error('Error:', error);
      alert('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <div className="create-account-container">
      {/* <h2>Create Account</h2> */}
      <form onSubmit={handleSubmit} className="create-account-form">
        <h1 style={{color:'gray',marginLeft:'20%'}}>
        Create Account
        </h1>
        <div className="form-group">
          <label for="name">Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label for="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength={8} // Example minimum password length
          />
        </div>
        <div className="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Re-enter your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="create-account-button">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default CreateAccount;
