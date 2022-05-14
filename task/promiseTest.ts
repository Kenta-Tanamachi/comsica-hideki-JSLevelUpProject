import { resolve } from 'path';
import { timeLoop } from '../ts/util';

// Promiseの基本的な使い方
const promiseTest = (): void => {
  console.log('promiseTest実行');

  // 関数
  const endMessage = async () => {
    const res: any = await timeLoop();
    console.log(res);
  };

  console.log('結果');
  endMessage();
};

// 実行
promiseTest();
