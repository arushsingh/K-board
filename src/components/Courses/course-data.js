import React from 'react';
import './course-data.css';


const CourseData = () => {
    return (
        <div className="course-data-section">
            <form className="form-course-data card">
                <div className="form1">
                    <h2>Slide</h2>
                    <input placeholder="Heading" type="text" />
                    <textarea className="links-data" placeholder="Content"></textarea>
                    <label>Cover Image</label>
                    <input type="file" name="pic" accept="image/*" />
                </div>
                <div className="form2">
                    <label>Background Image</label>
                    <input type="file" name="pic" accept="image/*" />
                    <textarea placeholder="Links" className="links-data"></textarea>
                    <textarea placeholder="Video Links" className="links-data"></textarea>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}
export default CourseData;