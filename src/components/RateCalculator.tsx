import React, { useState } from 'react';

export function RateCalculator() {
  const [formData, setFormData] = useState({
    experience: '',
    projectType: '',
    hours: '',
    expenses: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const calculateRate = () => {
    // This would include more complex logic in a real application
    const baseRate = 50;
    const experienceMultiplier = formData.experience === 'senior' ? 2 : 1;
    const projectTypeMultiplier = formData.projectType === 'complex' ? 1.5 : 1;
    return baseRate * experienceMultiplier * projectTypeMultiplier;
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Rate Calculator</h2>
      
      <div className="card">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Experience Level</label>
            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full p-2 rounded-lg border border-primary-200 dark:border-primary-700 bg-white dark:bg-primary-800"
            >
              <option value="">Select experience</option>
              <option value="junior">Junior (1-3 years)</option>
              <option value="mid">Mid-level (3-5 years)</option>
              <option value="senior">Senior (5+ years)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Project Type</label>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full p-2 rounded-lg border border-primary-200 dark:border-primary-700 bg-white dark:bg-primary-800"
            >
              <option value="">Select project type</option>
              <option value="basic">Basic</option>
              <option value="standard">Standard</option>
              <option value="complex">Complex</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Estimated Hours</label>
            <input
              type="number"
              name="hours"
              value={formData.hours}
              onChange={handleChange}
              className="w-full p-2 rounded-lg border border-primary-200 dark:border-primary-700 bg-white dark:bg-primary-800"
              placeholder="Enter estimated hours"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Additional Expenses</label>
            <input
              type="number"
              name="expenses"
              value={formData.expenses}
              onChange={handleChange}
              className="w-full p-2 rounded-lg border border-primary-200 dark:border-primary-700 bg-white dark:bg-primary-800"
              placeholder="Enter additional expenses"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary-500 text-white py-2 rounded-lg hover:bg-primary-600 transition-colors"
          >
            Calculate Rate
          </button>
        </form>

        {formData.experience && formData.projectType && (
          <div className="mt-6 p-4 bg-primary-50 dark:bg-primary-800 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Suggested Rate</h3>
            <p className="text-2xl font-bold text-primary-500">
              ${calculateRate()}/hour
            </p>
          </div>
        )}
      </div>
    </div>
  );
}