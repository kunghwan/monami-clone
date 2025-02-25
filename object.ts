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

interface Basic {
  name: string;
  age: number;
}

// {안에 각각의 값의 타입을 지정}
type ID = {
  id: string;
};

//! extends 확장하다
//! extends 문법으로 다른 interface를 받아왔을 때 해당 interface안의 값과 타입이 겹치는 것은 가능하지만 타입이 다르게는 지정할 수 없음.
//! interface에서 type을 사용하려면 객체의 형태로 담은 type만 사용가능
//! 단순히 값을 지정하는 type은 쓸 수 없음.

interface Person extends Basic, ID {
  isMale: boolean;
}

interface Pet extends Basic {
  desexed: boolean;
  weight: number;
}

const dog: Pet = {
  age: 12,
  desexed: false,
  name: "",
  weight: 12,
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

//! type에 interface를 가져올 떄는 type이 객체의 형태여야만 함
interface StudentInfo {
  name: string;
  dob: string;
}

//! & type에서 '그리고' 라는 뜻
//! 여러개의 타입을 붙일때는 & 한개를 써서 연장
type Student = StudentInfo & {
  level: string;
};

const student: Student = {
  dob: "",
  level: "",
  name: "",
};

type ClassId = {
  id: 1 | 2 | 3 | 4 | 5 | 0;
};

//! string, number, null, boolean, [] 등의 직접적인 값을 주지 않고 옵션을 주고 싶을 때는 타입 부분에 직접적인 값을 입력하면 됨 여러개의 값은 | 로 구분 | 빈 문자열 또는 0 등을 추가하여 아무런 값이 없을 때가지 지정해주면됨
//! 주의사항 : 옵션을 지정해줄 떄는 string, number, 등의 직접적인 타입을 함께 주지 않는다.
interface ClassStudent extends ClassId {
  name: StudentName | "";
  moblie: string;
}

type StudentName = "김영화" | "유경환" | "강찬희" | "강산" | "허승이" | "";
//! 옵션을 따로 타입으로 지정한 뒤 이곳저곳에서 쓰면 유용함

const s1: ClassStudent = {
  name: "",
  moblie: "",
  id: 1,
};

const names: StudentName[] = ["강산", "김영화", "강찬희", "유경환", "허승이"];
