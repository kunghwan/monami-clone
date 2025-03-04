import React, { useEffect, useMemo } from "react";
import { Item } from "./store";
import { useNavigate, useParams } from "react-router-dom";

const RequirementDetail = () => {
  const { items, remove, payload } = Item.use();
  const { alert } = Alert.use();
  const params = useParams<{ id: string }>();
  const navi = useNavigate();

  const item = useMemo(() => {
    if (payload) {
      return payload;
    }
    const foundItem = items.find((i) => i.id === params.id);
    if (foundItem) {
      return foundItem;
    }
    return {
      descs: [],
    };
  });

  useEffect(() => {
    console.log(params);
  }, [params]);
  return (
    <div>
      {item.title}
      {item.title}
      {item.id}
      <button
        onClick={() => {
          navi("edit");
        }}
      >
        수정
      </button>
      <button
        onClick={() => {
          remove(item.id);
        }}
      >
        삭제
      </button>
    </div>
  );
};

export default RequirementDetail;
