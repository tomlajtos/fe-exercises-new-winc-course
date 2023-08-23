import { useState, useEffect } from "react";

export const useLocalStorage = (key, defaultValue = "") => {
  // use a setter function to get value that belongs to the KEY 'key' argument
  // set a def value as well with the `||` operator
  const [state, setState] = useState(
    () => window.localStorage.getItem(key) || defaultValue,
  );

  // use useEffect to update 'state' in localStorage
  // since our component has to be synced with an external system (Web Storage API)
  // 'key' is now the dynamic value that should be in the dependency array
  useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [key, state]);
  return [state, setState];
};
