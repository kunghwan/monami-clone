import { create } from "zustand";

export interface Item {
  title: string;
  manager: Manage;
  id: string;
  descs: string[];
}

export type Manage = "강산" | "허승이" | "김영화" | "유경환" | "강찬희";

export type Status = "진행중" | "계획중" | "완료";

export type Props = {
  items: Item[];
  create: (newItem: Item) => void;
  update: (newItem: Item) => void;
  remove: (id: string) => void;

  payload: null | Item;
  setPayload: (payload: Item) => void;
};

export const use = create<Props>((set) => ({
  items: [],
  create: (newItem) =>
    set((prev) => ({ ...prev, items: [newItem, ...prev.items] })),
  update: (updateItem) =>
    set((prev) => ({
      ...prev,
      items: [
        updateItem,
        ...prev.items.map((item) =>
          updateItem.id === item.id ? updateItem : item
        ),
      ],
    })),
  remove: (deletedId) =>
    set((prev) => ({
      ...prev,
      items: prev.items.filter((item) => item.id !== deletedId),
    })),
  payload: null,
  setPayload: (payload) => set((prev) => ({ ...prev, payload })),
}));
