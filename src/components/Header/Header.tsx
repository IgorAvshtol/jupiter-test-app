import style from './Header.module.css';

import { Navs } from '../Navs/Navs';
import { Logo } from '../Logo/Logo';


export function Header() {
  return (
      <header className={style.container}>
        <div className={style.header}>
          <Logo/>
          <Navs/>
          <button className={style.contactButton}>CONTACT</button>
        </div>
      </header>
  );
};