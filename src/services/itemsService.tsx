import { nanoid } from 'nanoid';

import sofa from 'images/sofa.png';
import keyboard from 'images/keyboard.png';
import workmedia from 'images/workmedia.png';
import dddone from 'images/dddone.png';
import abstract from 'images/abstract.png';
import handp from 'images/handp.png';
import architect from 'images/architect.png';
import calc from 'images/calcc.png';
import sport from 'images/sport.png';

import { IItem } from '../interfaces';


const ITEMS_NUMBER = 9;

export function fetchItems(itemsNumber: number = ITEMS_NUMBER): IItem[] {

  const titles = ['SOFA', 'KeyBoard', 'Work Media', 'DDDone', 'Abstract', 'HandP', 'Architect', 'CalC', 'Sport'];
  const categories = ['Design', 'Motion', 'Branding', 'Illustration'];
  const images = [sofa, keyboard, workmedia, dddone, abstract, handp, architect, calc, sport];

  const createRandomUser = () => {
    const getRandomNumber = (max: number, min: number = 0) => {
      const result = Math.round(Math.random() * max);
      return (result < min) ? min : result;
    };

    return {
      id: nanoid(),
      title: titles[getRandomNumber(titles.length - 1)] + getRandomNumber(23),
      category: categories[getRandomNumber(categories.length - 1)],
      image: images[getRandomNumber(images.length - 1)],
    };
  };

  return Array.from({ length: itemsNumber }, () => createRandomUser());
};