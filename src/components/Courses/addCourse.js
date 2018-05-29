import React from 'react';
import { Link } from 'react-router-dom';
import '../Courses/addcourse.css';


class addCourse extends React.Component {
    render() {
        return (
            <div className="lkcmlwmcm-container">
                <div className="add_course-container card">
                    <div className="inner_add_course-container inheriter">
                        <div><input type="text" placeholder=" Title" /></div>
                        <div><button className="upload_button">Upload</button><input className="upload_list" placeholder=" 800 x 600" type="text" /></div>
                        <textarea placeholder="Description" className="summary-area-markup"></textarea>
                        <div className="button_next_container">
                            <Link to="/course-data"><button>Next</button></Link>
                        </div>
                    </div>
                </div >
                <div className="add_course-container container2 card">
                    <div className="inner_add_course-container">
                        <div className="silder_header"><span>Slide-1</span></div>
                        <div><input type="text" placeholder=" Title" /></div>
                        <div><button className="upload_button">Upload</button><input className="upload_list" placeholder=" 600 x 400" type="text" /></div>
                        <textarea maxLength="200" placeholder="Summary" className="summary-area-markup"></textarea>
                        <div className="button_next_container">
                            <Link to="/course-data"><button>Submit</button></Link>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
export default addCourse;