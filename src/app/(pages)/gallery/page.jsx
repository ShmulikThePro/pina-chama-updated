import Image from 'next/image' ;
import styles from './gallery.module.css' ;
import image1 from '../../../../public/aat-picture.jpg' ;
import image2 from '../../../../public/home-page-picture.jpg' ;

export default function Gallery() {
  return (
    <div className={styles.main}>
      <Image
        width={0}
        height={0}
        src={image1}
        alt='image-1'
        unoptimized
        priority
      />

      <Image
        width={0}
        height={0}
        src={image2}
        alt='image-2'
        unoptimized
        priority
      />
    </div>
  ) ;
}