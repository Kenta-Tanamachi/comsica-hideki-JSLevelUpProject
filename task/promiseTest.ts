import { timeLoop } from '../ts/util';

// Promiseの基本的な使い方
const promiseTest = (): void => {
  console.log('promiseTest実行');

  // 関数
  const res: any = timeLoop();
  console.log('結果');
  console.log(res);

  return;
};

// 実行
promiseTest();
