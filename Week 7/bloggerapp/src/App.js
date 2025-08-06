import React from 'react';
import './index.css';
import { books, blogs, courses } from './Data';

import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  return (
    <div className="container">
      <div className="panel">
        <CourseDetails courses={courses} />
      </div>

      <div className="panel">
        <BookDetails books={books} />
      </div>

      <div className="panel">
        <BlogDetails blogs={blogs} />
      </div>
    </div>
  );
}

export default App;
