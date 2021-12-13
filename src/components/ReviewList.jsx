import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import ReviewContext from "../context/ReviewContext";
import ReviewItem from "./ReviewItem";

const ReviewList = () => {
  const { review } = useContext(ReviewContext);
  if (!review || review.length === 0) {
    return <p>No Review To Show</p>;
  }
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {review.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ReviewItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

// ReviewList.propTypes = {
//   review: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       text: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired,
//     })
//   ),
// };

export default ReviewList;
