import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import useLabBook from "../../../../hooks/useLabBook";
import BookLabCard from "./BookLabCard";

const BookedLabTest = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  const [labBook] = useLabBook();
  return (
    <div className="my-10">
      {labBook.length <= 0 && (
        <div className="alert">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>You haven't Booked any lab Test</span>
          <div>
            <Link to="/lab-test" className="my-btn">
              Book Lab
            </Link>
          </div>
        </div>
      )}

      {labBook?.map((book) => (
        <BookLabCard key={book._id} book={book} isOpen={isOpen} toggleOpen={toggleOpen} />
      ))}
    </div>
  );
};

export default BookedLabTest;
