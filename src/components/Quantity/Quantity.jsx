import styles from './Quantity.module.scss';
import useMediaQuery from '../../hooks';
import clsx from 'clsx';
import { useState } from 'react';

const Quantity = ({ quantity }) => {
  const [count, setCount] = useState(quantity);
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const isTablet = useMediaQuery('(max-width: 768px)');

  const handleChangeLess = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleChangeGreater = () => {
    setCount(count + 1);
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={clsx(styles.round, {
          [styles.roundSmall]: isTablet,
        })}
        onClick={handleChangeLess}
      >
        <svg
          width={isDesktop ? '30' : '24'}
          height={isDesktop ? '30' : '24'}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.5 12C4.5 11.7239 4.72386 11.5 5 11.5H19C19.2761 11.5 19.5 11.7239 19.5 12C19.5 12.2761 19.2761 12.5 19 12.5H5C4.72386 12.5 4.5 12.2761 4.5 12Z"
            fill="darksalmon"
          />
        </svg>
      </div>
      <div className={styles.quantity}>{count}</div>
      <div
        className={clsx(styles.round, {
          [styles.roundSmall]: isTablet,
        })}
        onClick={handleChangeGreater}
      >
        <svg
          width={isDesktop ? '30' : '24'}
          height={isDesktop ? '30' : '24'}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 4.5C12.2761 4.5 12.5 4.72386 12.5 5V19C12.5 19.2761 12.2761 19.5 12 19.5C11.7239 19.5 11.5 19.2761 11.5 19V5C11.5 4.72386 11.7239 4.5 12 4.5Z"
            fill="darksalmon"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.5 12C4.5 11.7239 4.72386 11.5 5 11.5H19C19.2761 11.5 19.5 11.7239 19.5 12C19.5 12.2761 19.2761 12.5 19 12.5H5C4.72386 12.5 4.5 12.2761 4.5 12Z"
            fill="darksalmon"
          />
        </svg>
      </div>
    </div>
  );
};

export default Quantity;
