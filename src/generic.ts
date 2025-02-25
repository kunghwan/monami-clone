type MakeArray<T> = T[];

const items: MakeArray<string> = ["a", "b"];
// 제네릭을 쓰는 순간에 타입을 지정해주고 싶어서

type MakePerson<N, A> = { name: N; age: A }[];

const p1: MakePerson<string, number> = [{ age: 12, name: "adfsd" }];
const p2: MakePerson<string, string> = [{ age: "12", name: "adfsd" }];

type MakeObj<T> = T;

const pet: MakeObj<{ name: string; age: number }> = {
  age: 12,
  name: "ads",
};
