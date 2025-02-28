//! App이 최초에 렌더링 되는 0.00001초라는 찰나의 순간을 포착해서 처리할 때

import ChildItem from "./ChildItem";
import Man from "./Man";
import 족보Provider from "./족보Provider";
import 조상추가폼 from "./조상추가폼";
import Shop from "./Shop";

const App = () => {
  const as = ["김조상", "김조상조상", "김조상조상님"];

  const families = [
    {
      name: "김아빠",
      families: [
        {
          name: "sdfsdfds",
          families: [{ name: "sdfdsf" }, { name: "sdfdsf" }],
        },
      ],
    },
  ];

  const names = {
    증조할아버지: as[0],
    고조할아버지: as[1],
    더조상: as[2],
  };
  return (
    <div>
      <Shop />
      <족보Provider>
        <조상추가폼 />
        <ul>
          {families.map((f, fi) => (
            <li key={fi}>
              <ChildItem name={f.name} />
              <ul>
                {f.families.map((s, si) => (
                  <li key={si}>
                    <ChildItem name={s.name} />

                    <ul>
                      {s.families.map((t, ti) => (
                        <li key={ti}>
                          <ChildItem name={t.name} />
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <Man />
      </족보Provider>
    </div>
  );
};

export default App;
