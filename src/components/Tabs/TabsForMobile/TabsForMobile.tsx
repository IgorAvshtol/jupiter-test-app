import style from './TabsForMobile.module.css';

import { ITabs, TabsKeys } from 'interfaces';


export function TabsForMobile({ tabs, setSelectedTab, selectedTab }: ITabs) {

  const onTabClickHandler = (label: TabsKeys) => {
    setSelectedTab(label);
  };

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