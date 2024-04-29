import React from 'react';
import Card from './Card.jsx';

const Employees = () => {
  return (
    <div className="w-3/4 mx-auto mt-20 text-center">
      <div className="mb-6">
        <h2 className="text-2xl bg-gray-900 text-white py-12">Know Your Teacher</h2>
      </div>
      <div className="space-y-6">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Employees;
