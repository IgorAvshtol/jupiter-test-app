import React, { useState } from 'react';

import style from './App.module.css';

import { Header } from './components/Header/Header';
import { Title } from './components/Title/Title';
import { ItemsContainer } from './components/Items/ItemsContainer';
import { IItem } from './interfaces';
import { itemsCollection } from './assets/itemsCollection';
import { fetchItems } from './services/itemsService';


function App() {
  const [collections, setCollections] = useState<IItem[]>(itemsCollection);
  const [selectedItem, setSelectedItem] = useState<string[]>([]);

  const onLoadMoreButtonHandler = () => {
    setCollections(prevState => [...prevState, ...fetchItems()]);
  };

  const deleteItem = () => {
    setCollections((collections.filter(collection => !selectedItem.includes(collection.title))));
  };

  return (
      <div className={style.container}>
        <div className={style.header}>
          <Header/>
          <Title/>
        </div>
        <ItemsContainer items={collections} selectedItem={selectedItem} setSelectedItem={setSelectedItem}
                        deleteItem={deleteItem}/>
        <button className={style.loadMoreButton} onClick={onLoadMoreButtonHandler}>LOAD MORE</button>
      </div>
  );
}

export default App;
