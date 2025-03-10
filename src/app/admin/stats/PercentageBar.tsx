import { useState } from "react";
import { Container } from "../../../components";
import { twMerge } from "tailwind-merge";

interface Props {
  per: number;
  answer: string;
}

const PercentageBar = ({ per, answer }: Props) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <Container.Row
      className="text-pink-400 rounded p-1 gap-x-2.5 cursor-pointer"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {answer}
      <Container.Row
        className={twMerge(
          "flex-1 border justify-end gap-x-2.5 float-end",
          per !== 0 && "justify-between"
        )}
      >
        {per.toFixed(2)}%
        {isHovering && (
          <div className="border bg-white flex items-center">
            <span
              className={twMerge(
                "block w-10 bg-pink-200 h-[50%]",
                `w-[${33.33333}%}]`
              )}
              style={{
                width: `${per}%`,
              }}
            ></span>
          </div>
        )}
      </Container.Row>
    </Container.Row>
  );
};

export default PercentageBar;
