import { useEffect, useState } from "react";
import Sidebar from "../components/StudentSideBar/Sidebar";
import "./styleStudentReview.css";
import axios from "axios";
import ReviewTutorCard from "../components/TutorCards/ReviewTutorCard";

function StudentReviewPage() {
  // Get us the current user's name.
  const auth = JSON.parse(localStorage.getItem("auth"));
  const id = auth?.user?._id;
  const token = auth?.token;
  const name = auth?.user?.firstName + " " + auth?.user?.lastName;

  // Use States
  const [reviews, setReviews] = useState([]);
  const [tutors, setTutors] = useState([]); // Initialize state for tutors
  const [tutorCards, setTutorCards] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedTutor, setSelectedTutor] = useState(""); // Dropdown state
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);
  // Fetches all tutors for the dropdown menu.
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
  // Will fetch the card info that is needed for the drop down menu.
  useEffect(() => {
    const fetchCardInfo = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/v1/tutorRoute/getTutorCardInfo");
            const data = await response.json();
            if (data.success) {
                setTutorCards(data.data); // Store the array of tutors in state
            } else {
                console.error("Failed to fetch card info:", data.error);
            }
        } catch (error) {
            console.error("Error fetching card info:", error);
        }
    };

    fetchCardInfo();
}, []);
  // Will fetch the reviews that are displayed. 
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
  // Handles how the review is submitted.
  const handleSubmitReview = async (e) => {
    e.preventDefault();
    // Ensure all required fields are filled
    if (!selectedTutor || !rating || !reviewText) {
        alert("Please fill out all fields!");
        return;
    }
    try {
        // Construct the review object
        const reviewData = {
            author: name,         // Use the logged-in user's name for "author"
            tutor: selectedTutor, // Use the selected tutor
            content: reviewText,  // Map reviewText to "content"
            rating: rating,       // Use the rating value
        };

        // Make the POST request
        const response = await axios.post(
            "http://localhost:8080/api/v1/reviews",
            reviewData,
        );
        // Update the reviews state with the new review
        setReviews([...reviews, response.data.data]); // Assuming the new review is in response.data.data
        setSelectedTutor(""); // Reset selected tutor
        setReviewText("");    // Reset review text
        setRating(0);         // Reset rating
        setShowModal(false);  // Close modal
        alert("Review submitted successfully!");
    } catch (error) {
        console.error("Error submitting review:", error);
        alert("Failed to submit the review.");
    }
};
// Does the star value.
  const handleStarClick = (starValue) => {
    setRating(starValue);
};
// HTML content.
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
                <div className="review-rating">{review.tutor}⭐ {review.rating}/5</div>
                <p className="review-text">{review.content}</p>
                <div className="review-author">
                  
                  <div>
                    <p className="review-author-name">{"- " + review.author}</p>
                    
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
                      <option key={tutor._id} value={tutor.name}>
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
        <div className= "meet-our-tutors">
          <h2>Meet Our Tutors</h2>
        </div>
        <div className= "tutor-cards">
        {tutorCards
          .filter((tutor) => tutor.subjectName)
          .slice(0,9)
          .map((tutor) => (
          <ReviewTutorCard key={tutor._id} 
          tutor={tutor}
          subject={tutor.subjectName} 
          bio={tutor.bio}
          rating={tutor.rating}
          />
        ))}
        </div>
        
      </main>

    </div>
  );
}

export default StudentReviewPage;
