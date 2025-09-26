import React from "react";

export interface ItemProps {
  label: React.ReactNode;
  children: React.ReactNode;
  id?: string; // viene aggiunto da Tabs
}

export const Item: React.FC<ItemProps> = ({ children }) => {
  return <>{children}</>;
};
