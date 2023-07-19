export interface Quote {
  author: string;
  category: string;
  text: string;
  id: string;
}

export type NewQuote = Omit<Quote, "id">;
