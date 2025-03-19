import React from 'react'
import styles from './headScrol.module.css'
const HeadScrol = () => {
  return (
    <div className={styles.about__head}>
        <div className={styles.about__head__vectores}>
            <div className={styles.about__head__vectores__maus}>
              <div></div>
            </div>

            <div className={styles.about__head__vectores__lineas}>
              <div></div>
              <div></div>
            </div>
      
        </div>
      <h2>Title</h2>
      <div className={styles.about__head__vector}>
          <div></div>
          <div></div>
          <div></div>
      </div>
      <p>I had the pleasure of working with these awesome Projects</p>
    </div>
      )
}

export default HeadScrol