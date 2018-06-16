import React from 'react';
import './course-card.css';
import Select from '../common/select/Select';

const CourseCard = () => {
    return (
        <div className="course-slide-form" >
            <div className="course-slide-overlay card">
                <form className="course-form">
                    <h2 className="course-form-header">Add course</h2>
                    <input placeholder="Title"></input>
                    <Select />
                    <Select />
                    <button>Submit</button>
                </form>
            </div>
        </div >
    )
}
export default CourseCard;