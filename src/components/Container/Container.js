import PropTypes from 'prop-types';
import s from './Container.module.css';

function Container({ bgColor = '#ffffff', children }) {
  return (
    <div className={s.container} style={{ backgroundColor: bgColor }}>
      {children}
    </div>
  );
}

Container.propTypes = {
  bgColor: PropTypes.string,
};

export default Container;
