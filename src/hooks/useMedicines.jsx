import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useMedicines = () => {
  const { data: medicines = [], refetch } = useQuery({
    queryKey: ["medicines"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/medicines");
      return res?.data;
    },
  });
  return [medicines, refetch];
};

export default useMedicines;
