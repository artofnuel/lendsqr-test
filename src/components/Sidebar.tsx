import React from 'react'
import styles from '../styles/Sidebar.module.scss'
import {customers, businesses, settings} from '../components/SidebarLinks'

const Sidebar = () => {
  return (
    <nav className={styles.container}>
       <a href="#">Switch Organiztion</a> 
       <a href="#">Dashboard</a>
       {/* customers  */}
       <ul>
        Customers
        {customers.map((customer, index) => (
            <li key={index}>{customer.name}</li>
        ))}
       </ul>
       {/* businesses */}
       <ul>
       businesses
        {businesses.map((business, index) => (
            <li key={index}>{business.name}</li>
        ))}
       </ul>
       {/* settings */}
       <ul>
        settings
        {settings.map((setting, index) => (
            <li key={index}>{setting.name}</li>
        ))}
       </ul>
    </nav>
  )
}

export default Sidebar