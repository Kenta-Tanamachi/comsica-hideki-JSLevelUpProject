'use strict';

const createRandomItems = () => {
  const completeItem = 'ズン,ズン,ズン,ズン,ドコ';
  const responseItem = 'キ・ヨ・シ！';

  let isLoop = true;
  let loopCount = 0; // ループ離脱用のカウント

  let jointRandomItems = '';
  let randomItemArray = [];

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

    // ループ離脱処理
    if (loopCount >= 10) {
      isLoop = false;
    }

    loopCount++;
    randomItemArray = [];
    jointRandomItems = '';
  }
};

createRandomItems();
