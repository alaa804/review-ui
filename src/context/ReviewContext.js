import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
  const [review, setReview] = useState([
    {
      id: "1",
      text: "This is Review Item 1  Coming from Context",
      rating: 10,
    },
    {
      id: "2",
      text: "This is Review Item 2  Coming from Context",
      rating: 9,
    },
    {
      id: "3",
      text: "This is Review Item 3 Coming from Context",
      rating: 7,
    },
  ]);

  const [reviewEdit, setReviewEdit] = useState({
    item: {},
    edit: false,
  });

  // Delete Review
  const deleteReview = (id) => {
    if (window.confirm("Are you Sure you want to Delete?")) {
      setReview(review.filter((item) => item.id !== id));
    }
  };

  // Add review
  const addReview = (item) => {
    const id = uuidv4();
    const newReview = { id, ...item };
    setReview([newReview, ...review]);
  };

  // set item to be updated
  const editReview = (item) => {
    setReviewEdit({
      item,
      edit: true,
    });
  };

  //   update a review
  const updateReview = (id, updItem) => {
    setReview(
      review.map((rev) => (rev.id === id ? { ...rev, ...updItem } : rev))
    );
  };
  return (
    <ReviewContext.Provider
      value={{
        review,
        reviewEdit,
        deleteReview,
        addReview,
        editReview,
        updateReview,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
};

export default ReviewContext;
