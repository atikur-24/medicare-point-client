import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAllMedicines = () => {
  const { data: allMedicines = [], refetch } = useQuery({
    queryKey: ["allMedicines"],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/all-medicines`);
      return res?.data;
    },
  });
  return [allMedicines, refetch];
};

export default useAllMedicines;
