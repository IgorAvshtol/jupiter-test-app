import style from './Title.module.css';


export function Title() {
  return (
      <div className={style.container}>
        <div className={style.title}>Portfolio</div>
        <h2 className={style.description}>Agency provides a full service range including technical skills, design,
          business understanding.</h2>
      </div>
  );
};