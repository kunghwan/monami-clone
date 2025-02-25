// void

//! return 결과값 위치 (): 오른쪽=> {}
//! return 값이 없을 떄는 void 또는 안적어도 됨
const fn = (m: string): void => {
  //! 인자값들 모두다 타입을 지정해줘야 함
  //! 인자값 오른편에 : 타입 주면 됨
  console.log(m);
  // return; //
};

fn("hello");

const makeSentence = (w1: string, w2: string, w3: number): string => {
  return w1 + "" + w2 + "" + w3;
};

type MakeFn = (w1: string, w2: string, w3: number) => string;

const p: string = makeSentence("안녕하세요", "저는 사람입니다", 33);
// '안녕하세요, 저는 사람입니다. 33'

type Fn = (prop: string) => void; //! return type

type ComponentType = (props: Props) => React.ReactNode;
