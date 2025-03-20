import React from 'react'
import styles from './header.module.css'
import Link from 'next/link'
import Image from 'next/image'

//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'  
import { faMagnifyingGlass } from'@fortawesome/free-solid-svg-icons'
//iamgenes
import instagram from '../../../../public/assets/icon-instagram.png'
import Discord from '../../../../public/assets/discord.png'
import gitHub from '../../../../public/assets/git.png'

const Header = () => {
  return (
    <div className={styles.header}>
       <div className={styles.header__branding}>
      
          <p>{"<C/>"}</p>
          <p>SinanTokmak</p>
      </div>
      <div className={styles.header__menu}>
          <nav>
            <ul className={styles.header__menu__links}>
              <Link href={'/'}>Home</Link>
              <Link href={'/blog/blog'}>Blog</Link>
              <div className={styles.header__menu__links__div__search}>
                <input className={styles.search} type='text'  name="search" id='search' value="" placeholder='lupa'/>
                <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.search__ico} />
              </div>
              <Image
               src={instagram}
               width={20}
               height={20}
               alt={'icon-instagram'}
              />
              <Link className={styles.links__redes} href={'/#'}>Instagram</Link>
              <Image
               src={Discord}
               width={20}
               height={20}
               alt={'icon-discord'}
              />
              <Link className={styles.links__redes} href={'/#'}>Discord</Link>
              <Image
               src={gitHub}
               width={20}
               height={20}
               alt={'icon-github'}
              />
              <Link className={styles.links__redes} href={'/#'}>GitHub</Link>
            </ul>
          </nav>

      </div>

    </div>
  )
}

export default Header