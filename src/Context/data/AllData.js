import { useQuery } from "@tanstack/react-query";
import { createContext } from "react";

export const ALLDATACONTEXT = createContext();

const AllData = ({ children }) => {
  const { data: productsData = [] } = useQuery({
    queryKey: "productsData",
    queryFn: async () => {
      const res = await fetch(
        "https://better-buys-server-site.vercel.app/products"
      );
      const data = await res.json();
      return data;
    },
  });
  const { data: userData = [] } = useQuery({
    queryKey: "userData",
    queryFn: async () => {
      const res = await fetch(
        "https://better-buys-server-site.vercel.app/user"
      );
      const data = await res.json();
      return data;
    },
  });
  const { data: addedProducts = [], refetch: addedProductRefetch } = useQuery({
    queryKey: "addedProducts",
    queryFn: async () => {
      const res = await fetch(
        "https://better-buys-server-site.vercel.app/add_products"
      );
      const data = await res.json();
      return data;
    },
  });
  const dataValues = {
    productsData,
    userData,
    addedProducts,
    addedProductRefetch,
  };
  return (
    <ALLDATACONTEXT.Provider value={dataValues}>
      {children}
    </ALLDATACONTEXT.Provider>
  );
};

export default AllData;
