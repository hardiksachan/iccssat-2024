import styles from "@/styles/components/Logo.module.scss";

const Logo = (props) => {
    return (
        <h1 className={`${props.className}  ${styles.Logo}`}>
            IC<span className={styles.Logo___color}>C</span>SS<span className={styles.Logo___color}>A</span>T
            2<span className={styles.Logo___color}>0</span>24
        </h1>
    )
}

export default Logo