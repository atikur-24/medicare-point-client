import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "./useAuth";

const useCartMedicines = () => {
  const { user, loading } = useAuth();
  const { data: cart = [], refetch } = useQuery({
    queryKey: ["medicineCarts", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const data = await axios.get(`${import.meta.env.VITE_API_URL}/medicineCarts?email=${user?.email}`);
      return data?.data;
    },
  });

  return [cart, refetch];
};

export default useCartMedicines;
