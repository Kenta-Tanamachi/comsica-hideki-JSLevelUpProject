import { timeLoop } from '../ts/util';

// Promiseの基本的な使い方
const promiseTest = async (): Promise<void> => {
  console.log('promiseTest実行');

  // 関数
  const res: any = await timeLoop();
  console.log('結果');
  console.log(res);
};

// 実行
promiseTest();
