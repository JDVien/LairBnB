import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import './SignupForm.css'

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);

  // if (sessionUser) return (
  //   <Redirect to="/" />
  // );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password}))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Password and Confirm Password fields must match']);
  };

  return (
    <>
    <div className='signup_body'>
    <div className='signup_form_window'>
    <form className='signup_form_container' onSubmit={handleSubmit}>
      Signup
      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <label className='signup_item'>
        Email
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'

        />
      </label>
      <label className='signup_item'>
        Username
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Username'

        />
        </label >
        <label className='signup_item'>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'

          />
          </label>
          <label className='signup_item'>
            Confirm Password
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder='Confirm Password'

            />
            </label>
            <button className='signup_bttn' type="submit">Sign Up</button>
        </form>
        </div>
        </div>
        </>
  );
}

export default SignupFormPage;
