import React from 'react'
import Image from 'next/image'
//css
import styles from './about.module.css'
//images local
import laptop from '../../../public/assets/about/laptop.png'
import HeadScrol from './head/HeadScrol'
const inicio_p = "<p>";
const fin_p ="</p>";

const About = () => {
  return (
    <div className={styles.about}>
      <HeadScrol
        message={'I had the pleasure of working with these awesome Projects'}
        title={'Richard Lipa'}
      />
      <div className={styles.about__description}>
        <article>
          <h3 className={styles.about__description__subtitle}>About Me</h3>
          <div className={styles.about__description__textos}>
            <strong>{inicio_p}</strong> 
            <strong className={styles.about__description__textos__hello}>Hello!</strong>
            <p>
              
              My name is Sinan and I specialize in web developement that utilizes <strong>HTMl</strong>, <strong>CSS</strong>, <strong>JS</strong>, and <strong>REACT</strong> etc.
            </p>
            <p>
              I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving.
             </p>
             <p>
                When I m not coding, I am <strong>writing bolgs</strong>, reading, or picking up some new hands-on art project like <strong>photography</strong>.
            </p>

            <p>
                I like to have my perspective and belief systems challenged so that I see the world through new eyes.
              </p>
               <strong>{fin_p}</strong>
          </div>
        </article>
        <div className={styles.about__description__image}>
          <Image
            src={laptop}
            width={260}
            height={390}
            alt={'laptop'}
          />
        </div>
      </div>
    </div>
  )
}

export default About