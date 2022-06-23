import style from './TabsForDesktop.module.css';

import { ITabs, TabsKeys } from 'interfaces';
import { useCallback } from 'react';


export function TabsForDesktop({ tabs, selectedTab, setSelectedTab }: ITabs) {

  const onTabClickHandler = useCallback((label: TabsKeys) => {
    setSelectedTab(label);
  }, [setSelectedTab]);

  return (
      <>
        <div className={style.container}>
          <div className={style.tabsBlock}>
            {tabs.map(tab => (
                <button
                    className={style.button}
                    onClick={() => onTabClickHandler(tab.label)}
                    key={tab.label}
                >
              <span
                  className={
                    selectedTab === tab.label
                        ? style.activeTab
                        : style.noActiveTab
                  }
              >
                {tab.label}
              </span>
                </button>
            ))}
          </div>
        </div>
      </>
  );
}