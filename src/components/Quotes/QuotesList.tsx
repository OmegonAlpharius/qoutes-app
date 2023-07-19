import Card from "@/components/Card/Card";
import { Quote } from "@/interfaces/TypesQuote";

const QuotesList = ({ title, quotes }: { title: string; quotes: Quote[] }) => {
  const renderedQuotes = quotes?.map((quote) => (
    <Card key={quote.id} title={quote.author} content={quote.text} />
  ));
  return (
    <>
      <h1 className="text-3xl font-bold">{title}</h1>

      {renderedQuotes}
    </>
  );
};

export default QuotesList;
