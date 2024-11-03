export const renderDescription = (description) => {
    const parts = description.split(/(@\w+)/g); 
    return parts.map((part, index) => {
      if (part.startsWith('@')) {
        return (
          <a key={index} href={`https://twitter.com/${part.slice(1)}`} className="username">
            {part}
          </a>
        );
      }
      return part; 
    });
  };