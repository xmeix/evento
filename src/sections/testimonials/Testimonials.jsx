import "./Testimonials.css";
import img1 from "./../../assets/images/testimonials/avatar1.png";
import img2 from "./../../assets/images/testimonials/avatar2.png";
import img3 from "./../../assets/images/testimonials/avatar3.png";
import { NavLink } from "react-router-dom";
const Testimonials = () => {
  const testimonials = [
    {
      name: "Jake Doe",
      feedback: "Amazing experience! Highly recommend.",
      photo: img1,
    },
    {
      name: "John Smith",
      feedback: "Loved the events. Will come again!",
      photo: img3,
    },
    {
      name: "Alice Johnson",
      feedback: "Great platform, very user-friendly.",
      photo: img2,
    },
  ];

  return (
    <div className="testimonials">
      <h2 className="section-title">What Our Users Say</h2>
      <div className="testimonials-intro">
        We value our users feedback. Here are some of their experiences.
      </div>
      <div className="testimonials-carousel">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial" key={index}>
            <img
              src={testimonial.photo}
              alt={`${testimonial.name}'s photo`}
              className="testimonial-photo"
            />
            <p className="testimonial-name">{testimonial.name}</p>
            <p className="testimonial-feedback">{testimonial.feedback}</p>
          </div>
        ))}
      </div>
      <NavLink to="/" className="add-testimonial-btn btn">
        Add Your Testimonial
      </NavLink>
    </div>
  );
};

export default Testimonials;
