import styles from "@/styles/components/Subcommittee.module.scss";
import CommitteeMember from "@/components/CommitteeMember";

const Subcommittee = (props) => {
    return (
        <div className={styles.Subcommittee}>
            <h3 className={`h3 ${styles.Subcommittee_title}`}>{props.title}</h3>
            <div className={styles.Subcommittee_list} >
                {props.members.map(function (member) {
                    return <CommitteeMember member={member}/>
                })}
            </div>
        </div>
    )
}

export default Subcommittee