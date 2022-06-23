export enum TabsKeys {
  Show_All = 'Show all',
  Design = 'Design',
  Branding = 'Branding',
  Illustration = 'Illustration',
  Motion = 'Motion',
}

export interface IItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface ITabs {
  selectedTab: TabsKeys;
  setSelectedTab: (value: TabsKeys) => void;
  tabs: {
    label: TabsKeys;
    index: number;
  }[];
}