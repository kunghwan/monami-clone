import { Container, Button, texts, Form } from "./ui";

const App = () => {
  return (
    <div>
      <h1 className="text-red-500">App</h1>

      <Container.Col>
        <p>sdf</p>
        <p>sdf</p>
      </Container.Col>
      <Container.Row>
        <p>sdf</p>
        <p>sdf</p>
      </Container.Row>
      <Button.Opacity className="bg-sky-200">sdfsdf</Button.Opacity>
      <Button.Pressable>sdfdsf</Button.Pressable>
      <Button.Spring className="bg-red-300">sdfdsf</Button.Spring>
      <texts.H1 className="bg-green-200">dsf</texts.H1>
      <texts.H2 className="bg-green-900">dsf</texts.H2>
      <texts.P className="bg-green-900">dDSFS</texts.P>

      <Form.Form onSubmit={() => console.log("submit")}>dsf</Form.Form>
      <Form.Label>dsf</Form.Label>
    </div>
  );
};

export default App;
