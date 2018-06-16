import React from 'react';
import './slides.css';


const SlidesPage = () => {
    return (
        <div className="slides-page">
            <div className="silde-overlay card">
                <div className="image-container">
                    <div className="blur-layer">
                        <h3 className="content-header">Hrader</h3>
                        <p className="slide-content">lorem ipsum is a dummy text that can be used ti get demo text so as o check the design </p>
                        <span className="slide-links">https://www.youtube.com/watch?v=-HsLxctIh9k</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SlidesPage;