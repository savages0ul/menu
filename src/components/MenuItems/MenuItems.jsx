import styles from './MenuItems.module.scss';
import Quantity from '../Quantity';

const MenuItems = ({ menu }) => {
  const pathImg = 'https://smartapp.acs-cis.ru/assets/img/Menu/';

  return (
    <>
      {menu.map((item) => (
        <div
          key={item.itemCode}
          className={styles.root}
        >
          <img
            className={styles.img}
            src={pathImg + item.url}
            alt=""
          />
          <div className={styles.name}>{item.itemName}</div>
          <div className={styles.desc}>{item.itemDescription}</div>
          <div>{item.itemWeight} гр</div>
          <div>{item.itemPrice}₽</div>
          <Quantity quantity={item.quantity} />
        </div>
      ))}
    </>
  );
};
export default MenuItems;
