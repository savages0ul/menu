const MenuItems = ({ menu }) => {
  const pathImg = 'https://smartapp.acs-cis.ru/assets/img/Menu/';

  return (
    <>
      {menu.map((item) => (
        <div key={item.itemCode}>
          <div>{item.itemName}</div>
          <div>{item.itemDescription}</div>
          <div>{item.itemPrice}</div>
          <div>{item.itemWeight}</div>
          <div>{item.quantity}</div>
          <img
            src={pathImg + item.url}
            alt=""
          />
        </div>
      ))}
    </>
  );
};
export default MenuItems;
