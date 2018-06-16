import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './home-page';
import AboutPage from './about-page';
import NotFoundPage from './not-found-page';
import AddPage from './addPage/add-page';
import AddDemo from './demo/add-demo';
import AddDemoSuccess from './demo/add-demo-success';
import Login from './auth/login_page';
import authHandler from '../handlers/authHandlers';
import DemosPage from './demo/demos-page';
import DemoPage from './demo/demo-page';
import AddCourse from './Courses/addCourse';
import SelectPage from './common/select/Select';
import Coursepage from '../components/demo/course';
import Coursecard from './Courses/course-card';
import CourseData from './Courses/course-data';
import SlideList from './Courses/slide-list';
import SlidesPage from './Courses/slides';

const routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/add" component={AddPage} />
      <Route exact path="/add-demo" component={authHandler(AddDemo)} />
      <Route path="/add-demo/success" component={authHandler(AddDemoSuccess)} />
      <Route path="/login" component={Login} />
      <Route path="/demos" component={DemosPage} />
      <Route path="/demo" component={DemoPage} />
      <Route path="/add-course" component={AddCourse} />
      <Route path="/CoursePage" component={Coursepage} />
      <Route path="/select" component={SelectPage} />
      <Route path="/course-data" component={CourseData} />
      <Route path="/coursecard" component={Coursecard} />
      <Route path="/slidelist" component={SlideList} />
      <Route path="/slides" component={SlidesPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}

export default routes;
