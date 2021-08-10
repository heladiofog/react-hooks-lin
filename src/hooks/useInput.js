import { useState } from 'react';

// Logic ready to be reusable by a custom Hook anywhere in out app
export function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);


  // What we want our hook returns, it cam be an array just like useState hook does
  return [
    // An object as the first element returned
    {
      value,
      onChange: (e) => setValue(e.target.value),
    },
    // reset function for the input component to be set back to its initial value
    () => setValue(initialValue)
  ];
}
