import { useState } from 'react';

import style from './ItemsContainer.module.css';

import { TabsForDesktop } from '../Tabs/TabsForDesktop/TabsForDesktop';
import { Item } from './Item/Item';
import { IItem, TabsKeys } from 'interfaces';
import { TabsForMobile } from '../Tabs/TabsForMobile/TabsForMobile';
import { filterItemsService } from 'services/filterItemsService';


const tabs: ITabs[] = [
  {
    label: TabsKeys.Show_All,
    index: 1,
  },
  {
    label: TabsKeys.Design,
    index: 2,
  },
  {
    label: TabsKeys.Branding,
    index: 3,
  },
  {
    label: TabsKeys.Illustration,
    index: 4,
  },
  {
    label: TabsKeys.Motion,
    index: 5,
  },
];

interface IItemsContainer {
  items: IItem[];
  setSelectedItem: (value: string[]) => void;
  selectedItem: string[];
  deleteItem: () => void;
}

interface ITabs {
  label: TabsKeys,
  index: number
}


export function ItemsContainer({ items, selectedItem, setSelectedItem, deleteItem }: IItemsContainer) {

  const [selectedTab, setSelectedTab] = useState<TabsKeys>(TabsKeys.Show_All);

  return (
      <>
        <TabsForDesktop tabs={tabs} selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
        <TabsForMobile tabs={tabs} selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
        <div className={style.container}>
          {filterItemsService(selectedTab, items).map(item => <Item key={item.id} title={item.title}
                                                                    category={item.category}
                                                                    image={item.image}
                                                                    setSelectedItem={setSelectedItem}
                                                                    selectedItem={selectedItem}
                                                                    deleteItem={deleteItem}
                                                                    setSelectedTab={setSelectedTab}
              />
          )}
        </div>
      </>
  );
}