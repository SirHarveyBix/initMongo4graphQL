import React from 'react';
import { Context } from '../../context';
const Filters = {
  Category: function ({ name }) {
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
            checked={name === category}
          />
          &nbsp;
          <label className='custom-control-label' for={name}>
            {name}
          </label>
        </div>
      </div>
    );
  },
  Filter: function ({ name }) {
    return (
      <div className='mt-2 mb-2 pl-2'>
        <div className='custom-control custom-checkbox'>
          <input
            name={name}
            onChange={() => {}}
            type='checkbox'
            className='custom-control-input'
            id={name}
          />
          &nbsp;
          <label className='custom-control-label' for={name}>
            {name}
          </label>
        </div>
      </div>
    );
  },
};
export default Filters;
