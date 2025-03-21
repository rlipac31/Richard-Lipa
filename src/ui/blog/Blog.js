import React from 'react'
import Image from 'next/image'
import styles from './blog.module.css'
import HeadScrol from '../head/HeadScrol'
import Link from 'next/link'

import laptop2 from '../../../public/assets/laptop-blog.png'

const Blog = () => {
  return (
    <div className={styles.blog}>
          <HeadScrol 
            title={'Blog'}
            message={'My thoughts on technology and business, welcome to subscribe'}
          />
          <div className={styles.blog__content}>

            <div className={styles.blog__content__img}>
              <Image
                src={laptop2}
                width={170}
                height={180}
                alt='lapto2'
               />
            </div>
            <div className={styles.blog__content__detalle}>
              <h3>What does it take to become a web developer?</h3>
              <p>Web development, also known as website development, encompasses a variety of tasks and processes involved in creating websites for the internet…</p>
                <Link href={'#'}>
                   <strong>Read More {'>>'}</strong> 
               </Link>
              <div className={styles.blog__content__detalle__info}>
                  <button>Web developer</button>
                  <p><strong>text</strong>Richard</p>
                  <p><strong>Date</strong>10.Oct 2023</p>
                  <p><strong>Read</strong>1 Min</p>
              </div>
            </div>
          </div>

    </div>
  )
}

export default Blog