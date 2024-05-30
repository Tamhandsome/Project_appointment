import React, { useState } from 'react';
import './Account.css';

const Login = (history) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegisterClick = () => {
        history.push('/register')
    }
    const handleLogin = () => {
        // TODO: Xử lý đăng nhập với email và mật khẩu
        console.log({
            email,
            password
        });
    };

    const handleGoogleLogin = () => {
        // TODO: Xử lý đăng nhập Google
    };

    const handleFacebookLogin = () => {
        // TODO: Xử lý đăng nhập Facebook
    };

    const handleRegister = () => {
        // TODO: Xử lý đăng ký

    };

    const handleForgotPassword = () => {
        // TODO: Xử lý quên mật khẩu
    };

    return (
        
        <div className="containerlogin">
            <h1 className="title">Medpro</h1>
            <p className="subtitle">Vui lòng đăng nhập để tiếp tục</p>
            <input
                type="email"
                placeholder="Email"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Mật khẩu"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                className="button"
                onClick={handleLogin}
            >
                Đăng nhập
            </button>
            <div className="additional-options">
                <button className="register-button" onClick={handleRegister}>
                    Đăng ký
                </button>
                <button className="forgot-password" onClick={handleForgotPassword}>
                    Quên mật khẩu
                </button>
            </div>
            <hr className="divider" />
            <p className="subtitle">Hoặc đăng nhập bằng tài khoản</p>
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

export default Login;
