import { NewQuote } from "@/interfaces/TypesQuote";
import QuoteForm from "../../components/QuotesForm/QuotesForm";

const EditQuote = ({
  initialQuote,
  onUpdate,
}: {
  initialQuote: NewQuote;
  onUpdate: (quote: NewQuote) => void;
}) => {
  const handleUpdate = (quote: NewQuote) => {
    onUpdate(quote);
  };

  return <QuoteForm onSubmit={handleUpdate} initialQuote={initialQuote} />;
};
export default EditQuote;
