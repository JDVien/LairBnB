
import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';
import './LoginForm.css'

function LoginForm() {
  const dispatch = useDispatch();
  // const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  return (
    <>
    <div className='login_window'>Login
    <div className='login_window_top'>
       <button className='login_cancel_x_bttn' type="submit">x</button>
    </div>
    <form className='login_form' onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => (<li key={idx}>{error}</li>))}
      </ul>
      <label>
        <input
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          placeholder='Username or Email'
          required
        />
      </label>
      <label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          required
        />
      </label>
      <button className='login_bttn' type="submit">Continue</button>
    </form>
    <button
        className={`button btn-gradient login_bttn`}
        onClick={() => {
          dispatch(
            sessionActions.login({
              credential: "demo@user.io",
              password: "password",
            })
          );
        }}
      >
        Demo Login
      </button>
    </div>
    </>
  );
}

export default LoginForm;
