import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirect = this.redirect.bind(this);
  }

  redirect() {
    browserHistory.push('/course');
  }

  render() {
    const {courses} = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <input type="submit"
               value="Add Course"
               className="btn btn-primary"
               onClick={this.redirect} />

        <CourseList courses={courses}/>
      </div>
    );
  }
}
CoursesPage.propTypes = {
courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps){
  return {
    courses: state.courses
  };
}

export default connect(mapStateToProps) (CoursesPage);
