import React, { Component } from 'react'
import blog1 from '../../assets/images/blog-1.png'
import blog2 from '../../assets/images/blog-2.png'
import blog3 from '../../assets/images/blog-3.png'
import blog4 from '../../assets/images/blog-4.png'

import { FaExternalLinkAlt } from 'react-icons/fa'

class Blog extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: [
        { id: 1, title: 'Pharm2Market: Year In Review', body: 'We released Pharm2Market 1.0 in December of 2018 and over the course the number of usersmber of users ', image: blog1 },
        { id: 2, title: 'Preparing for Partnering Events', body: 'Partnering events like BIO, JP Morgan, the CLSA Pharma Partnering Day, and many others are critical opportunities', image: blog2 },
        { id: 3, title: 'Common Mistakes Biotech Entrepreneurs Make', body: 'Recently, we’ve been interviewing members of the San Diego biotech investment community to better understand the factors that influence an investment decision.', image: blog3 },
        { id: 4, title: 'Larger Than Life Science', body: 'Join us for beer, demos and panel discussions this Apr 25th from 4-7pm at LaunchBio’s “Larger Than Life Science” event at BioLabs new Towne Center facility.', image: blog4 }
      ]
    }
  }
  render() {
    const blogPosts = this.state.posts.map(post => {
      return (
        <div className="col4-2" key={post.id}>
          <div className="card blog-card">
            <div className="blog-image">
              <img src={post.image} alt="blog" />
            </div>
            <div className="blog-content">
              <div className="blog-text">
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
              <div className="blog-link">
                <a href="/">read the blog <span><FaExternalLinkAlt /></span></a>
              </div>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="blog__section">
        <div className="container">
          <h2 className="blog-title">From the Blog</h2>
          <div className="row">
            {blogPosts}
          </div>
          <div className="btn view-all__btn">
            <a href="/" >view all blogs posts</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Blog

