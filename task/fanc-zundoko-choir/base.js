'use strict';

const completeItem = 'ズン,ズン,ズン,ズン,ドコ';
const responseItem = 'キ・ヨ・シ！';

let isLoop = true;
let jointRandomItems = '';
let randomItemArray = [];

const CreateRandomItems = () => {
  while (isLoop) {
    for (let i = 0; i < 5; i++) {
      const items = ['ズン', 'ドコ'];
      const getRandom = Math.floor(Math.random() * items.length);
      const randomItems = items[getRandom];
      randomItemArray.push(randomItems);
    }

    jointRandomItems = randomItemArray.join(',');

    if (jointRandomItems === completeItem) {
      console.log(jointRandomItems);
      console.log(responseItem);
      isLoop = false;
    } else {
      console.log(jointRandomItems);
    }

    randomItemArray = [];
    jointRandomItems = '';
  }
};

CreateRandomItems();
