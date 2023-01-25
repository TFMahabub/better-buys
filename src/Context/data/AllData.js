import { useQuery } from "@tanstack/react-query";
import { createContext } from "react";

export const ALLDATACONTEXT = createContext();

const AllData = ({ children }) => {
  const { data: productsData = [] } = useQuery({
    queryKey: "productsData",
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/products");
      const data = await res.json();
      return data;
    },
  });
  const { data: userData = [] } = useQuery({
    queryKey: "userData",
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/user");
      const data = await res.json();
      return data;
    },
  });
  const dataValues = { productsData, userData };
  return (
    <ALLDATACONTEXT.Provider value={dataValues}>
      {children}
    </ALLDATACONTEXT.Provider>
  );
};

export default AllData;
