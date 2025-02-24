import { useEffect, useState } from "react";

type Person = {
  name: string;
  age: number;
};

type Pet = {
  name: string;
  age: number;
  weight: number;
  desexed: boolean;
};

const App = () => {
  const [a, setA] = useState<string>("");
  const [b, setB] = useState<number>(0);

  const [pet1, setPet1] = useState<Pet>({
    name: "sdf",
    age: 10,
    weight: 50,
    desexed: false,
  });
  const [p1, setP1] = useState<Person>({ name: "sdf", age: 50 });

  const [pets, setPets] = useState<Pet[]>([]);
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    // 상태 업데이트
    setPets((prev) => [...prev, pet1]);
    setPeople((prev) => [...prev, p1]);
  }, [pet1, p1]);

  // pets나 people 상태가 변경될 때마다 콘솔 출력
  useEffect(() => {
    console.log("Pets Array:", pets);
    console.log("People Array:", people);
  }, [pets, people]); // pets나 people이 바뀔 때마다 실행

  return (
    <div>
      <h1>App</h1>
    </div>
  );
};

export default App;
