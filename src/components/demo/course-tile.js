import React from 'react';
import './course-tile.css';
import FontAwesome from 'react-fontawesome';


class Coursetile extends React.Component {
    render() {
        return (
            <section className="details-tiles">
                <div className="details-card card">
                    <div className="details-wrapper">
                        <ul>
                            <li><h2 className="details-header">Programing Fundamentals</h2></li>
                            <li><FontAwesome className="rating" name='fas fa-star' /> <FontAwesome className="rating" name='fas fa-star' /> <FontAwesome className="rating" name='fas fa-star' /> <FontAwesome className="rating" name='fas fa-star' /> <FontAwesome name='fas fa-star' /> <span>By - Kamal Pandey</span></li>
                            <li><div className="course-content-data">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Integer malesuada. Nulla quis diam. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Nulla est. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Proin mattis lacinia justo. Etiam neque. Quisque porta. Integer lacinia. Etiam quis quam</div></li>
                            <li><button>Resume Course</button>
                                <ul className="details-selector">
                                    <li><FontAwesome name='fas fa-bookmark' /> Bookmark</li>
                                    <li><FontAwesome name='fas fa-users' /> Mentoring</li>
                                    <li><FontAwesome name='fas fa-ban' /> Discussions</li>
                                </ul>
                            </li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}
export default Coursetile;