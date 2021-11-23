import React from 'react';

export default function Example({ progress }) {
  return (
    <div
      className='h-1 bg-yellow-400 top-16'
      style={{ width: progress + '%' }}
    ></div>
  );
}
Example.propTypes = {};
