import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "./useAuth";

const useOrderByPharmacist = () => {
  const { user, loading } = useAuth();
  const {
    data: orders = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["medicineCarts", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const data = await axios.get(`http://localhost:5000/medicinesOrderByPharmacistWithResponse?email=${user?.email}`);
      return data?.data;
    },
  });

  return [orders, isLoading, refetch];
};

export default useOrderByPharmacist;
