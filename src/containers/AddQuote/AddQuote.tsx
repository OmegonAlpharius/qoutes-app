import Preloader from "@/components/Preloader/Preloader";
import QuoteForm from "@/components/QuotesForm/QuotesForm";
import { useAddQuoteMutation } from "@/features/quotes/quotesAPI";
import { NewQuote } from "@/interfaces/TypesQuote";
import { useNavigate } from "react-router-dom";

const AddQuote = () => {
  const [addQuote, { isLoading }] = useAddQuoteMutation();
  const navigate = useNavigate();
  const handleSubmit = async (quote: NewQuote) => {
    addQuote(quote)
      .unwrap()
      .then(() => {
        navigate("/");
      })
      .catch((e: Error) => {
        console.error(e);
      });
  };

  return (
    <>
      {isLoading && <Preloader />}
      <QuoteForm onSubmit={handleSubmit} />
    </>
  );
};

export default AddQuote;
