import { createContext, useMemo } from 'react';

export const Context = createContext();

const FiltersProvider = ({ children }) => {
  const categories = ['women', 'kids', 'men', 'accessories'];
  const value = useMemo(() => {
    return {
      categories,
    };
  }, [categories]);
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default FiltersProvider;
export const withContext = (Component) => {
  return (
    <Context.Consumer>
      {(value) => <Component value={value} />}
    </Context.Consumer>
  );
};
