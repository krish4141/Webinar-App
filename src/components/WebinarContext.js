import { createContext, useState } from "react";

export const WebinarContext = createContext();

export const WebinarProvider = ({ children }) => {
  const [webinars, setWebinars] = useState([]);

  const addWebinar = (webinar) => {
    webinar.id = Date.now(); // Generate a unique ID
    webinar.backgroundColor = getRandomColor(); // Assign a random color
    setWebinars([...webinars, webinar]);
  };

  const updateWebinar = (updatedWebinar) => {
    setWebinars(webinars.map(webinar => webinar.id === updatedWebinar.id ? updatedWebinar : webinar));
  };

  const deleteWebinar = (id) => {
    setWebinars(webinars.filter(webinar => webinar.id !== id));
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <WebinarContext.Provider value={{ webinars, addWebinar, updateWebinar, deleteWebinar }}>
      {children}
    </WebinarContext.Provider>
  );
};
