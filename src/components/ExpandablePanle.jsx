import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

const ExpandablePanle = ({ header, children }) => {
  const [expended, setExpended] = useState(false);

  const handleClick = () => {
    setExpended(!expended);
  };

  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center">
        <div className="flex flex-row items-center justify-between">
          {header}
        </div>
        <div className="text-3xl cursor-pointer" onClick={handleClick}>
          {expended ? <GoChevronDown /> : <GoChevronLeft />}
        </div>
      </div>
      {expended && <div className="p-2 border-t">{children}</div>}
    </div>
  );
};

export default ExpandablePanle;
