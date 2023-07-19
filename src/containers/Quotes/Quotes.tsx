import Preloader from "@/components/Preloader/Preloader";
import QuotesList from "@/components/Quotes/QuotesList";
import Sidebar from "@/components/Sidebar/Sidebar";
import { CATEGORY } from "@/constants";
import { useGetQuotesByCategoryQuery } from "@/features/quotes/quotesAPI";

import { useParams } from "react-router-dom";

const Quotes = () => {
  const { category } = useParams();

  const { isLoading, data: quotes = [] } =
    useGetQuotesByCategoryQuery(category);
  const selectedCategory =
    CATEGORY.find(({ id }) => category === id)?.title || "All";
  return (
    <>
      {isLoading && <Preloader />}
      <Sidebar>
        <div className="flex-1 ml-4">
          <QuotesList title={selectedCategory} quotes={quotes} />
        </div>
      </Sidebar>
    </>
  );
};

export default Quotes;
