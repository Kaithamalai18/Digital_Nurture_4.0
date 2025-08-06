import React from 'react';

const CourseDetails = ({ courses }) => {
  if (!courses || courses.length === 0) return <p>No Courses Available</p>;

  return (
    <div className="box">
      <h1>Course Details</h1>
      {courses.map((course, index) => (
        <div key={index}>
          <h3>{course.name}</h3>
          <h4>{course.date}</h4>
        </div>
      ))}
    </div>
  );
};

export default CourseDetails;
