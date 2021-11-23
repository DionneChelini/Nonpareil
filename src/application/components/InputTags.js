import { useState } from 'react';
export default function InputTags({ selected, name, tags, setTags }) {
  const addTags = (e) => {
    if (e.key === 'Enter' && e.target.value !== '') {
      setTags([...tags, e.target.value]);
      selected([...tags, e.target.value], name);
    }
    e.target.value = '';
  };

  const removeTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
    selected(
      tags.filter((_, index) => index !== indexToRemove),
      name
    );
  };
  return (
    <div className='col-span-6 sm:col-span-3 mt-5'>
      <div>
        <label
          htmlFor='search'
          className='block text-sm font-medium text-gray-700'
        >
          {name}
        </label>
        <div className='mt-1 relative flex items-center'>
          <input
            type='text'
            name={name}
            id={name}
            className='shadow-sm focus:ring-yellow-500 focus:border-yellow-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md'
            onKeyUp={(e) => (e.key === 'Enter' ? addTags(e) : null)}
            onKeyDown={(e) => e.key === 'Enter' && e.preventDefault()}
          />
          <div className='absolute inset-y-0 right-0 flex py-1.5 pr-1.5'>
            <kbd className='inline-flex items-center border border-gray-200 rounded px-2 text-sm font-sans font-medium text-gray-400'>
              ⌘K
            </kbd>
          </div>
        </div>
      </div>

      {tags.map((tag, index) => (
        <span
          className='inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium bg-yellow-100 text-yellow-700 mt-2'
          key={index}
        >
          {tag}
          <button
            type='button'
            className='flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-yellow-400 hover:bg-yellow-200 hover:text-yellow-500 focus:outline-none focus:bg-yellow-500 focus:text-white'
          >
            <span className='sr-only'>Remove large option</span>
            <svg
              className='h-2 w-2'
              stroke='currentColor'
              fill='none'
              viewBox='0 0 8 8'
              onClick={(e) => removeTag(index, e)}
            >
              <path
                strokeLinecap='round'
                strokeWidth='1.5'
                d='M1 1l6 6m0-6L1 7'
              />
            </svg>
          </button>
        </span>
      ))}
    </div>
  );
}
