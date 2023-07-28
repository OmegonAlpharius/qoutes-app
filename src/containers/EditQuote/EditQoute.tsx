import { NewQuote } from "@/interfaces/TypesQuote";
import QuoteForm from "../../components/QuotesForm/QuotesForm";
import {
  useGetQuoteByIdQuery,
  useUpdateQuoteMutation,
} from "@/features/quotes/quotesAPI";
import { useNavigate, useParams } from "react-router-dom";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import Preloader from "@/components/Preloader/Preloader";

const EditQuote = () => {
  const { id } = useParams() as { id: string };
  const navigate = useNavigate();

  const { isLoading, data } = useGetQuoteByIdQuery(id ?? skipToken);

  const [updateQuote, { isLoading: isUpdateFetching }] =
    useUpdateQuoteMutation();

  const handleUpdate = async (quote: NewQuote) => {
    await updateQuote({ id, ...quote });
    navigate("/");
  };

  return (
    <>
      {isLoading || (isUpdateFetching && <Preloader />)}
      <QuoteForm onSubmit={handleUpdate} initialQuote={data} />
    </>
  );
};
export default EditQuote;
