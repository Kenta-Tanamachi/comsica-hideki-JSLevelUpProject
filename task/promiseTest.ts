import { timeLoop } from '../ts/util';

// Promiseの基本的な使い方
const promiseTest = (): void => {
  console.log('promiseTest実行');

  // 関数
  timeLoop().then((res) => console.log(res));
  console.log('結果');

  return;
};

// 実行
promiseTest();
