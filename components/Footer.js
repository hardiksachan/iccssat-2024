import styles from "@/styles/components/Footer.module.scss"
import { ImLocation, ImPhone } from "react-icons/im"

const Footer = () => {
    return (
        <>
            <footer className={styles.Footer}>
                <div className={styles.Address}>
                    <div className={styles.Address_icon}>
                        <ImLocation/>
                    </div>
                    <h3 className={styles.Address_heading}>Address</h3>
                    <div className={styles.Address_content}>
                        <p className={`${styles.Address_line} ${styles.Address_line___1}`}>National Institute of
                            Technology
                            Delhi</p>
                        <p className={`${styles.Address_line} ${styles.Address_line___2}`}>Plot No. FA7, Zone P1, GT
                            Karnal
                            Rd</p>
                        <p className={`${styles.Address_line} ${styles.Address_line___3}`}>Delhi - 110036</p>
                    </div>
                </div>

                <div className={styles.ContactUs}>
                    <div className={styles.ContactUs_icon}>
                        <ImPhone/>
                    </div>
                    <h3 className={styles.ContactUs_heading}>ContactUs</h3>
                    <ul className={`${styles.ContactUs_list} ${styles.ContactUs_list___phone}`}>
                        <li className={`${styles.ContactUs_item} ${styles.ContactUs_item___1}`}>+91 941 924 0698</li>
                        <li className={`${styles.ContactUs_item} ${styles.ContactUs_item___2}`}>+91 800 338 9258</li>
                        <li className={`${styles.ContactUs_item} ${styles.ContactUs_item___3}`}>+91 999 337 4581</li>
                    </ul>
                    <ul className={`${styles.ContactUs_list} ${styles.ContactUs_list___email}`}>
                        <li className={`${styles.ContactUs_item} ${styles.ContactUs_item___1}`}><a href="mailto:cse@nitdelhi.ac.in">cse@nitdelhi.ac.in</a></li>
                        <li className={`${styles.ContactUs_item} ${styles.ContactUs_item___2}`}><a href="mailto:karanverma@nitdelhi.ac.in">karanverma@nitdelhi.ac.in</a></li>
                    </ul>
                </div>
            </footer>
            <div className={styles.CreatedBy}>
                <p className={styles.CreatedBy_line}>Designed &amp; Developed by <a className={styles.CreatedBy_link}
                                                                                    href="https://www.github.com/sxjal">Sajal</a>, <a
                    className={styles.CreatedBy_link} href="#">Gaurish</a>,&nbsp;
                    <a className={styles.CreatedBy_link} href="#">Anjita</a>, <a
                        className={styles.CreatedBy_link} href="#">Rohit</a>, <a
                        className={styles.CreatedBy_link} href="#">Rohit</a>, <a
                        className={styles.CreatedBy_link} href="#">Rohit</a> <a
                        className={styles.CreatedBy_link} href="#">Rohit</a></p>
            </div>
        </>
    )
}

export default Footer