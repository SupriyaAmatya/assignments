import React, { Component } from 'react';

import card1 from '../../assets/images/card-1.png'
import card2 from '../../assets/images/card-2.png'
import card3 from '../../assets/images/card-3.png'

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardLists: [
        { id: 1, title: 'Pharm2Market', body: 'Pharm2Market is business intelligence for biotechs. Learn how we connect startups to the resources they need to succeed.', image: card1 },
        { id: 2, title: 'Aspen Gene', body: 'Information about a target gene, protein, and the pathways in which it participates.', image: card2 },
        { id: 3, title: 'Pipeline', body: 'App that helps pharmaceutical companies and biotech companies manage their project portfolios.', image: card3 }
      ]
    }
  }
  render() {
    const cardLists = this.state.cardLists.map(card => {
      return (
        <div className="col4-3" key={card.id}>
          <div className="card">
            <div className="card-image">
              <img src={card.image} alt="card" />
            </div>
            <div className="card-text">
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </div>
            <div className="card-link">
              <a href="/">find out more</a>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="products__section">
        <div className="container">
          <div className="center">
            <h2>Accelerate your Drug Discovery Efforts</h2>
            <p>We use our extensive experience in life sciences, drug discovery and agile software development to provide biotech, pharmaceutical and cancer research organizations with solutions to their scientific challenges.</p>
          </div>
          <div className="row">
            {cardLists}
          </div>
          <div className="btn view-all__btn">
            <a href="/" >View all products &amp; services</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Products
