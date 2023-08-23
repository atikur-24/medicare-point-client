import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useCartMedicines = () => {
  const { data: cart = [], refetch } = useQuery({
    queryKey: ["carts"],
    queryFn: async () => {
      const data = await axios.get("http://localhost:5000/medicineCarts");
      return data.data;
    },
  });

  return [cart, refetch];
};

export default useCartMedicines;
