import { Link, NavLink } from 'react-router-dom';
import styles from '@/css/Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <h3>
        <Link to="/">리액트(테이블/그래프/GIS)</Link>
      </h3>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.a_active : '')}
          >
            측정소
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.a_active : '')}
          >
            측정소별 측정정보
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.a_active : '')}
          >
            시도별 측정정보
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.a_active : '')}
          >
            측정소+시도 측정정보
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
