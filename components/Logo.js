import styles from "@/styles/components/Logo.module.scss";

const Logo = (props) => {
    return (
        <h1 className={`${props.className}  ${styles.Logo}`}>
            IC<span className={styles.Logo___color}>S</span>CC<span className={styles.Logo___color}>A</span>T
            2<span className={styles.Logo___color}>0</span>24
        </h1>
    )
}   

//ICSCCAT 2024

export default Logo