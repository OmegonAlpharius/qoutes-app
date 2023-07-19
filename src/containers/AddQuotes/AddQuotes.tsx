import Preloader from "@/components/Preloader/Preloader";
import QuoteForm from "@/components/QuotesForm/QuotesForm";
import { NewQuote } from "@/interfaces/TypesQuote";

const AddQuotes = () => {
  const handleSubmit = (quote: NewQuote) => {
    console.log(quote);
  };

  return (
    <>
      <Preloader />
      <QuoteForm onSubmit={handleSubmit} />
    </>
  );
};

export default AddQuotes;
