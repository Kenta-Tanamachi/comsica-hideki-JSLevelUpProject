'use strict';

const partnerHandItem = document.getElementById('partnerHandItem');
const result = document.getElementById('result');

const handItems = ['グー', 'チョキ', 'パー'];

const resultItems = {
  win: '勝ち',
  lose: '負け',
  draw: '引き分け',
};

function handleClickRock() {
  const getRandomHandItem = Math.floor(Math.random() * handItems.length);
  partnerHandItem.innerHTML = handItems[getRandomHandItem];

  if (handItems[getRandomHandItem] === 'グー') {
    result.innerHTML = resultItems.draw;
  } else if (handItems[getRandomHandItem] === 'チョキ') {
    result.innerHTML = resultItems.win;
  } else if (handItems[getRandomHandItem] === 'パー') {
    result.innerHTML = resultItems.lose;
  }
}

function handleClickScissors() {
  const getRandomHandItem = Math.floor(Math.random() * handItems.length);
  partnerHandItem.innerHTML = handItems[getRandomHandItem];

  if (handItems[getRandomHandItem] === 'グー') {
    result.innerHTML = resultItems.lose;
  } else if (handItems[getRandomHandItem] === 'チョキ') {
    result.innerHTML = resultItems.draw;
  } else if (handItems[getRandomHandItem] === 'パー') {
    result.innerHTML = resultItems.win;
  }
}

function handleClickPaper() {
  const getRandomHandItem = Math.floor(Math.random() * handItems.length);
  partnerHandItem.innerHTML = handItems[getRandomHandItem];

  if (handItems[getRandomHandItem] === 'グー') {
    result.innerHTML = resultItems.win;
  } else if (handItems[getRandomHandItem] === 'チョキ') {
    result.innerHTML = resultItems.lose;
  } else if (handItems[getRandomHandItem] === 'パー') {
    result.innerHTML = resultItems.draw;
  }
}
