import React from 'react';
import './CustomersSay.css'
function CustomersSay() {
  // Assuming customer testimonials data is passed as props
  const testimonials = [
    { id: 1, name: 'John Doe', rating: 5, comment: 'Great experience at Little Lemon!' },
    { id: 2, name: 'Jane Smith', rating: 4, comment: 'Highly recommend the desserts.' },
    // Add more testimonials as needed
  ];

  return (
    <section className="customers-say">
      <h2>What Our Customers Say</h2>
      <div className="testimonials">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial">
            <p>{testimonial.comment}</p>
            <div className="rating">{Array.from({ length: testimonial.rating }, (_, i) => <span key={i}>&#9733;</span>)}</div>
            <p>- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CustomersSay;
