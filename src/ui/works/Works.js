import React from 'react'
import Image from 'next/image'

import styles from './works.module.css'
import HeadScrol from '../head/HeadScrol'
import Carousel from './Carrusel'


//slides


const Works = () => {
  return (
   <>
      <div className={styles.works}>

        <div className={styles.worksOpacity}>
          <HeadScrol
            title={'Works'}
            message={'I had the pleasure of working with these awesome projects'}
          />
          <div>
            <h2>working</h2>
            <div className="">
              <Carousel />
            </div>

          </div>

        </div>
      </div>  
      </>

      )
}

      export default Works