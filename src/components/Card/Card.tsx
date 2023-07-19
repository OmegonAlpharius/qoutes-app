type ButtonClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;

const Card = ({
  title,
  content,
  onDelete,
  onEdit,
}: {
  title: string;
  content: string;
  onDelete?: ButtonClickHandler;
  onEdit?: ButtonClickHandler;
}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl mt-4">
      <div className="card-body ">
        <h2 className="card-title">{title}</h2>
        <p>{content}</p>
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
