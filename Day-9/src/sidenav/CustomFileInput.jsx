import React, { useState } from 'react';

const CustomFileInput = () => {
  const [fileName, setFileName] = useState('');

  const handleChange = (e) => {
    const file = e.target.files[0];
    setFileName(file.name);
  };

  return (
    <div>
      <input type="file" onChange={handleChange} hidden />
      <button type="button" onClick={handleChange}>Choose file</button>
      <span>{fileName}</span>
    </div>
  );
};

export default CustomFileInput;