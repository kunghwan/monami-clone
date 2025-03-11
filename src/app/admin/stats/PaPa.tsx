import { useState, ChangeEvent } from "react";
import usePaPa, { ReadFileProps } from "../../../lib/papa";
import { Button } from "../../../components";

const PaPa = ({ data }: { data: SurveyCsv[] }) => {
  const [file, setFile] = useState<File | null>(null);

  const { downloadFile, readFile } = usePaPa();

  const onPaPa = () => {
    console.log(data);
    downloadFile(data, "설문지").download();
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const uploadedFile = e.target.files[0];
      setFile(uploadedFile);
      readFile(
        uploadedFile,
        (
          results: ReadFileProps<{ 이름: string; 나이: string; 지역: string }>
        ) => {
          const newData = results.data.map((item) => ({
            name: item.이름,
            age: item.나이,
            city: item.지역,
          }));
          console.log(newData);
        }
      );
    }
  };

  return (
    <div>
      <h1>{file ? file.name : "파일을 업로드 하세요"}</h1>
      <div>
        <label htmlFor="file">csv파일업로드</label>
        <input type="file" id="file" onChange={onChange} />
      </div>
      <Button.Opacity onClick={onPaPa}>papa로 확인하기</Button.Opacity>
    </div>
  );
};

export default PaPa;

export interface SurveyCsv {
  질문: string;
  중복선택: "가능" | "";
  응답자아이디: string;
  답변: string[];
}
