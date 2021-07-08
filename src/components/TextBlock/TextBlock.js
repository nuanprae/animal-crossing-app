import classNamesHelper from 'classnames';
import PropTypes from 'prop-types';

import './text-block.css';

const TextBlock = ({ className, text }) => {
  return <h4 className={classNamesHelper('text-block', className)}>{text}</h4>;
};

TextBlock.propTypes = {
  className: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default TextBlock;
