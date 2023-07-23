import React, { useReducer } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonialslider.css";
import { useTranslation } from "react-i18next";

const reviews = [
  {
    id: 1,
    name: "CR7",
    rating: 4.5,
    comment: "Great service! Highly recommended.",
  },
  {
    id: 2,
    name: "Ryan doe",
    rating: 5,
    comment: "I have achieved so much thanks to this platform.",
  },
  {
    id: 3,
    name: "Paul Jordan",
    rating: 4.8,
    comment: "Excellent platform for learning new skills.",
  },
];

const initialState = {
  id: 4,
  name: "",
  rating: 0,
  comment: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };
    case "rating":
      return { ...state, rating: action.payload };
    case "comment":
      return { ...state, comment: action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

export default function TestimonialSlider() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { t } = useTranslation(); // Hook to access translations

  const addReview = () => {
    if (state.name !== "" && state.rating !== 0) {
      // Perform the action for submitting the review here
      console.log("Review submitted:", state);
      dispatch({ type: "reset" }); // Reset the state after adding the review
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="containe1">
      <h2>{t("testimonial_slider.title")}</h2>
      <div className="reviews-section">
        <h3>{t("testimonial_slider.reviews_title")}</h3>
        <Slider {...sliderSettings}>
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <h4>{review.name}</h4>
              <p>
                {t("testimonial_slider.rating")}: {review.rating}
              </p>
              <p>{review.comment}</p>
            </div>
          ))}
          
        </Slider>
      </div>
    </div>
  );
}
