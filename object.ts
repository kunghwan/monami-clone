const person: Person = {
  name: "Mario", // string
  age: 30, // number
  isMale: true, // boolean
};

const p1: Person = {
  name: "Madrio", // string
  age: 10, // number
  isMale: true, // boolean
};

// {안에 각각의 값의 타입을 지정}

type Person = {
  name: string;
  age: number;
  isMale: boolean;
};
// sdf
const dog1: Dog = {
  name: "바둑",
  desexed: false,
  weight: 40,
  age: 5,
};
const dog2: Dog = {
  name: "바둑이",
  desexed: true,
  weight: 10,
  age: 15,
};

type Dog = {
  name: string;
  desexed: boolean;
  weight: number;
  age: number;
};

//sdf

const people: Array<Person> = [person, p1];

const dogs: Dog[] = [dog1, dog2];

// type 타입명에 타입을 저장하고 변수처럼 반복적으로 쓰는 타입 선언 키워드
type S = string; //? Tip: 타입들은 대문자로 시작 2단어 이상일 때는 케멀케이스
const ab1: S = "a";
const ab2: S = "a";
const ab3: S = "a";
const ab4: S = "a";
const ab5: S = "a";

// B라는 이름으로 boolean 타입 담고 b1~5까지 불리언 타입 5개 선언하기
type B = boolean;
const b1: B = true;
const b2: B = false;
const b3: B = true;
const b4: B = false;
const b5: B = true;

// N 라는 이름으로 number 타입 담고 n1~5까지 숫자 타입 5개 선언하기

type N = number;
const n1: N = 1;
const n2: N = 2;
const n3: N = 3;
const n4: N = 4;
const n5: N = 5;
