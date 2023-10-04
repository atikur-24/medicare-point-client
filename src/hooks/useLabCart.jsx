import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "./useAuth";

const useLabCart = () => {
  const { user, loading } = useAuth();
  const { data: labCart = [], refetch } = useQuery({
    queryKey: ["labCarts", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const data = await axios.get(
        `${import.meta.env.VITE_API_URL}/labsCart?email=${user?.email}`,
      );
      return data?.data;
    },
  });

  return [labCart, refetch];
};

export default useLabCart;
