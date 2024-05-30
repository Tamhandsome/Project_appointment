import React, { useState } from 'react';
import './Account.css';
import Login from './Login';

const Register = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userName, setUserName] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');
  // State để lưu trạng thái lỗi cho mỗi ô input
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
    // TODO: Xử lý tiếp tục với thông tin được nhập
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

    // Cập nhật state lỗi
    setInputErrors(errors);

    // Kiểm tra xem có lỗi không
    if (Object.keys(errors).length === 0) {
      // Nếu không có lỗi, tiếp tục xử lý
      console.log('Thông tin hợp lệ:', {
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
      console.log('Vui lòng điền đầy đủ thông tin.');
    }
  };
  const isNumeric = (value) => {
    return /^-?\d*\.?\d*$/.test(value);
  };

  // Hàm xử lý thay đổi số điện thoại
  const handlePhoneNumberChange = (e) => {
    const inputValue = e.target.value;
    // Kiểm tra xem giá trị nhập vào có phải là số hay không
    if (isNumeric(inputValue)) {
      // Nếu là số, cập nhật state
      setPhoneNumber(inputValue);
    }
  };


  const handleGoogleLogin = (response) => {
    // TODO: Xử lý đăng nhập Google
  };

  const handleFacebookLogin = (response) => {
    // TODO: Xử lý đăng nhập Facebook
  };

  return (
    <div className="containerRegister">
      <h1 className="title">Medpro</h1>
      <p className="subtitle">Vui lòng nhập thông tin để đăng ký</p>
      <input
        type="tel"
        placeholder="Số điện thoại"
        className="input"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
      />
      {inputErrors.phoneNumber && <p className="error-text">Vui lòng nhập số điện thoại!</p>}
      <input
        type="text"
        placeholder="Tên người dùng"
        className="input"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      {inputErrors.userName && <p className="error-text">Vui lòng nhập tên người dùng!</p>}
      <input
        type="text"
        placeholder="Họ và tên"
        className="input"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      {inputErrors.fullName && <p className="error-text">Vui lòng nhập họ và tên!</p>}
      <input
        type="email"
        placeholder="Email"
        className="input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {inputErrors.email && <p className="error-text">Vui lòng nhập email!</p>}
      <input
        type="password"
        placeholder="Mật khẩu"
        className="input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {inputErrors.password && <p className="error-text">Vui lòng nhập mật khẩu!</p>}
      <input
        type="text"
        placeholder="Địa chỉ"
        className="input"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      {inputErrors.address && <p className="error-text">Vui lòng nhập địa chỉ!</p>}
      <div className="row">
        <select
          className="input"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Giới tính</option>
          <option value="male">Nam</option>
          <option value="female">Nữ</option>
          <option value="other">Khác</option>
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
        Đăng ký
      </button>
      <hr className="divider" />
      <p className="subtitle">Hoặc đăng ký bằng tài khoản</p>
      <button
        className="login-buttons"
        onClick={handleGoogleLogin}
      >
        Đăng nhập với Google
      </button>
      <button
        className="facebook-button"
        onClick={handleFacebookLogin}
      >
        Đăng nhập với Facebook
      </button>
    </div>
  );
};

export default Register;
