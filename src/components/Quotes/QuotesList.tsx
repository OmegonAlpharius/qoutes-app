import Card from "@/components/Card/Card";
import { Quote } from "@/interfaces/TypesQuote";

const QuotesList = ({
  title,
  quotes,
  editHandler,
  deleteHandler,
}: {
  title: string;
  quotes: Quote[];
  editHandler: (id: string) => void;
  deleteHandler: (id: string) => void;
}) => {
  const renderedQuotes = quotes?.map((quote) => (
    <Card
      key={quote.id}
      title={quote.author}
      content={quote.text}
      onEdit={() => {
        editHandler(quote.id);
      }}
      onDelete={() => {
        deleteHandler(quote.id);
      }}
    />
  ));
  return (
    <>
      <h1 className="text-3xl font-bold">{title}</h1>

      {renderedQuotes}
    </>
  );
};

export default QuotesList;
