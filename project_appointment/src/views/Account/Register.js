import React, { useState } from 'react';
import './Account.scss';

const Register = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userName, setUserName] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');
  const [inputErrors, setInputErrors] = useState({
    phoneNumber: false,
    userName: false,
    fullName: false,
    email: false,
    address: false,
    gender: false,
    dob: false,
    password: false
  });

  const handleContinue = () => {
    const errors = {};
    if (!phoneNumber) {
      errors.phoneNumber = true;
    }
    if (!userName) {
      errors.userName = true;
    }
    if (!fullName) {
      errors.fullName = true;
    }
    if (!email) {
      errors.email = true;
    }
    if (!address) {
      errors.address = true;
    }
    if (!gender) {
      errors.gender = true;
    }
    if (!dob) {
      errors.dob = true;
    }
    if (!password) {
      errors.password = true;
    }


    setInputErrors(errors);


    if (Object.keys(errors).length === 0) {

      console.log('Valid information:', {
        phoneNumber,
        userName,
        fullName,
        email,
        address,
        gender,
        dob,
        password
      });
    } else {
      console.log('Please complete all information.');
    }
  };
  const isNumeric = (value) => {
    return /^-?\d*\.?\d*$/.test(value);
  };


  const handlePhoneNumberChange = (e) => {
    const inputValue = e.target.value;
    if (isNumeric(inputValue)) {
      setPhoneNumber(inputValue);
    }
  };


  const handleGoogleLogin = (response) => {

  };

  const handleFacebookLogin = (response) => {

  };

  return (
    <div className="containerRegister">
      <h1 className="title">Healthcare</h1>
      <p className="subtitle">Please enter information to sign up</p>
      <input
        type="tel"
        placeholder="Phone number"
        className="input"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
      />
      {inputErrors.phoneNumber && <p className="error-text">Please enter the phone number!</p>}
      <input
        type="text"
        placeholder="User name"
        className="input"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      {inputErrors.userName && <p className="error-text">Please enter username!</p>}
      <input
        type="text"
        placeholder="Full name"
        className="input"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      {inputErrors.fullName && <p className="error-text">Please enter your first and last name!</p>}
      <input
        type="email"
        placeholder="Email"
        className="input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {inputErrors.email && <p className="error-text">Please enter email!</p>}
      <input
        type="password"
        placeholder="Password"
        className="input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {inputErrors.password && <p className="error-text">Please enter a password!</p>}
      <input
        type="text"
        placeholder="Address"
        className="input"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      {inputErrors.address && <p className="error-text">Please enter your address!</p>}
      <div className="row">
        <select
          className="input"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <input
          type="date"
          className="input"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
      </div>
      <button
        className="button"
        onClick={handleContinue}
      >
        Sign up
      </button>
      <hr className="divider" />
      <p className="subtitle">Or sign up with an account</p>
      <button
        className="login-buttons"
        onClick={handleGoogleLogin}
      >
        Login with Google
      </button>
      <button
        className="facebook-button"
        onClick={handleFacebookLogin}
      >
        Login with Facebook
      </button>
    </div>
  );
};

export default Register;
