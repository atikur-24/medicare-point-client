import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "./useAuth";

const useLabBook = () => {
  const { user, loading } = useAuth();
  const { data: labBook = [], refetch } = useQuery({
    queryKey: ["labBook", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const data = await axios.get(`${import.meta.env.VITE_API_URL}/labBooking?email=${user?.email}`);
      return data?.data;
    },
  });

  return [labBook, refetch];
};

export default useLabBook;
