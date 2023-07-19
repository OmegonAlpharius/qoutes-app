import Card from "@/components/Card/Card";
import Sidebar from "@/components/Sidebar/Sidebar";
import Spinner from "@/components/Spinner/Spinner";
import { useGetQuotesByCategoryQuery } from "@/features/quotes/quotesAPI";
import { useParams } from "react-router-dom";

const Quotes = () => {
  const { category } = useParams();

  const {
    isError,
    isLoading,
    data: quotes,
  } = useGetQuotesByCategoryQuery(category);

  console.log(quotes);

  return (
    <>
      {isError && <h2>Something wrong</h2>}
      {isLoading && <Spinner />}
      <Sidebar>
        <div className="flex-1 ml-4">
          <h1 className="text-3xl font-bold">Quotes list</h1>
          {quotes?.map((quote) => (
            <Card key={quote.id} title={quote.author} content={quote.text} />
          ))}
        </div>
      </Sidebar>
    </>
  );
};

export default Quotes;
