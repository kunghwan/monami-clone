import { useState, useEffect } from "react";

interface Family {
  dad: string;
  families: Family[];
}

interface 조상 {
  name: string;
  items: string[];
}

const App = () => {
  const [families, setFamilies] = useState<Family[]>([
    {
      dad: "김씨네 할아버지",
      families: [
        {
          dad: "김씨네 첫째 아빠",
          families: [
            { dad: "김씨네 첫째 아들", families: [] },
            { dad: "김씨네 둘째 아들", families: [] },
            { dad: "김씨네 셋째 아들", families: [] },
          ],
        },
        {
          dad: "김씨네 둘째 아빠",
          families: [
            { dad: "김씨네 첫째 아들", families: [] },
            { dad: "김씨네 둘째 아들", families: [] },
            { dad: "김씨네 셋째 아들", families: [] },
          ],
        },
      ],
    },
    {
      dad: "박씨네 할아버지",
      families: [
        {
          dad: "박씨네 첫째 아빠",
          families: [
            { dad: "박씨네 첫째 아들", families: [] },
            { dad: "박씨네 둘째 아들", families: [] },
            { dad: "박씨네 셋째 아들", families: [] },
          ],
        },
        {
          dad: "박씨네 둘째 아빠",
          families: [
            { dad: "박씨네 첫째 아들", families: [] },
            { dad: "박씨네 둘째 아들", families: [] },
            { dad: "박씨네 셋째 아들", families: [] },
          ],
        },
      ],
    },
  ]);

  const [조상들, set조상들] = useState<조상[]>([
    { name: "김씨네", items: ["김증조", "김고조", "김조상"] },
    { name: "박씨네", items: ["박증조", "박고조", "박조상"] },
  ]);

  return (
    <ul>
      {families.map((fg, fi) => (
        <li key={fi}>
          <h1 className="text-2xl">{fg.dad}</h1>

          <ul>
            {fg.families.map((sg, si) => (
              <li key={si}>
                <h2 className="text-xl">{sg.dad}</h2>
                <ul>
                  {sg.families.map((tg, ti) => (
                    <li key={ti}>{tg.dad}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default App;
