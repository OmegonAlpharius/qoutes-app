import Preloader from "@/components/Preloader/Preloader";
import QuotesList from "@/components/Quotes/QuotesList";
import Sidebar from "@/components/Sidebar/Sidebar";
import { CATEGORY } from "@/constants";
import {
  useDeleteQuoteMutation,
  useGetQuotesByCategoryQuery,
} from "@/features/quotes/quotesAPI";
import { Quote } from "@/interfaces/TypesQuote";

import { useNavigate, useParams } from "react-router-dom";

const Quotes = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const { isLoading, data: quotes = [] } =
    useGetQuotesByCategoryQuery(category);

  const [deleteQuote] = useDeleteQuoteMutation();
  const selectedCategory =
    CATEGORY.find(({ id }) => category === id)?.title || "All";

  const editHandler = (id: string) => {
    navigate(`/quotes/${id}/edit`);
  };
  const deleteHandler = (quote: Quote) => {
    deleteQuote(quote);
  };

  return (
    <>
      {isLoading && <Preloader />}
      <Sidebar>
        <div className="flex-1 ml-4">
          <QuotesList
            deleteHandler={deleteHandler}
            editHandler={editHandler}
            title={selectedCategory}
            quotes={quotes}
          />
        </div>
      </Sidebar>
    </>
  );
};

export default Quotes;
