import styles from "@/styles/components/Navbar.module.scss"
import Logo from "@/components/Logo";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className={styles.Nav}>
            <Logo className={styles.Nav_logo} />
            <ul className={styles.Nav_list}>
                <li className={styles.Nav_item}><Link href="#" className={styles.Nav_link}>Home</Link></li>
                <li className={styles.Nav_item}><Link href="#" className={styles.Nav_link}>About</Link></li>
            </ul>
        </div>
    )
}

export default Navbar