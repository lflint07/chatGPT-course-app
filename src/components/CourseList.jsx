import { useEffect, useState } from 'react';
import supabase from '../lib/supabase.js';

function CourseList() {
  const [course, setCourses] = useState([]);

  useEffect(() => {
    async function fetchCourses() {
      const { data, error } = await supabase.from("course").select('*');
      if (error) {
        console.error('Error fetching courses:', error);
      } else {
        setCourses(data);
      }
    }

    fetchCourses();
  }, []);

  return (
    <div>
      <h1>Course List</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <p>Category: {course.category}</p>
            <p>Price: ${course.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
