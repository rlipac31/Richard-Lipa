import React from 'react'
import styles from './headScrol.module.css'
const HeadScrol = ({message, title}) => {
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
      <h2>{title}</h2>
      <div className={styles.about__head__vector}>
          <div></div>
          <div></div>
          <div></div>
      </div>
      <p>{message}</p>
    </div>
      )
}

export default HeadScrol