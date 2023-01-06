import React from 'react'
import Info from '../components/Info'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import styles from '../styles/Dashboard.module.scss'

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      {/* Sidebar and Main Display */}
      <div className={styles.subContainer}>
        <Sidebar />
        <Info />
      </div>
    </div>
  )
}

export default Dashboard