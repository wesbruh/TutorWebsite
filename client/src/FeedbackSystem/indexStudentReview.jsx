import { useEffect, useState } from "react";
import Sidebar from "../components/StudentSideBar/Sidebar";
import "./styleStudentReview.css";
import axios from "axios";

function StudentReviewPage() {
  // Use States
  const [reviews, setReviews] = useState([]);
  const [tutors, setTutors] = useState([]); // Initialize state for tutors
  const [showModal, setShowModal] = useState(false);
  const [selectedTutor, setSelectedTutor] = useState(""); // Dropdown state
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);

  // Dummy data for tutors
  //const tutors = ["Jane Smith", "John Doe", "Clark Kent", "Diana Prince"];
  useEffect(() => {
    const fetchTutors = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/v1/tutorRoute/getAllTutorNames");
            const data = await response.json();
            if (data.success) {
                setTutors(data.data); // Store the array of tutors in state
            } else {
                console.error("Failed to fetch tutors:", data.error);
            }
        } catch (error) {
            console.error("Error fetching tutors:", error);
        }
    };

    fetchTutors();
}, []);


  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/reviews");
        setReviews(response.data.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    if (!selectedTutor || !rating || !reviewText) {
      alert("Please fill out all fields!");
      return;
    }
    try {
      const response = await axios.post("http://localhost:8080/api/v1/reviews", {
        tutorName: selectedTutor,
        reviewText,
        rating,
      });
      setReviews([...reviews, response.data]);
      setSelectedTutor("");
      setReviewText("");
      setRating(0);
      setShowModal(false);
      alert("Review submitted successfully!");
    } catch (error) {
      console.error("Error submitting review:", error);
      alert("Failed to submit the review.");
    }
  };

  const handleStarClick = (starValue) => {
    setRating(starValue);
  };

  return (
    <div className="reviews-page">
      <Sidebar />
      <main className="main-content">
        <div className="reviews-header">
          <h1>Reviews</h1>
          <p className="reviews-subtitle">Tutor Reviews</p>
          <p className="reviews-description">
            Read inspiring reviews from students who have been guided to success
            by our dedicated tutors or leave your own review!
          </p>
        </div>

        <div className="reviews-section">
          <h2 className="section-title">Student Success Stories</h2>
          <div className="reviews-cards">
            {reviews.map((review, index) => (
              <div className="review-card" key={index}>
                <div className="review-rating">⭐ {review.rating}/5</div>
                <p className="review-text">{review.content}</p>
                <div className="review-author">
                  <div className="review-author-initials">
                    {review.tutor
                      .split(" ")
                      .map((name) => name[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="review-author-name">{review.author}</p>
                    <p className="review-author-role">Student</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="write-review-section">
          <div className="write-review-card">
            <h2>Ready to Write Your Review?</h2>
            <p>We would love your feedback!</p>
            <button
              className="write-review-button"
              onClick={() => setShowModal(true)}
            >
              Write Your Review
            </button>
          </div>
        </div>

        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <h2>Write a Review</h2>
              <form onSubmit={handleSubmitReview}>
                {/* Dropdown for tutor selection */}
                <div className="form-group">
                  <label htmlFor="tutor">Tutor Name</label>
                  <select
                    id="tutor"
                    value={selectedTutor}
                    onChange={(e) => setSelectedTutor(e.target.value)}
                    required
                  >
                    <option value="">Select a tutor</option>
                    {tutors.map((tutor) => (
                      <option key={tutor._id} value={tutor._id}>
                      {tutor.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label>Review</label>
                  <textarea
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    required
                  ></textarea>
                </div>
                <div className="form-group">
                  <label>Rating</label>
                  <div className="rating-input">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={`star ${rating >= star ? "selected" : ""}`}
                        onClick={() => handleStarClick(star)}
                      >
                        {rating >= star ? "★" : "☆"}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="form-actions">
                  <button type="button" onClick={() => setShowModal(false)}>
                    Cancel
                  </button>
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default StudentReviewPage;
