import React from 'react';
import './Specials.css'
function Specials() {
  // Assuming specials data is passed as props
  const specials = [
    { id: 1, name: 'Special 1', description: 'Lorem ipsum dolor sit amet.' },
    { id: 2, name: 'Special 2', description: 'Consectetur adipiscing elit.' },
    // Add more specials as needed
  ];

  return (
    <section className="specials">
      <h2>Our Specials</h2>
      <div className="specials-list">
        {specials.map(special => (
          <div key={special.id} className="special-item">
            <h3>{special.name}</h3>
            <p>{special.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Specials;
