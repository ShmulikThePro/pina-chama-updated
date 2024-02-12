'use client'

import Link from 'next/link' ;
import { usePathname } from 'next/navigation' ;
import { X } from 'react-bootstrap-icons' ;
import styles from './navbar.module.css' ;

export default function Navbar({ closeWindow }) {
  const pathname = usePathname() ;

  return (
    <nav className={styles.navbar}>
      <X 
        size={60}
        onClick={closeWindow}
      />

      <Link
        href='/'
        className={pathname === '/' ? styles.activeLink : null}
        onClick={closeWindow}
      >דף הבית</Link>

      <Link
        href='/about-aat'
        className={pathname === '/about-aat' ? styles.activeLink : null}
        onClick={closeWindow}
      >טיפל באמצעות בעלי חיים</Link>

      <Link
        href='/gallery'
        className={pathname === '/gallery' ? styles.activeLink : null}
        onClick={closeWindow}
      >הגלריה</Link>

      <Link
        href='/contact-us'
        className={pathname === '/contact-us' ? styles.activeLink : null}
        onClick={closeWindow}
      >צרו קשר</Link>
    </nav>
  ) ;
}