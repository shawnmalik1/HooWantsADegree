import React, { useState, useEffect } from 'react';

function TextFile({ filePath }) {
  const [fileContent, setFileContent] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(filePath);
        const text = await response.text();
        setFileContent(text);
      } catch (error) {
        console.error('Error fetching the file:', error);
      }
    };

    fetchData();
  }, [filePath]);

  return (
    <div>
      <h2>Text File Content:</h2>
      <pre>{fileContent}</pre>
    </div>
  );
};

export default TextFile;