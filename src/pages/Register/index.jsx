import styles from './Register.module.css';

import { useState, useEffect } from 'react';

const Register = () => {
  return (
    <div>
      <h1>Register to post your projects!</h1>

      <form>
        <label>
          <span>Fullname:</span>
          <input 
            type='text'
            name='displayName'
            required
            placeholder='Username'
          />
        </label>

        <label>
          <span>E-mail:</span>
          <input 
            type='email'
            name='email'
            required
            placeholder='Type your email'
          />
        </label>

        <label>
          <span>Password:</span>
          <input 
            type='password'
            name='password'
            required
            placeholder='Type your password'
          />
        </label>
      </form>
    </div>
  )
}

export default Register;