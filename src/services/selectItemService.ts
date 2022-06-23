export function selectItemService(selectedItems: string[], currentItem: string): string[] {
  if (selectedItems.includes(currentItem)) {
    return selectedItems.filter(item => item !== currentItem);
  }
  return [...selectedItems, currentItem];
}