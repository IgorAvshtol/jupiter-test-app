import { IItem, TabsKeys } from '../interfaces';


export function filterItemsService(selectedTab: TabsKeys, items: IItem[]) {
  if (selectedTab === TabsKeys.Show_All) {
    return items;
  }
  return items.filter(item => item.category === selectedTab);
}