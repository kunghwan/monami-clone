import { memo, useMemo, useState } from "react";

//! props-drilling으로 전달된 props-check 통해 변경 사항이 있는지 검사
const ChildComponent = ({ age }: { age: number }) => {
  const oldAge = useMemo(() => age, []);

  const [count, setCount] = useState(oldAge);

  console.log("child rendered");
  return (
    <div>
      <h1>old age was Age is {oldAge}</h1>
      <h2>ChildComponents Age is {age}</h2>
      <h2>ChildComponents Age is Now {count}</h2>
      <button onClick={() => setCount((prev) => prev * 255)}> sdf</button>
    </div>
  );
};

export default memo(ChildComponent);
// caching 메모리 어딘가에 저장
//! memery 부채가 발생
