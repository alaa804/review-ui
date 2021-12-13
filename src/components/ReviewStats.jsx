import { useContext } from "react";
import ReviewContext from "../context/ReviewContext";

const ReviewStats = () => {
  const { review } = useContext(ReviewContext);

  // Calculate Ratings Average
  let average =
    review.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / review.length;
  //  Decimal averge
  average = average.toFixed(1);

  return (
    <div className="feedback-stats">
      <h4>{review.length} Reviews</h4>
      <h4>Average Rating {isNaN(average) ? 0 : average}</h4>
    </div>
  );
};

export default ReviewStats;
