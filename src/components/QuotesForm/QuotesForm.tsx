import { ChangeEvent, FormEventHandler, useState } from "react";
import SelectCategory from "@/components/SelectCategory/SelectCategory";
import { NewQuote } from "@/interfaces/TypesQuote";

const QuoteForm = ({
  onSubmit,
  initialQuote,
}: {
  onSubmit: (quote: NewQuote) => void;
  initialQuote?: NewQuote;
}) => {
  const [quote, setQuote] = useState<NewQuote>(
    initialQuote || {
      author: "",
      category: "",
      text: "",
    }
  );

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    onSubmit(quote);
    setQuote({ author: "", category: "", text: "" });
  };

  const onChangeHandler = (
    e: ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setQuote({ ...quote, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="mb-4 form-control">
        <label className="block  text-sm font-bold mb-2" htmlFor="author">
          Author
        </label>
        <input
          name="author"
          className="input w-full input-bordered"
          type="text"
          id="author"
          value={quote.author}
          onChange={onChangeHandler}
        />
        <label className="label">
          <span className="label-text text-error font-bold"></span>
        </label>
      </div>
      <div className="mb-4">
        <SelectCategory handleSelectChange={onChangeHandler} />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="text">
          Text
        </label>
        <textarea
          name="text"
          className="textarea input-bordered w-full"
          id="text"
          value={quote.text}
          onChange={onChangeHandler}
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default QuoteForm;
