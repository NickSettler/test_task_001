export type HistoryItem = {
  uuid: string;
  name: string;
  date: Date;
};

export type HistorySchema = {
  items: HistoryItem[];
};
