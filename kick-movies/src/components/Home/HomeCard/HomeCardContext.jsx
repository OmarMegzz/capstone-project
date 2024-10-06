import React, { createContext, useContext, useMemo, useState } from "react";
const HomeCardContext = createContext(null);

export const HomeCardContextProvider = ({ children, cardInfo }) => {
  const [cardData, setCardData] = useState(cardInfo);
  const contextValue = useMemo(() => ({ cardData, setCardData }), [cardData]);
  return (
    <>
      <HomeCardContext.Provider value={contextValue}>
        {children}
      </HomeCardContext.Provider>
    </>
  );
};
export const useHomeCardContext = () => {
  const context = useContext(HomeCardContext);
  if (!context) {
    throw Error(
      "useHomeCardContext should be used inside home card context provider "
    );
  }
  return context;
};
