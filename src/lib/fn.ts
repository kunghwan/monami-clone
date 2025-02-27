// const fn2 = () => console.log("hello");
// export default fn2;

import { sayLoud } from "./database";

const veryVeryImportantFn = (
  m1: string
): {
  length: number;
  firstLetter: string;
  lastLetter: string;
  sayLoud: (msg: string) => void;
} => {
  const length = m1.length;
  const firstLetter = m1[0];
  const lastLetter = m1[length - 1];

  return {
    length,
    firstLetter,
    lastLetter,
    sayLoud, // Returning the sayLoud function here
  };
};

export default veryVeryImportantFn;
