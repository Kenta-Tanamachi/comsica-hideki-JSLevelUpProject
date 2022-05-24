'use strict';

const partnerHandItem = document.getElementById('partnerHandItem');
const result = document.getElementById('result');
const handItems = ['グー', 'チョキ', 'パー'];

function handleClickRock() {
  const getRandomHandItem = Math.floor(Math.random() * handItems.length);
  partnerHandItem.innerHTML = handItems[getRandomHandItem];

  let resultItem = '';

  if (handItems[getRandomHandItem] === 'グー') {
    resultItem = '引き分け';
  } else if (handItems[getRandomHandItem] === 'チョキ') {
    resultItem = '勝ち';
  } else if (handItems[getRandomHandItem] === 'パー') {
    resultItem = '負け';
  }

  result.innerHTML = resultItem;
}

function handleClickScissors() {
  const getRandomHandItem = Math.floor(Math.random() * handItems.length);
  partnerHandItem.innerHTML = handItems[getRandomHandItem];

  let resultItem = '';

  if (handItems[getRandomHandItem] === 'グー') {
    resultItem = '負け';
  } else if (handItems[getRandomHandItem] === 'チョキ') {
    resultItem = '引き分け';
  } else if (handItems[getRandomHandItem] === 'パー') {
    resultItem = '勝ち';
  }

  result.innerHTML = resultItem;
}

function handleClickPaper() {
  const getRandomHandItem = Math.floor(Math.random() * handItems.length);
  partnerHandItem.innerHTML = handItems[getRandomHandItem];

  let resultItem = '';

  if (handItems[getRandomHandItem] === 'グー') {
    resultItem = '勝ち';
  } else if (handItems[getRandomHandItem] === 'チョキ') {
    resultItem = '負け';
  } else if (handItems[getRandomHandItem] === 'パー') {
    resultItem = '引き分け';
  }

  result.innerHTML = resultItem;
}
