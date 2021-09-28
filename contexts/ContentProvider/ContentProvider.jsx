import { createContext, useContext } from "react";
import generalContent from "../../content";

export const ContentContext = createContext(generalContent);

export const useContent = (key) => {
  const content = useContext(ContentContext);
  return key.split(".").reduce((acc, cur) => acc[cur], content);
};
