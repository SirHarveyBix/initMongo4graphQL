import React from 'react';
import { Context } from '../../context';

// const Filters = {
export const Category = ({ name }) => {
  const { updateCategory, category } = React.useContext(Context);
  const handleOnChange = (event) => {
    updateCategory(event.target.value);
  };
  return (
    <div className='mt-2 mb-2 pl-2'>
      <div className='custom-control custom-checkbox'>
        <input
          type='radio'
          onChange={handleOnChange}
          name='category'
          value={name}
          className='custom-control-input'
          id={name}
          checked={name.toLowerCase() === category}
        />
        &nbsp;
        <label className='custom-control-label' htmlFor={name}>
          {name}
        </label>
      </div>
    </div>
  );
};
export const Filter = ({ name }) => {
  const { updateFilters } = React.useContext(Context);
  // Const handleFilters= (event)=> updatdeFilters(event.targer.value)
  return (
    <div className='mt-2 mb-2 pl-2'>
      <div className='custom-control custom-checkbox'>
        <input
          name={name}
          onChange={updateFilters}
          type='checkbox'
          className='custom-control-input'
          id={name}
        />
        &nbsp;
        <label className='custom-control-label' htmlFor={name}>
          {name}
        </label>
      </div>
    </div>
  );
};
// };
// export default Filters;
