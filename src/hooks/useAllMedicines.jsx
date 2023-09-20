import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAllMedicines = () => {
  const { data: allMedicines = [], refetch } = useQuery({
    queryKey: ["allMedicines"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/all-medicines");
      return res?.data;
    },
  });
  return [allMedicines, refetch];
};

export default useAllMedicines;
