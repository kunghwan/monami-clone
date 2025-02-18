// 강력한 타입 주는 법
// 변수 또는 props-drilling의 값 오른편에 :을 쓰고 타입을 줄 때 값을 지정해주면 됨
// 정해준 값 이외에는 다른 값을 쓸 수 없게 됨.

// Super App. Start App, Fun App
// 여러 타입을 지정하고 싶을 때 | 기호로 구분하여 추가

// 많은 타입을 변수처럼 담아서 저장하고 사용할 수 있음
// type interface
// type 사용법 type을쓰고 오른편에 타입의 이름을 정해주며 됨
// ts 작명법은 무조건 대문자로 시작, 캐멀케이스 따라감

export type AppTitle = "Super App" | "Start App" | "Fun App";
// 심지어 내보내기까지 가능함
type P = {
  name: string;
  age: number;
};

// 객체처럼 하나의 타입에 많은 속성/값들이 주어져 있을 때 = 을 쓰지 않고 바로 {}안에서 값과 타입을 정해줌

interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "",
  age: 3,
};

const p2: Person = {
  name: "",
  age: 6,
};

const appTitle: AppTitle = "";

// 문자열 타입 주고 5개 변수 선언하기

// const name: "유경환" = "유경환";
// const fruit: string = "사과";
// const game: string = "lol";
// const document: string = "react";
// const project: string = "monami";

// // 숫자 타입 5개
// const age: number = 20;
// const dogage: number = 10;
// const catage: number = 0;
// const ratage: number = 5;
// const birdage: number = 20;

// // 불리언 타입 5개
// const gender: boolean = false;
// const gender: boolean = true;
// const animalgender: boolean = false;
// const animalgender: boolean = true;
// const birdgender: boolean = false;

// 함수에서 타입 지정하기
// 인자값, return값을 지정할 수 있음

// ()와  => 사이에 :을 쓰고 타입을 정하면 함수의 return값의 타입을 정할 수 있음
//  ()안의 각각의 인자값에도 : 을 써서 타입을 지정할 수 있음
const fn = (n1: number, n2: number): string => {
  console.log(n1 * n2);

  return `${n1} * ${n2}`;
};

fn(12, 546);

// 함수 자체도 타입으로 만들 수 있음
//  () => return 하는 값이 있으면 타입을 적고
// return값이 없으면 void적어주면 됨

type Fn1 = () => void;
type Fn2 = () => string;

const fn1: Fn1 = () => console.log("test");
const fn2 = (): string => "random text";

interface ComponentProps {
  fn1: Fn1;
  fn2: Fn2;
}

const Component = ({ fn1, fn2 }: ComponentProps) => {
  return;
};
