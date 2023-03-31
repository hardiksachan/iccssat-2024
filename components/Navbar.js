import styles from "@/styles/components/Navbar.module.scss"
import Logo from "@/components/Logo";
import Link from "next/link";

const Navbar = () => {
    const destinations = [
        {name: "Home", href: "/"},
        {name: "Committees", href: "/committee"},
    ]

    return (
        <div className={styles.Nav}>
            <Logo className={styles.Nav_logo}/>
            <ul className={styles.Nav_list}>
                {destinations.map(function (destination) {
                    return <li className={styles.Nav_item}><Link href={destination.href} className={styles.Nav_link}>{destination.name}</Link></li>
                })}
            </ul>
        </div>
    )
}

export default Navbar