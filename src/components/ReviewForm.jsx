import { useState, useEffect } from "react";
import RatingSelect from "./RatingSelect";
import Card from "./shared/Card";
import Button from "./shared/Button";
import { useContext } from "react";
import ReviewContext from "../context/ReviewContext";

const ReviewForm = () => {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);

  const { addReview, reviewEdit, updateReview } = useContext(ReviewContext);

  useEffect(() => {
    if (reviewEdit.edit === true) {
      setBtnDisabled(false);
      setText(reviewEdit.item.text);
      setRating(reviewEdit.item.rating);
    }
  }, [reviewEdit]);

  const handleTextChange = (e) => {
    //   Real Time Validation
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Text Must Be At Least 10 characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newReview = {
        text,
        rating,
      };
      if (reviewEdit.edit === true) {
        // Update Review
        updateReview(reviewEdit.item.id, newReview);
      } else {
        // Add Review
        addReview(newReview);
      }
    }
    // clear the input text
    setText("");
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How Would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            value={text}
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
          />
          <Button isDisabled={btnDisabled} type="submit">
            Send
          </Button>
        </div>
        {message && <div className="message show">{message}</div>}
      </form>
    </Card>
  );
};

export default ReviewForm;
