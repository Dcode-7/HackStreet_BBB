import React from 'react';
import { Calendar, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'Website Redesign',
    client: 'Tech Corp',
    startDate: '2024-03-01',
    endDate: '2024-03-30',
    status: 'In Progress',
    tasks: [
      { id: 1, name: 'Design Review', completed: true },
      { id: 2, name: 'Frontend Development', completed: false },
      { id: 3, name: 'Testing', completed: false },
    ],
  },
  {
    id: 2,
    name: 'Marketing Campaign',
    client: 'Brand Co',
    startDate: '2024-04-01',
    endDate: '2024-04-15',
    status: 'Upcoming',
    tasks: [
      { id: 1, name: 'Strategy Planning', completed: false },
      { id: 2, name: 'Content Creation', completed: false },
      { id: 3, name: 'Launch', completed: false },
    ],
  },
];

export function ProjectTimeline() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Project Timeline</h2>
        <button className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors">
          Add New Project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="h-6 w-6 text-primary-500" />
            <h3 className="text-lg font-semibold">Active Projects</h3>
          </div>
          <p className="text-3xl font-bold">2</p>
        </div>

        <div className="card">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle className="h-6 w-6 text-primary-500" />
            <h3 className="text-lg font-semibold">Completed Tasks</h3>
          </div>
          <p className="text-3xl font-bold">1</p>
        </div>

        <div className="card">
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle className="h-6 w-6 text-primary-500" />
            <h3 className="text-lg font-semibold">Upcoming Deadlines</h3>
          </div>
          <p className="text-3xl font-bold">3</p>
        </div>
      </div>

      <div className="card">
        <h3 className="text-lg font-semibold mb-4">Project Overview</h3>
        <div className="space-y-6">
          {projects.map((project) => (
            <div key={project.id} className="border-b border-primary-200 dark:border-primary-700 pb-6 last:border-0">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-lg font-semibold">{project.name}</h4>
                  <p className="text-primary-600 dark:text-primary-400">{project.client}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  project.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'
                }`}>
                  {project.status}
                </span>
              </div>

              <div className="flex items-center gap-4 mb-4 text-sm text-primary-600 dark:text-primary-400">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{project.startDate}</span>
                </div>
                <span>→</span>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{project.endDate}</span>
                </div>
              </div>

              <div className="space-y-2">
                {project.tasks.map((task) => (
                  <div key={task.id} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => {}}
                      className="rounded border-primary-300 text-primary-500 focus:ring-primary-500"
                    />
                    <span className={task.completed ? 'line-through text-primary-400' : ''}>
                      {task.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}