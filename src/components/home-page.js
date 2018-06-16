import React from 'react';
import '../styles/homepage.css';
import image from '../images/arrows-3435587_960_720.jpg';


class HomePage extends React.Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div className="homepage_container">
        <div className="trending card">
          <div className="header_trending">
            <h2>Trending</h2>
          </div>
          <div className="trend-feed1">
            <div className="feed-1" >
              <img src={image} />
              <div className="content" >
                <h3>Header</h3>
                <p>This is a test</p>
              </div>
            </div>
          </div>
          <div className="trend-feed2">
            <div className="feed-1" >
              <img src={image} />
              <div className="content" >
                <h3>Header</h3>
                <p>This is a test</p>
              </div>
            </div>
          </div>
          <div className="trend-feed3">
            <div className="feed-1" >
              <img src={image} />
              <div className="content" >
                <h3>Header</h3>
                <p>This is a test</p>
              </div>
            </div>
          </div>

        </div>
        <section className="html_feeds card">
          <div className="html_header header_trending">
            <h2>Html</h2>
          </div>
          <div className="trend_gallery html-tile-1">
            <div className="feed-1" >
              <img src={image} />
              <div className="content" >
                <h3>Header</h3>
                <p>This is a test</p>
              </div>
            </div>
          </div>
          <div className="trend_gallery html-tile-2">
            <div className="feed-1" >
              <img src={image} />
              <div className="content" >
                <h3>Header</h3>
                <p>This is a test</p>
              </div>
            </div>
          </div>
          <div className="trend_gallery html-tile-3">
            <div className="feed-1" >
              <img src={image} />
              <div className="content" >
                <h3>Header</h3>
                <p>This is a test</p>
              </div>
            </div>
          </div>
        </section>
        <section className="html_feeds css_feeds card">
          <div className="html_header header_trending">
            <h2>CSS</h2>
          </div>
          <div className="trend_gallery html-tile-1">
            <div className="feed-1" >
              <img src={image} />
              <div className="content" >
                <h3>Header</h3>
                <p>This is a test</p>
              </div>
            </div>
          </div>
          <div className="trend_gallery html-tile-2">
            <div className="feed-1" >
              <img src={image} />
              <div className="content" >
                <h3>Header</h3>
                <p>This is a test</p>
              </div>
            </div>
          </div>
          <div className="trend_gallery html-tile-3">
            <div className="feed-1" >
              <img src={image} />
              <div className="content" >
                <h3>Header</h3>
                <p>This is a test</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
export default HomePage;
