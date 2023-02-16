import styles from './Register.module.css';

import { useEffect, useState } from 'react';
import { useAuthentication } from '../../hooks/useAuthentication';

const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confimrPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser, error: authError, loading} = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      displayName,
      email, 
      password
    }

    if(password !== confimrPassword) {
      setError("The passwords need to be the same");
      return;
    }

    const res = await createUser(user)
  }

  useEffect (() => {

    if(authError){
      setError(authError)
    }
  }, [authError])

  return (
    <div className={styles.register}>
      <h1>Register to post your projects!</h1>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Fullname:</span>
          <input 
            type='text'
            name='displayName'
            required
            placeholder='Username'
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>

        <label>
          <span>E-mail:</span>
          <input 
            type='email'
            name='email'
            required
            placeholder='Type your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          <span>Password:</span>
          <input 
            type='password'
            name='password'
            required
            placeholder='Type your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        
        <label>
          <span>Password confirmation:</span>
          <input 
            type='password'
            name='passwordConfirm'
            required
            placeholder='Confirm your email'
            value={confimrPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>

        {!loading && <button className='btn'>Register</button>}
        {loading && <button className='btn' disabled>Only a moment...</button>}

        {error && <p className="error">{error}</p>}
      </form>
    </div>
  )
}

export default Register;