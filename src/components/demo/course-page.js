import React from 'react';
import avatar from '../../images/img_avatar.png';
import './course-page.css';

class CoursePage extends React.Component {
    render() {
        return (
            <div className="student-page-container">
                <div className="student_profile_container card">
                    <div className="profile-header ">
                        <img src={avatar} alt="avatar" className="avatar" />
                        <h3>Name</h3>
                    </div>
                    <div className="skill-level">
                        <ul>
                            <li>Skill Level <span>Beginner</span></li>
                            <li>Membership Status <span>Gama</span></li>
                            <li>Modules Completed <span>10 / 50</span></li>
                            <li>Score <span>50 / 100</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default CoursePage; 