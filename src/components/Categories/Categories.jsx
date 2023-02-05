import { useContext } from 'react';
import { MenuContext } from '../../App';
import MenuItems from '../MenuItems';

const Categories = () => {
  const { items } = useContext(MenuContext);
  const [item] = items;
  const categories = item?.menuCategories;

  return (
    <>
      {categories?.map((item) => (
        <div key={item.catCode}>
          <div>{item.catName}</div>
          <MenuItems menu={item.menuItems} />
        </div>
      ))}
    </>
  );
};

export default Categories;
