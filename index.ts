const n = null;
console.log(n);

const array = ["a", "b", "c", "d"];
console.log(array);

// []
const array2: number[] = [1, 2, 3, 4];

const array3: Array<number> = [1, 2, 3, 4];
// 제네릭 어떠한 키워드에 타입을 전달해주는거 useState로 시작하는 모든 훅들을 타입 정의할때 제네릭
// useState<string>

const array4: string[] = [...array];

const array5: Array<string> = [...array];

const array6: boolean[] = [true, false, true, false];

const array7: Array<boolean> = [...array6];

// a1-a6 각각 문자열 배열 2개, 숫자배열 2개, 불리언배열 2개 만들기

const a1: string[] = ["a", "b", "c", "d"];

const a2: Array<string> = [...a1];

const a3: number[] = [1, 2, 3, 4];

const a4: Array<number> = [...a3];

const a5: boolean[] = [true, false, true, false];

const a6: Array<boolean> = [...a5];

console.log("compiled");
