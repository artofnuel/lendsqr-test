import React from 'react'
import styles from '../styles/Navbar.module.scss'
import logo from '../assets/lendsqr.svg'
import avatar from '../assets/profile.svg'
import {BsBell} from 'react-icons/bs'
import {AiOutlineSearch} from 'react-icons/ai'
import {AiFillCaretDown} from 'react-icons/ai'

const Navbar = () => {
  return (
    <>
    {/* container */}
        <nav className={styles.container}>
            {/* Logo and Search bar */}
            <div className={styles.logo}>
                <img src={logo} alt="logo" />
                <form method="get">
                    <input type="search" name="" id="" />
                    <button type="submit">
                        <AiOutlineSearch size={20} />
                    </button>
                </form>
            </div>
            {/* mobile form */}
            <form className={styles.mobileForm} method="get">
                    <input className={styles.mobileInput} type="search" name="" id="" />
                    <button className={styles.mobileButton} type="submit">
                        <AiOutlineSearch size={20} />
                    </button>
                </form>
            {/* Links and Avatar */}
            <div className={styles.links}>
                <a className={styles.docs} href="#">Docs</a>
                <a href="#"><BsBell className={styles.bell} /></a>
                <img className={styles.avatar} src={avatar} alt="avatar-image" />
                <a className={styles.profile} href="#">Adedeji<AiFillCaretDown className={styles.profileToggle} /></a>
            </div>
        </nav>
    </>
  )
}

export default Navbar