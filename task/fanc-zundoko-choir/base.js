'use strict';

const complete = 'ズン,ズン,ズン,ズン,ドコ';
const response = 'キ・ヨ・シ！';

let flag = true;
let jointArray = '';
let array = [];

const random = () => {
  while (flag) {
    for (let i = 0; i < 5; i++) {
      const items = ['ズン', 'ドコ'];
      const getRandom = Math.floor(Math.random() * items.length);
      const randomItem = items[getRandom];
      array.push(randomItem);
    }

    jointArray = array.join(',');

    if (jointArray === complete) {
      console.log(jointArray);
      console.log(response);
      flag = false;
    } else {
      console.log(jointArray);
    }

    array = [];
    jointArray = '';
  }
};

random();
