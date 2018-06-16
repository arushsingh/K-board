import React from 'react';
import './course.css';
import CourseTile from './course-tile';
import StudentPortfolio from './course-page';
import TopicsPage from './topics';
import SlidesPage from './sildes';

class Course extends React.Component {
    render() {
        return (
            <div className="course-mainpage">
                <StudentPortfolio />
                <CourseTile />
                <TopicsPage />
                <SlidesPage />



            </div>
        )
    }
}
export default Course;