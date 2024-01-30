import { useState } from 'react';
import './buttonAdd.css'; // Import the CSS file with the animation styles

const ButtonAdd = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className={`fixed-action-btn horizontal click-to-toggle ${isMenuOpen ? 'spin-close' : ''}`} onClick={toggleMenu}>
    <a className="btn-floating btn-large red">
      <i className="material-icons">edit</i>
    </a>
    <ul>
      <li><a className="btn-floating red"><i className="material-icons">insert_chart</i></a></li>
      <li><a className="btn-floating yellow darken-1"><i className="material-icons">format_quote</i></a></li>
      <li><a className="btn-floating green"><i className="material-icons">publish</i></a></li>
      <li><a className="btn-floating blue"><i className="material-icons">attach_file</i></a></li>
    </ul>
  </div>
  );
};

export default ButtonAdd;
