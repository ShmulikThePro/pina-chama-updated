'use client'

import Link from 'next/link' ;
import { usePathname } from 'next/navigation' ;
import Image from 'next/image' ;
import { useState, useEffect } from 'react' ;
import { List } from 'react-bootstrap-icons' ;
import Navbar from '@/components/navbar/Navbar' ;
import logo from '../../../public/logo.png' ;
import styles from './header.module.css' ;

export default function Header() {
  const [windowWidth, setWindowWidth] = useState(0) ;
  const [menuClicked, setMenuClicked] = useState(false) ;
  const pathname = usePathname() ;

  if (typeof window !== 'undefined') {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth) ;
    }) ;
  }

  useEffect(() => {
    setWindowWidth(window.innerWidth)
  }, []) ;

  return (
    <header className={styles.header}>
      {
        windowWidth > 871 
        ?
        <>
          <Link
            href='/'
            className={pathname === '/' ? styles.activeLink : null}
          >דף הבית</Link>
          
          <Link
            href='/about-aat'
            className={pathname === '/about-aat' ? styles.activeLink : null}
          >טיפל באמצעות בעלי חיים</Link>

          <Link
            href='/gallery'
            className={pathname === '/gallery' ? styles.activeLink : null}
          >הגלריה</Link>

          <Link
            href='/contact-us'
            className={pathname === '/contact-us' ? styles.activeLink : null}
          >צרו קשר</Link>
        </>
        :
        menuClicked 
        ?
        <Navbar
          closeWindow={() => setMenuClicked(prevMenuClicked => !prevMenuClicked)}
        />
        :
        <List
          size={60}
          onClick={() => setMenuClicked(prevMenuClicked => !prevMenuClicked)}
        />
      }

      <Image
        width={150}
        height={100}
        src={logo}
        alt='logo-image'
        unoptimized
        priority
      />
    </header>
  ) ;
}