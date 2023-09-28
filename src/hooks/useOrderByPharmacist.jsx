import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "./useAuth";

const useOrderByPharmacist = () => {
  const { user, loading } = useAuth();
  const { data: orders = [], refetch } = useQuery({
    queryKey: ["medicineCarts", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const data = await axios.get(`${import.meta.env.VITE_API_URL}/medicinesOrderByPharmacistWithResponse?email=${user?.email}`);
      return data?.data;
    },
  });

  return [orders, refetch];
};

export default useOrderByPharmacist;
