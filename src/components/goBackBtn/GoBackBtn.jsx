import { HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import css from './GoBackBtn.module.css';

const GoBackBtn = ({ to, children }) => {
  return (
    <Link to={to} className={css.link}>
      <HiArrowLeft size="24" />
      {children}
    </Link>
  );
};

export default GoBackBtn;
