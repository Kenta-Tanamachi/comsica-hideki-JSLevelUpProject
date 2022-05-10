'use strict';

const rock = document.getElementById('rock');
const scissors = document.getElementById('scissors');
const paper = document.getElementById('paper');
const opponentsHand = document.getElementById('opponentsHand');
const result = document.getElementById('result');

const items = ['グー', 'チョキ', 'パー'];

rock.onclick = () => {
  const janKen = Math.floor(Math.random() * items.length);
  opponentsHand.innerHTML = items[janKen];

  if (items[janKen] === 'グー') {
    result.innerHTML = '引き分け';
  } else if (items[janKen] === 'チョキ') {
    result.innerHTML = '勝ち';
  } else if (items[janKen] === 'パー') {
    result.innerHTML = '負け';
  }
};

scissors.onclick = () => {
  const janKen = Math.floor(Math.random() * items.length);
  opponentsHand.innerHTML = items[janKen];

  if (items[janKen] === 'グー') {
    result.innerHTML = '負け';
  } else if (items[janKen] === 'チョキ') {
    result.innerHTML = '引き分け';
  } else if (items[janKen] === 'パー') {
    result.innerHTML = '勝ち';
  }
};

paper.onclick = () => {
  const janKen = Math.floor(Math.random() * items.length);
  opponentsHand.innerHTML = items[janKen];

  if (items[janKen] === 'グー') {
    result.innerHTML = '勝ち';
  } else if (items[janKen] === 'チョキ') {
    result.innerHTML = '負け';
  } else if (items[janKen] === 'パー') {
    result.innerHTML = '引き分け';
  }
};
