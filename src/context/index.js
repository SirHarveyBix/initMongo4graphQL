import { createContext, useMemo, useState } from 'react';

export const Context = createContext();

const FiltersProvider = ({ children }) => {
  const categories = ['Women', 'Kids', 'Men', 'Accessories'];
  const filters = ['Top', 'Bottom', 'Jacket'];
  const [category, setCategory] = useState(categories[0].toLowerCase());
  const updateCategory = (value) => {
    setCategory(value.toLowerCase());
  };
  const [isChecked, setIsChecked] = useState({
    Top: false,
    Bottom: false,
    Jacket: false,
  });
  const updateFilters = (event) =>
    // or : setFiltersChecked((prevState) =>
    // ({ ...prevState,[e.target.name]: e.target.checked, }));
    setIsChecked({
      ...isChecked,
      [event.target.name]: event.target.checked,
    });
  const filtersKeys = () => {
    return Object.entries(isChecked)
      .map(([key, value]) => value && key)
      .filter((obj) => !!obj);
  };
  const value = useMemo(() => {
    return {
      categories,
      category,
      filters,
      isChecked: filtersKeys(),
      updateCategory,
      updateFilters,
    };
  }, [category, isChecked]);
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
