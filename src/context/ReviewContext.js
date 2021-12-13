import { createContext, useState, useEffect } from "react";
const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
  const [review, setReview] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [reviewEdit, setReviewEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchReview();
  }, []);

  // Fetch Review
  const fetchReview = async () => {
    const res = await fetch(`/review?_sort=id&_order=desc`);
    const data = await res.json();
    setReview(data);
    setIsLoading(false);
  };

  // Add review
  const addReview = async (item) => {
    const response = await fetch("/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });

    const data = await response.json();

    setReview([data, ...review]);
  };

  // Delete Review
  const deleteReview = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      await fetch(`/review/${id}`, { method: "DELETE" });

      setReview(review.filter((item) => item.id !== id));
    }
  };

  // set item to be updated
  const editReview = (item) => {
    setReviewEdit({
      item,
      edit: true,
    });
  };

  //   update a review
  const updateReview = async (id, updItem) => {
    const response = await fetch(`/review/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updItem),
    });

    const data = await response.json();

    setReview(
      review.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };
  return (
    <ReviewContext.Provider
      value={{
        review,
        reviewEdit,
        isLoading,
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
