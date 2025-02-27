// // export {} 또는 export 변수, 함수 이름 이런 식으로 내보내기 했을 떄는 {} 써서 꺼내옴

// // import { a, b, c, sayLoud } from "./lib";
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

import { useEffect, useMemo, useState } from "react";

const App = () => {
  const [myName, setMyName] = useState<string>("ykh");
  const nameMessage = useMemo<string | null>(() => {
    if (myName.length === 0) {
      return "이름을 입력해주세요.";
    }

    if (myName.length < 2) {
      return "이름이 너무 짧습니다";
    }

    if (myName.length > 10) {
      return "이름이 너무 깁니다";
    }
    return null;
  }, [myName]);

  useEffect(() => {
    console.log(nameMessage);
  }, [nameMessage]);

  return (
    <div>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          console.log(myName, initialState);
        }}
      >
        <input
          type="text"
          value={myName}
          onChange={(e) => setMyName(e.target.value)}
          placeholder="이름 입력"
        />
        <button>Check</button>
      </form>
    </div>
  );
};

export default App;
