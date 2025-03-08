import React from 'react';
import { Users, FileText, MessageSquare, Clock } from 'lucide-react';

const clients = [
  { id: 1, name: 'Tech Corp', project: 'Website Redesign', status: 'In Progress', deadline: '2024-03-30' },
  { id: 2, name: 'Marketing Inc', project: 'SEO Optimization', status: 'Pending', deadline: '2024-04-15' },
  { id: 3, name: 'Design Studio', project: 'Brand Identity', status: 'Completed', deadline: '2024-03-10' },
];

export function ClientManagement() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Client Management</h2>
        <button className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors">
          Add New Client
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card">
          <div className="flex items-center gap-3 mb-4">
            <Users className="h-6 w-6 text-primary-500" />
            <h3 className="text-lg font-semibold">Active Clients</h3>
          </div>
          <p className="text-3xl font-bold">{clients.length}</p>
        </div>

        <div className="card">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="h-6 w-6 text-primary-500" />
            <h3 className="text-lg font-semibold">Contracts</h3>
          </div>
          <p className="text-3xl font-bold">{clients.length}</p>
        </div>

        <div className="card">
          <div className="flex items-center gap-3 mb-4">
            <MessageSquare className="h-6 w-6 text-primary-500" />
            <h3 className="text-lg font-semibold">Messages</h3>
          </div>
          <p className="text-3xl font-bold">12</p>
        </div>

        <div className="card">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="h-6 w-6 text-primary-500" />
            <h3 className="text-lg font-semibold">Pending Tasks</h3>
          </div>
          <p className="text-3xl font-bold">5</p>
        </div>
      </div>

      <div className="card">
        <h3 className="text-lg font-semibold mb-4">Client Projects</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-primary-200 dark:border-primary-700">
                <th className="text-left py-3 px-4">Client</th>
                <th className="text-left py-3 px-4">Project</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Deadline</th>
                <th className="text-left py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client.id} className="border-b border-primary-200 dark:border-primary-700">
                  <td className="py-3 px-4">{client.name}</td>
                  <td className="py-3 px-4">{client.project}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-sm ${
                      client.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                      client.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {client.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">{client.deadline}</td>
                  <td className="py-3 px-4">
                    <button className="text-primary-500 hover:text-primary-600">View Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}