import React from 'react';
import { Shield, Heart, Wallet } from 'lucide-react';

export function Benefits() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Benefits Navigator</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-6 w-6 text-primary-500" />
            <h3 className="text-lg font-semibold">Health Insurance</h3>
          </div>
          <p className="text-primary-600 dark:text-primary-400 mb-4">
            Compare and select affordable health insurance plans tailored for gig workers.
          </p>
          <button className="w-full bg-primary-500 text-white py-2 rounded-lg hover:bg-primary-600 transition-colors">
            Compare Plans
          </button>
        </div>

        <div className="card">
          <div className="flex items-center gap-3 mb-4">
            <Wallet className="h-6 w-6 text-primary-500" />
            <h3 className="text-lg font-semibold">Retirement Planning</h3>
          </div>
          <p className="text-primary-600 dark:text-primary-400 mb-4">
            Plan for your future with our retirement calculator and investment guides.
          </p>
          <button className="w-full bg-primary-500 text-white py-2 rounded-lg hover:bg-primary-600 transition-colors">
            Start Planning
          </button>
        </div>

        <div className="card">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="h-6 w-6 text-primary-500" />
            <h3 className="text-lg font-semibold">Paid Leave Savings</h3>
          </div>
          <p className="text-primary-600 dark:text-primary-400 mb-4">
            Calculate and save for planned time off with our automated tools.
          </p>
          <button className="w-full bg-primary-500 text-white py-2 rounded-lg hover:bg-primary-600 transition-colors">
            Calculate Savings
          </button>
        </div>
      </div>
    </div>
  );
}