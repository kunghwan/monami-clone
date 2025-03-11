import papa from "papaparse";

export type ReadFileProps<T = any> = papa.ParseResult<T>;

// any T로 바꿔줌

const usePaPa = () => {
  const readFile = (file: File, extractFn: (result: ReadFileProps) => void) => {
    papa.parse(file, {
      encoding: "UTF-8",
      header: true,
      complete: extractFn,
    });
  };

  const downloadFile = (
    data: any[],
    filename: string,
    config?: papa.UnparseConfig
  ): { download: () => void } => {
    const csv = papa.unparse(data, {
      header: true,
      quotes: true,
      newline: "\r\n",
      encoding: "UTF-8",
      ...config,
    });
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });

    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${filename}.csv`;

    return {
      download: () => a.click(),
    };
  };

  return {
    readFile,
    downloadFile,
  };
};

export default usePaPa;
