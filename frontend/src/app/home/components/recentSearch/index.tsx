import styles from "./index.module.css";
import Item from "./item";

const RecentSearch = ({recents}) => {

  const clear = () => {
    localStorage.setItem("recentSearches", JSON.stringify([]));
  }
    
  return (
    <section data-cy="recent-searched" className={styles.container}>
        {recents.map((tag, index) => {
          return <Item key={index} tag={tag}/>
        })}

        <button data-cy="clear-hints" className={styles.clearButton} onClick={clear}>
          limpar
        </button>
    </section>
  );
};

export default RecentSearch;
