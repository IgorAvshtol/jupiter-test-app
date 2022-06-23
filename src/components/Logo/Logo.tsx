import style from './Logo.module.css';

import logo from 'images/Vector.png';
import logo1 from 'images/Vector2.png';


export function Logo() {
  return (
      <div className={style.container}>
        <div className={style.logoBlock}>
          <img src={logo} alt='logo' className={style.externalLogo}/>
          <img src={logo1} alt='logo1' className={style.internalLogo} />
        </div>
        <div className={style.title}>Agency</div>
      </div>
  );
};