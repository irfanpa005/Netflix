import React from 'react'
import styles from "./navbar.module.css";
import Search from '../../assets/Search';
import Notification from '../../assets/Notification';
import Arrow from '../../assets/Arrow';
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigateTo = useNavigate();
  return (
    <div className={styles.navbar}>
      <img className={styles.logo} src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="logo" />
      <div className={styles.menuDivs}>
        <ul>
          <li onClick={() => {navigateTo('/')}}>Home</li>
          <li onClick={() => {navigateTo('/mymenu')}}>TV Shows</li>
          <li>Movies</li>
          <li>My List</li>
        </ul>
      </div>
      <div className={styles.rightIcons}>
        <ul>
          <li><Search></Search></li>
          <li><Notification></Notification></li>
          <li><img className={styles.avatar} src="https://occ-0-3195-3663.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABZBe7K0DPia9LvzIkQ4yzqX9NocZlAjS1MOyEuBQD1WmFuLKZwvq0bxc4n4_EV73khqgwed0PYLNml0V8LCymt31e7x-8jQ.png?r=229" alt=" avatar" /></li>
          <li><Arrow></Arrow></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
