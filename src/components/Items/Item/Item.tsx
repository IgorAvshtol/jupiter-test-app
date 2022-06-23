import React, { useState } from 'react';

import style from './Item.module.css';

import { selectItemService } from 'services/selectItemService';
import { TabsKeys } from 'interfaces';


interface IItem {
  title: string;
  category: string;
  image: string;
  setSelectedItem: (value: string[]) => void;
  selectedItem: string[];
  deleteItem: () => void;
  setSelectedTab: (value: TabsKeys) => void;
}


export function Item({ title, category, image, setSelectedItem, selectedItem, deleteItem, setSelectedTab }: IItem) {
  const [isActive, setIsActive] = useState(false);

  const onItemClickHandler = () => {
    setIsActive(!isActive);
    setSelectedItem(selectItemService(selectedItem, title));
  };

  const onPressDeleteButtonHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Delete') {
      deleteItem();
    }
  };

  const onCategoryButtonClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setSelectedTab(category as TabsKeys);
  };

  return (
      <div className={isActive ? style.activeModeContainer : style.container} onClick={onItemClickHandler}
           onKeyDown={onPressDeleteButtonHandler} tabIndex={0}>
        <img src={image} alt='cover' className={style.cover}/>
        <div className={style.description}>
          <button className={style.category} onClick={onCategoryButtonClickHandler}>{category}</button>
          <div className={style.title}>{title}</div>
        </div>
      </div>
  );
};