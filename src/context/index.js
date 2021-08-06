import { createContext, useMemo, useState } from 'react';

export const Context = createContext();

const FiltersProvider = ({ children }) => {
  const categories = ['Women', 'Kids', 'Men', 'Accessories'];
  const filters = ['Top', 'Bottom', 'Jacket'];
  const [category, setCategory] = useState(categories[0].toLowerCase());
  const updateCategory = (value) => {
    setCategory(value.toLowerCase());
  };
  const value = useMemo(() => {
    return {
      categories,
      filters,
      updateCategory,
      category,
    };
  }, [category]);
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default FiltersProvider;
export const withContext = (Component) => () => {
  return (
    <Context.Consumer>
      {(value) => <Component value={value} />}
    </Context.Consumer>
  );
};
