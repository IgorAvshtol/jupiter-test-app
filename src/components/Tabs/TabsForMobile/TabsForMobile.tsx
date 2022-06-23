import style from './TabsForMobile.module.css';

import { ITabs, TabsKeys } from 'interfaces';
import { useCallback } from 'react';


export function TabsForMobile({ tabs, setSelectedTab, selectedTab }: ITabs) {

  const onTabClickHandler = useCallback((label: TabsKeys) => {
    setSelectedTab(label);
  }, [setSelectedTab]);

  return (
      <div className={style.container}>
        <select value={selectedTab} className={style.tabsBlock}
                onChange={(e) => onTabClickHandler(e.currentTarget.value as TabsKeys)}>
          {
            tabs.map(tab => <option key={tab.label} value={tab.label}>{tab.label}</option>)
          }
        </select>
      </div>
  );
};