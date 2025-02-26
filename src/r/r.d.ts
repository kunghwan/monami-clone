interface Requirement {
  id: string;
  status: RequirmentStatus | "";
  title: string;
  descs: string[];
  manager: RequirementManager | "";
}

type RequirmentStatus = "계획중" | "진행중" | "완료";
type RequirementManager = "강산" | "허승이" | "김영화" | "강찬희" | "유경환";
