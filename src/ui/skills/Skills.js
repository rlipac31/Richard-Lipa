import React from 'react'
import Image from 'next/image'
//mis imports
import styles from './skills.module.css'
import HeadScrol from '../about/head/HeadScrol'
import llavesHtml from '../../../public/assets/skill/llaveHtml.png'
import iconMonitor from '../../../public/assets/skill/icon-monitor.png'
import iconCel from '../../../public/assets/skill/Icon-cel.png'
import iconHtml5 from '../../../public/assets/skill/html5.png'
import iconCss3 from '../../../public/assets/skill/css3-alt.png'
import iconJS from '../../../public/assets/skill/node-js.png'
import iconReact from '../../../public/assets/skill/react.png'


const Skills = () => {
  return (
    <div className={styles.skills}>
      <div className={styles.colorSkill}>
        <div className={styles.colorSkill__head}>
          <HeadScrol />
        <div className={styles.colorSkill__head__imageContainer}>
              <Image
                src={llavesHtml}
                width={130}
                height={130}
                alt={'icon-'}
              />
            </div> 

        </div>
        <div className={styles.colorSkill__services}>
          <div className={styles.colorSkill__services_web}>


            <Image
              src={iconMonitor}
              width={30}
              height={30}
              alt={'icon-Monitor'}
            />
            <h3>web develtopement</h3>
            <p>HTML · CSS · JS · REACT</p>
          </div>
          <div className={styles.colorSkill__services_web}>

            <Image
              src={iconCel}
              width={30}
              height={30}
              alt={'icon-cel'}
            />
            <h3>App developement</h3>
            <p>iOS · Android</p>
          </div>
        </div>
        <div className={styles.colorSkill__skill}>
          <div >
            <div 
              className={styles.colorSkill__skill__images}
              style={{background:'#E54F26'}}
             >
            <Image
              src={iconHtml5}
              width={58}
              height={58}
              alt={'icon-'}
            />

            </div>
            <strong
               style={{color:'#E54F26'}}
            >
            HTML
            </strong>

          </div>
          <div>
      
          <div 
              className={styles.colorSkill__skill__images}
              style={{background:'#0C73B8'}}
             >
            <Image
              src={iconCss3}
              width={58}
              height={30}
              alt={'icon-'}
            />
            </div>
            <strong
               style={{color:'#0C73B8'}}
            >CSS</strong>
          </div>
          <div>

          <div 
              className={styles.colorSkill__skill__images}
              style={{background:'#E7A020'}}
             >
            <Image
              src={iconJS}
              width={58}
              height={58}
              alt={'icon-'}
            />

            </div>
            <strong
               style={{color:'#E7A020'}}
            >JS</strong>
          </div>
          <div>

          <div 
              className={styles.colorSkill__skill__images}
              style={{background:'#28A9E0'}}
             >
            <Image
              src={iconReact}
              width={58}
              height={58}
              alt={'icon-'}
            />

            </div>
            <strong
               style={{color:'#28A9E0'}}
            >REACT</strong>
          </div>

        </div>


      </div>
    </div>
  )
}

export default Skills