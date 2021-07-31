import { createContext, useState } from "react";

export const SEOContext = createContext();

const SEOProvider = ({ children }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSetTitle = (props) => {
    setTitle(props);
  };

  const SEOProps = {
    title,
    handleSetTitle,
  };

  return <SEOContext.Provider value={SEOProps}>{children}</SEOContext.Provider>;
};

export default SEOProvider;
