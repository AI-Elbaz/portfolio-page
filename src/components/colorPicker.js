import PaletteIcon from '@material-ui/icons/Palette';
import { useEffect } from 'react';

const ColorPicker = () => {
  const colors = [
    "#3182ed",
    "#EA5455",
    "#ffcb23",
    "#20DB90",
    "#32CCBC",
    "#7367F0",
  ];

  useEffect(() => {
    document.querySelector('html').style.setProperty(
      '--primary', localStorage.getItem('themeColor')
    );
  }, [])

  const handleClick = (c) => {
    localStorage.setItem('themeColor', c);
    document.querySelector('html').style.setProperty('--primary', c);
  }

  return (
    <div className="color-picker">
      <span className="color icon">
        <PaletteIcon />
      </span>
      {colors.map(c => <span key={c} style={{ '--color': c }} className="color" onClick={(e) => handleClick(c)}></span>)}
    </div>
  );
}

export default ColorPicker;