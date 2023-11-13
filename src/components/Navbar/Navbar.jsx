import React from 'react'
import styles from "./navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <img className={styles.logo} src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="logo" />
      <img className={styles.avatar} src="https://occ-0-3195-3663.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABZBe7K0DPia9LvzIkQ4yzqX9NocZlAjS1MOyEuBQD1WmFuLKZwvq0bxc4n4_EV73khqgwed0PYLNml0V8LCymt31e7x-8jQ.png?r=229" alt=" avatar" />
    </div>
  )
}

export default Navbar
