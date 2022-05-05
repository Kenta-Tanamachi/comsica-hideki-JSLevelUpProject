// 整数値のランダム取得
export const getRandomNumber = (): number => {
  const min: number = 1;
  const max: number = 10000;
  let num: number = 1;
  for (let i = 0; i < 10; i++) {
    num = Math.floor(Math.random() * (max + 1 - min)) + min;
  }
  return num;
};

export const timeLoop = async (): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const text: string = '終了';
      resolve(text);
    }, 3000);
  });
};
