import styles from './index.module.css';

const Comment = ({ user, text }) => {
        return ( <div className={styles.container}>
          <label className={styles.user}>{user} </label>
          <label className={styles.text}>{text} </label>
        </div> );
  };
  export default Comment;