import style from './Navs.module.css';

const navs = ['About', 'Services', 'Pricing', 'Blog'];


export function Navs() {
  return (
      <div className={style.navsBlock}>
        {
          navs.map(nav => <a href='/' key={nav} className={style.nav}>{nav}</a>)
        }
      </div>
  );
};