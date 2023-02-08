import Categories from '../components/Categories';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <Categories />
      </div>
    </div>
  );
};

export default Home;
