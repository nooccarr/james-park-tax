import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import PageHeader from './PageHeader';
import useScrollToTop from '../hooks/useScrollToTop';
import '../styles/login.css';

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(false);

  useScrollToTop();

  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: 'bottom-left',
    });

  const handleSuccess = (msg) => {
    toast.success(msg, {
      position: 'bottom-left',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${import.meta.env.DEV ? 'http://localhost:4000' : ''}/login`,
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      // console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate(-1);
        }, 1500);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    }
    setInputValue({
      ...inputValue,
      email: '',
      password: '',
    });
  };

  return (
    <div className="tax-info-background animate-fadeIn">
      <div className="services-header-image">
        <PageHeader title="Login" />
      </div>
      <div className="flex justify-center pt-20 pb-40 mx-5 md:mx-0">
        <div className="form_container">
          <h2>Login Account</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="emailInput">Email</label>
              <input
                type="email"
                id="emailInput"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={handleOnChange}
                autoComplete="off"
                required
              />
            </div>
            <div>
              <label htmlFor="passwordInput">Password</label>
              <input
                type="password"
                id="passwordInput"
                name="password"
                value={password}
                placeholder="Enter your password"
                onChange={handleOnChange}
                required
              />
              <p className="text-red-500">{error}</p>
            </div>
            <button type="submit">Submit</button>
            {/* <span>
            Already have an account? <Link to={'/signup'}>Signup</Link>
          </span> */}
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Login;
