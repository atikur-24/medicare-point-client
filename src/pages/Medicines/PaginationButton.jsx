import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchMedicines } from "../../Features/Medicines/AllMedicines/allMedicines";

const PaginationButton = () => {
  const dispatch = useDispatch();
  const [pageCounter, setPageCounter] = useState(1);
  useEffect(() => {
    dispatch(fetchMedicines(pageCounter));
  }, [pageCounter]);

  return (
    <div className="text-center">
      <button disabled={pageCounter <= 1} onClick={() => setPageCounter(pageCounter - 1)} type="button" className="mr-8">
        priveus
      </button>
      {pageCounter}
      <button onClick={() => setPageCounter(pageCounter + 1)} type="button" className="ml-8">
        next
      </button>
    </div>
  );
};

export default PaginationButton;
