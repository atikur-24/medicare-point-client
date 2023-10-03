import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useMedicines = () => {
  const { data: medicines = [], refetch } = useQuery({
    queryKey: ["medicines"],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/medicines`);
      return res?.data;
    },
  });
  return [medicines, refetch];
};

export default useMedicines;
