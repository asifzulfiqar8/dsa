"use client";

import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error while reteriving value from localStorage", error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error("Error setting localStorage", error);
    }
  };

  useEffect(() => {
    const stored = localStorage.getItem(key);
    if (stored !== null) {
      setStoredValue(JSON.parse(stored));
    }
  }, [key]);

  return [storedValue, setValue];
};

export default useLocalStorage;

// set a state that will get a value from localStorage if theres otherwise initialValue will be the state value.
// Function to update state and localStorage
