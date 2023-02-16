import styles from './Register.module.css';

import { useState, useEffect } from 'react';

const Register = () => {
  return (
    <div className={styles.register}>
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
        
        <label>
          <span>Password confirmation:</span>
          <input 
            type='password'
            name='passwordConfirm'
            required
            placeholder='Confirm your email'
          />
        </label>

        <button className='btn'>Register</button>
      </form>
    </div>
  )
}

export default Register;