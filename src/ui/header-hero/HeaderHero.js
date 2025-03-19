import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

//my component
import Header from './Header/Header'
//css
import styles from './header-hero.module.css'
//images
import photoPerfil from '../../../public/assets/hero/Profile-photo.png'
import email from '../../../public/assets/hero/Shape.png'
import ubicacion from '../../../public/assets/hero/icon-map-pin.png'
import maletin from '../../../public/assets/hero/icon-briefcase.png'
import linkImge from '../../../public/assets/hero/icon-link.png'
//naavegation bard images
import grid from '../../../public/assets/navegationBard/icon-grid.png'
import edit from '../../../public/assets/navegationBard/icon-edit.png'
import email2 from '../../../public/assets/navegationBard/icon-mail.png'
import monitor from '../../../public/assets/navegationBard/icon-monitor.png'
import user from '../../../public/assets/navegationBard/icon-user.png'
import shape from '../../../public/assets/navegationBard/Shape.png'


const HeaderHero = () => {
  return (
    <>
      <section className={styles.headerHero}>
        <Header />

        <div className={styles.headerHero__hero}>
          <h1>Developer</h1>
          <div>
            <div className={styles.headerHero__navegationBar}>
              <div>
                <Link href={'/'}>
                <Image
                  src={grid}
                  width={20}
                  height={20}
                  alt={'grid-icon'}
                />
                </Link>
            
              </div>
              <Link href={'/'}>
              <Image
                src={user}
                width={20}
                height={20}
                alt={'user-icon'}
              />

              </Link>
              <Link href={'/'}>
              <Image
                src={shape}
                width={20}
                height={20}
                alt={'shape-icon'}
              />
              </Link>
               <Link href={'/'}>
              <Image
                src={monitor}
                width={20}
                height={20}
                alt={'monitor-icon'}
              />
            </Link>
            <Link href={'/'}>
              <Image
                src={edit}
                width={20}
                height={20}
                alt={'edit-icon'}
              />
              </Link>
              <Link href={'/'}>
              <Image
                src={email2}
                width={20}
                height={20}
                alt={'email2-icon'}
              />
              </Link>

            </div>
            <div className={styles.headerHero__hero__container}>

              <div className={styles.headerHero__hero__container__cardContainer}>

                <div className={styles.HeaderHero__hero__cardFake}>

                </div>
                <div className={styles.hero__container__card}>
                  <div className={styles.card__perfil}>
                    <Image
                      src={photoPerfil}
                      width={90}
                      height={90}
                      alt={'photo perfil'}
                    />
                    <h3>Richard</h3>
                    <p>Full-stack developer</p>
                  </div>
                  <div className={styles.hero__container__info}>
                    <div className={styles.hero__container__list}>
                      <Image
                        src={email}
                        width={13}
                        height={13}
                        alt={'email'}
                      />
                      <p>abdurrahman_sinan@hotmail.com</p>
                    </div>
                    <div className={styles.hero__container__list}>
                      <Image
                        src={ubicacion}
                        width={13}
                        height={13}
                        alt={'icon-ubicacion'}
                      />
                      <p>Turkey</p>
                    </div>
                    <div className={styles.hero__container__list}>
                      <Image
                        src={maletin}
                        width={13}
                        height={13}
                        alt={'icon-maletin'}
                      />
                      <p>Full-time / Freelancer</p>
                    </div>
                    <div className={styles.hero__container__list}>
                      <Image
                        src={linkImge}
                        width={13}
                        height={13}
                        alt={'icon-lin'}
                      />
                      <Link href={'#'}><p>www.sinantokmak.co</p></Link>
                    </div>
                    <div className={styles.hero__container__info__skill}>

                      <strong>CSS</strong>
                      <strong>NODE.JS</strong>
                      <strong>REACT</strong>
                      <strong>MondoDB</strong>

                    </div>
                  </div>

                  <div className={styles.hero__container__info__boton}>
                    <button>Download CV
                      <FontAwesomeIcon icon={faDownload} />
                    </button>

                  </div>



                </div>
              </div>

              <div className={styles.hero__container__description}>
                <div className={styles.description__saludo}>
                  <strong>{'<h1>'}</strong>
                  <p>Hey</p>
                  <p>I'm Richard Lipa</p>
                  <p>Full-Stack Developer
                    <strong>{'</h1>'}</strong>
                  </p>

                </div>
                <div className={styles.description__presentacion}>
                  <strong>{'<p>'}</strong>
                  <p>I help business grow by crafting amazing web experiences. If you’re looking for a developer that likes to get stuff done,</p>
                  <strong>{'</p>'}</strong>
                  <div className={styles.description__talk}>
                    <p>Let's talk</p>
                    <div className={styles.description__talk__circle}>
                      <Image
                        src={email}
                        width={20}
                        height={19}
                        alt={'email'}
                      />
                    </div>

                  </div>
                </div>
                <div></div>
              </div>
              <div className={styles.hero__container__resume_skill}>

                <div>
                  <strong>4</strong>
                  <p>Programing laguage</p>
                </div>
                <div>
                  <strong>6</strong>
                  <p>Programing laguage</p>
                </div>
                <div>
                  <strong>8</strong>
                  <p>Programing laguage</p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>


    </>


  )
}

export default HeaderHero