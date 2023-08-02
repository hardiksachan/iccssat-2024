import styles from "@/styles/components/Keynote.module.scss";
import CommitteeMember from "@/components/CommitteeMember";

const Keynote = (props) => {
    return (
        <div className={styles.Keynote}>
            <h3 className={`h3 ${styles.Keynote_title}`}>{props.title}</h3>
            <div className={styles.Keynote_list} >
                {props.members.map(function (member) {
                    return <CommitteeMember member={member}/>
                })}
            </div>
        </div>
    )
}

export default Keynote