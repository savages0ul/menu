import { useContext } from 'react';
import { MenuContext } from '../../App';
import MenuItems from '../MenuItems';
import styles from './Categories.module.scss';

const Categories = () => {
  const { items } = useContext(MenuContext);
  const [item] = items;
  const categories = item?.menuCategories;

  return (
    <>
      {categories?.map((item) => (
        <div
          key={item.catCode}
          className={styles.root}
        >
          <div className={styles.title}>{item.catName}</div>
          <div className={styles.wrapper}>
            <MenuItems menu={item.menuItems} />
          </div>
        </div>
      ))}
    </>
  );
};

export default Categories;
