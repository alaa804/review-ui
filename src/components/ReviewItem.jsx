import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import ReviewContext from "../context/ReviewContext";
import Card from "./shared/Card";

const ReviewItem = ({ item: { id, text, rating } }) => {
  const { deleteReview, editReview } = useContext(ReviewContext);
  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button className="close">
        <FaTimes onClick={() => deleteReview(id)} color="purple" />
      </button>
      <button onClick={() => editReview({ id, text, rating })} className="edit">
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
};

export default ReviewItem;
