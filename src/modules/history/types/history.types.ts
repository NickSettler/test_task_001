export type HistoryItem = {
  uuid: string;
  name: string;
};

export type HistorySchema = {
  items: HistoryItem[];
};
