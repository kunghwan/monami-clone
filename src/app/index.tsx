import { useEffect, useState } from "react";
import { Button, Container, Typo } from "../components";
import { dbService } from "../lib";

const Home = () => {
  return (
    <Container.Col>
      <Typo.H1>Hello</Typo.H1>

      <Button.Opacity onClick={() => onAdd("새로운 할일2")}>
        추가
      </Button.Opacity>

      <ul>
        {samples.map((sample) => (
          <li key={sample.id}>
            <Typo.Text>{sample.text}</Typo.Text>
            <Button.Opacity onClick={() => onEdit(sample.id)}>
              리액트 배우기 로 수정하기
            </Button.Opacity>
            <Button.Opacity onClick={() => onDelete(sample.id)}>
              삭제
            </Button.Opacity>
          </li>
        ))}
      </ul>
    </Container.Col>
  );

  return (
    <Container.Row className="w-full h-screen justify-center items-center">
      <Container.Col className="gap-y-5 max-w-90 p-5">
        <Typo.H1 className="text-center">
          나만의 사랑을 찾고 커플이 되어 지옥같은 현실에서 탈출하세요.
        </Typo.H1>
        <Button.Link href={"signup"} className="bg-pink-400 text-white">
          탈출하기
        </Button.Link>
      </Container.Col>
    </Container.Row>
  );
};

export default Home;
