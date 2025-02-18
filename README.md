# Typescript

코드의 안정성을 더해주고 자동완성 기능을 통해 내가 전달해야 하거나 받아야하는 값들의 타입 통일 시킬 수 있음.

let => 유동 동적이라고 표현
const => 항상 같은 정적이라고 표현

javascript 동적인 프로그래밍 언어
typescript 정적인 프로그래밍 언어

## 타입 지정하는 방법

변수 오른편에 ":" 쓰고 타임 적어주면 됨
예) const a : string = 'a'

함수 인자값들 마다 타입 지정할 수 있음
예) const fn = (vl: string, v2: number) => {}

함수 return 값은 인자값이 끝나는 "()" 뒤에 ":"을 쓰고 타입 지정
예) const fn = ():string => 'Random Text'

### 타입을 변수처럼 저장해서 쓰는 방법

type/interface 선언법을 쓰면됨
type 선언법은 직렬구조임
type 타입명 = 타입지정
예) type A = string

interface 선언법은 객체처럼 여러값을 가지는 타입을 지정할 수 있음
interface 타입명 {
값:타입
값2: 타입
...
}

예) interface A {
text: string:
index: number
...
}

#### 함수에도 타입을 지정할 수 있음

return 반환하는 값이 없다면 void, 반환하는 return 값이 있다면 타입을 지정할 수 있음

type Fn1 = () => void
type Fn2 = () => 타입

에) const fn: Fn = () => {
console.log('test)
}
const fn: Fn3 = () => 'test'

# React 훅에서 타입 쓰는 법

<> 을 제네릭이라고 부름 gENERIC 타입을 전달해주는 역할

1.useState<초기값의 타입>(초기값) -예) const [text,setText]= useState<string>(') -빈문자열은 굳이 타입 지정 안해줘도됨

- 숫자 0은 굳이 타입 지정 안해줘도 알아서 숫자타입으로 인지
- true/false 지정 안해줘도 알앙서 booolean 타입으로 인지

2. useRef<null | HTML태그요소>(null)

- | 는 또는 이라는 뜻임. HTML요소 잡아서 정해주면 됨
