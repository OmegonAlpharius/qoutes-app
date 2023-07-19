type ButtonClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;

const Card = ({
  onDelete,
  onEdit,
}: {
  onDelete?: ButtonClickHandler;
  onEdit?: ButtonClickHandler;
}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl mt-4">
      <div className="card-body ">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          {onDelete && (
            <button className="btn btn-square" onClick={onDelete}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
          {onEdit && (
            <button className="btn btn-primary" onClick={onEdit}>
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
