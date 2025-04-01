interface RatingProps {
    rating: number;
    total?: number;
}

const Rating = (props: RatingProps) => {
    const { rating, total } = props;

    return (
        <div className="flex items-center gap-1 text-xs">
            <svg
                className="h-3 w-3 fill-[#003354]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
            >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <span className="font-normal text-[#003354]">{rating}</span>
            {total && <span className="font-normal text-[#66666A]">({total})</span>}
        </div>
    );
};

export default Rating;
