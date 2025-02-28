// export {} 또는 export 변수, 함수 이름 이런 식으로 내보내기 했을 떄는 {} 써서 꺼내옴

import { useState, useMemo, useEffect, useCallback } from "react";
import ParentComponents from "./ParentComponents";

// import { a, b, c, sayLoud } from "./lib";
// //! default로 내보내기 했을 때는 import 할 때 기본적으로 그 함수 또는 변수의 이름을 가져옴
// //! 하지만 내 마음대로 변경해서 가져올 수 있음
// import fn from "./lib/fn";
// //! as 다른 이름
// import { a as A, b as B, c as C, sayLoud as Fn2, VFN } from "./lib";
// //! index.ts 파일을 통해 취합한 뒤 내보내기 하면 다른 곳에서는 무조건 {}를 사용해서 꺼내옴
// //! 객체처럼 취급

// //! 같은 파일에서 다 꺼내올 수 있음. import 영역을 줄일 수 있음.

// const App = () => {
//   const { firstLetter, lastLetter, length, sayLoud } = VFN("hellllooxx");
//   return (
//     <div>
//       <h1>
//         {firstLetter}
//         {lastLetter}
//         {length}
//       </h1>
//       <button onClick={() => Fn2("hello")}>Click Me</button>
//     </div>
//   );
// };

// export default App;

// import { useEffect, useMemo, useState } from "react";

// const App = () => {
//   const [myName, setMyName] = useState<string>("ykh");
//   const nameMessage = useMemo<string | null>(() => {
//     if (myName.length === 0) {
//       return "이름을 입력해주세요.";
//     }

//     if (myName.length < 2) {
//       return "이름이 너무 짧습니다";
//     }

//     if (myName.length > 10) {
//       return "이름이 너무 깁니다";
//     }
//     return null;
//   }, [myName]);

//   useEffect(() => {
//     console.log(nameMessage);
//   }, [nameMessage]);

//   return (
//     <div>
//       <form
//         action=""
//         onSubmit={(e) => {
//           e.preventDefault();
//           console.log(myName, initialState);
//         }}
//       >
//         <input
//           type="text"
//           value={myName}
//           onChange={(e) => setMyName(e.target.value)}
//           placeholder="이름 입력"
//         />
//         <button>Check</button>
//       </form>
//     </div>
//   );
// };

// export default App;

const App = () => {
  // const [count, setCount] = useState(1);
  // const [items] = useState(Array.from({ length: 999999 }, (_, i) => i + 1));

  const [text, setText] = useState("ykh");

  const [checkNow, setCheckNow] = useState(false);

  //! useMemo는 리액트 훅 그래서 ()를 쓰는 함수 호출법을 적용
  //! [] dependency array에 감지할 것을 넣어두지 않으면 메모리에 저장해서 바뀌지 않도록 함
  const memodText = useMemo(
    () => {
      //! useMemo 안에 조건을 걸게 되면 해당 조건에 부합할 때까지 아무런 동작 안함
      //! 조건이 부합하지 않을 때 딱 한 번만 더 동작 함
      const length = text.length;
      if (length % 10 === 0) {
        return text;
      }
      return "10의 배수 아님";
    },
    [text]
    //! 감지할것을 넣으면됨
  );

  //! useCallback도 리액트 훅 함수처럼 () 써서 호출
  //! () 안에는 () => 콜백 함수를 써야 합니다.
  const isTextMemomed = useCallback(() => {
    if (!checkNow) {
      return;
    }

    const length = memodText.length;
    if (length % 10 === 0) {
      return memodText;
    }
    return "10의 배수 아님";
  }, [checkNow, memodText]);

  //! [] deoebdebct Arrat부르고 여기에 감지할 것들을 넣어서
  //! 함수가 동작할 때 감지할 것들만 보고 있게끔 만듭니다.

  //? javascropt에서 메모리를 할당하는 것은 object,function입니다.
  const a = "a";
  const b = 5;
  const c = null;
  const d = ["a", "as"];
  const e = { name: "sdfsd" };
  const f = () => console.log("f");

  console.log(typeof a, typeof b, typeof c);
  console.log(typeof d, typeof e, typeof f);

  //? object, function 등 메모리를 할당하는 친구들은 useMemo, useCallback으로 감싸줌

  useEffect(() => {
    console.log("check", isTextMemomed());
  }, [isTextMemomed]);
  return (
    <div>
      {/* <h1>count : {count}</h1>
      <p>selected Item : {selectedItem}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Click</button> */}
      {/* <h1>input checking</h1>
      <h1>Memoed Text : {memodText}</h1>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => setCheckNow((prev) => !prev)}>
        {checkNow ? "dsfsdf" : "sdfsdf"}
      </button> */}
      <ParentComponents />
    </div>
  );
};

export default App;
