import styles from "@/styles/components/HomeGallery.module.scss";
import Image from "next/image";

import gal1 from "@/assets/home-gallery/gal-1.png"
import gal2 from "@/assets/home-gallery/gal-2.png"
import gal3 from "@/assets/home-gallery/gal-3.png"
import gal4 from "@/assets/home-gallery/gal-4.png"
import gal5 from "@/assets/home-gallery/gal-5.png"
import gal6 from "@/assets/home-gallery/gal-6.png"
import gal7 from "@/assets/home-gallery/gal-7.png"
import gal8 from "@/assets/home-gallery/gal-8.png"
import gal9 from "@/assets/home-gallery/gal-9.png"

const HomeGallery = () => {
    return (
        <div className={styles.Gallery}>
            <figure className={`${styles.Gallery_item} ${styles.Gallery_item___1}`}><Image src={gal1} alt="Gallery image 1" className={styles.Gallery_img}/></figure>
            <figure className={`${styles.Gallery_item} ${styles.Gallery_item___2}`}><Image src={gal2} alt="Gallery image 2" className={styles.Gallery_img}/></figure>
            <figure className={`${styles.Gallery_item} ${styles.Gallery_item___3}`}><Image src={gal3} alt="Gallery image 3" className={styles.Gallery_img}/></figure>
            <figure className={`${styles.Gallery_item} ${styles.Gallery_item___4}`}><Image src={gal4} alt="Gallery image 4" className={styles.Gallery_img}/></figure>
            <figure className={`${styles.Gallery_item} ${styles.Gallery_item___5}`}><Image src={gal5} alt="Gallery image 5" className={styles.Gallery_img}/></figure>
            <figure className={`${styles.Gallery_item} ${styles.Gallery_item___6}`}><Image src={gal6} alt="Gallery image 6" className={styles.Gallery_img}/></figure>
            <figure className={`${styles.Gallery_item} ${styles.Gallery_item___7}`}><Image src={gal7} alt="Gallery image 7" className={styles.Gallery_img}/></figure>
            <figure className={`${styles.Gallery_item} ${styles.Gallery_item___8}`}><Image src={gal8} alt="Gallery image 8" className={styles.Gallery_img}/></figure>
            <figure className={`${styles.Gallery_item} ${styles.Gallery_item___9}`}><Image src={gal9} alt="Gallery image 9" className={styles.Gallery_img}/></figure>
        </div>
    )
}

export default HomeGallery