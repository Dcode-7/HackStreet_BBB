import React from 'react';
import { Book, Award, Users, TrendingUp as Trending } from 'lucide-react';

const courses = [
  { id: 1, title: 'Advanced Web Development', progress: 60, duration: '8 weeks' },
  { id: 2, title: 'Business Management', progress: 30, duration: '6 weeks' },
  { id: 3, title: 'Digital Marketing', progress: 90, duration: '4 weeks' },
];

export function ProfessionalDevelopment() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Professional Development</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card">
          <div className="flex items-center gap-3 mb-4">
            <Book className="h-6 w-6 text-primary-500" />
            <h3 className="text-lg font-semibold">Active Courses</h3>
          </div>
          <p className="text-3xl font-bold">3</p>
        </div>

        <div className="card">
          <div className="flex items-center gap-3 mb-4">
            <Award className="h-6 w-6 text-primary-500" />
            <h3 className="text-lg font-semibold">Certifications</h3>
          </div>
          <p className="text-3xl font-bold">5</p>
        </div>

        <div className="card">
          <div className="flex items-center gap-3 mb-4">
            <Users className="h-6 w-6 text-primary-500" />
            <h3 className="text-lg font-semibold">Network Size</h3>
          </div>
          <p className="text-3xl font-bold">150+</p>
        </div>

        <div className="card">
          <div className="flex items-center gap-3 mb-4">
            <Trending className="h-6 w-6 text-primary-500" />
            <h3 className="text-lg font-semibold">Skill Growth</h3>
          </div>
          <p className="text-3xl font-bold">+25%</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Current Courses</h3>
          <div className="space-y-4">
            {courses.map((course) => (
              <div key={course.id} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{course.title}</span>
                  <span className="text-sm text-primary-600 dark:text-primary-400">
                    {course.duration}
                  </span>
                </div>
                <div className="h-2 bg-primary-100 dark:bg-primary-800 rounded-full">
                  <div
                    className="h-full bg-primary-500 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
                <div className="text-sm text-primary-600 dark:text-primary-400">
                  Progress: {course.progress}%
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Recommended Skills</h3>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {['React', 'Node.js', 'TypeScript', 'UI/UX Design', 'Project Management', 'SEO'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-primary-100 dark:bg-primary-800 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
            <button className="w-full mt-4 bg-primary-500 text-white py-2 rounded-lg hover:bg-primary-600 transition-colors">
              Explore Courses
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}