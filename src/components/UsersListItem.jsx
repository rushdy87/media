import { TiDelete, TiArrowSortedDown } from 'react-icons/ti';

import { remomoveUser } from '../store';
import { useThunk } from '../hooks/useThunk';
import Button from './Button';

const UsersListItem = ({ user }) => {
  const [doRemoveUSer, isLoading, error] = useThunk(remomoveUser);

  const handleClick = () => {
    doRemoveUSer(user);
  };

  return (
    <div className="mb2 border rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        <div className="flex flex-row items-center justify-between">
          <Button
            className="mr-3 rounded-full"
            loading={isLoading}
            onClick={handleClick}
          >
            <TiDelete className="text-3xl" />
          </Button>
          {error && <h1>Error Deleting User!!!</h1>}
          {user.name}
          <TiArrowSortedDown className="text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default UsersListItem;
