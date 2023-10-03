import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "./useAuth";

const useOrderByUsers = () => {
  const { user, loading } = useAuth();
  const { data: orders = [], refetch } = useQuery({
    queryKey: ["medicineCarts", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const data = await axios.get(`http://localhost:5000/medicinesOrder?email=${user?.email}`);
      return data?.data;
    },
  });

  return [orders, refetch];
};

export default useOrderByUsers;
