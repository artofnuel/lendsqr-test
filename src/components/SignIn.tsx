import React from 'react'
import logo from '../assets/lendsqr.svg'
import signin from '../assets/sign-in.svg'
import styles from '../styles/SignIn.module.scss'


const SignIn = () => {
  return (
    <div className={styles.container}>
      {/* Logo */}
      <div className={styles.navbar}>
        <img src={logo} alt="" />
      </div>
      {/* Main Content */}
      <div className={styles.main}>
        <div className={styles.mainLeft}>
          <img src={signin} alt="" />
        </div>
        <div className={styles.mainRight}>
          <div className={styles.heading}>
            <h1>Welcome!</h1>
            <p>Enter details to login.</p>
          </div>
          <form className={styles.loginForm}>
            <input type="email" name="username" id="userName" placeholder='Email' />
            <div className={styles.span}>
              <input type="password" name="password" id="passWord" placeholder='Password' />
              <span>SHOW</span>
            </div>
            <a href="#">Forgot Password?</a>
            <button type="submit">Log In</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn