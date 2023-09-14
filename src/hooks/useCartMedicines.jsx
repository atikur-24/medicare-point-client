import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "./useAuth";

const useCartMedicines = () => {
  const { user, loading } = useAuth();
  const { data: cart = [], refetch } = useQuery({
    queryKey: ["medicineCarts", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const data = await axios.get(`http://localhost:5000/medicineCarts?email=${user?.email}`);
      return data?.data;
    },
  });

  return [cart, refetch];
};

export default useCartMedicines;
