import { useState, useEffect, useReducer } from 'react';

const apiUrl = 'https://hp-api.onrender.com/api/';

const selectionReducer = (state, action) => {
  switch (action.type) {
    case 'CHARACTERS':
      return `${apiUrl}${action.payload}`;
    case 'STUDENTS':
    case 'STAFF':
      return `${apiUrl}characters/${action.payload}`;
    case 'SPELLS':
      return `${apiUrl}${action.payload}`;
    default:
      return state;
  }
};

export default function useFetchData(initialSelection) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selection, dispatchSelection] = useReducer(
    selectionReducer,
    initialSelection
  );

  useEffect(() => {
    if (!selection) {
      return;
    }

    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(selection);
        const jsonData = await response.json();

        setData(jsonData);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selection]);

  return { data, loading, error, dispatchSelection };
}
