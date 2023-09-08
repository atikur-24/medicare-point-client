import { useCallback, useState } from "react";
import useLabBook from "../../../../hooks/useLabBook";
import BookLabCard from "./BookLabCard";

const BookedLabTest = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  const [labBook] = useLabBook();
  return (
    <div className="p-6">
      {labBook?.map((book) => (
        <BookLabCard key={book._id} book={book} isOpen={isOpen} toggleOpen={toggleOpen} />
      ))}
    </div>
  );
};

export default BookedLabTest;
