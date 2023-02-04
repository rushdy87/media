import { TiDelete } from 'react-icons/ti';

import { remomoveUser } from '../store';
import { useThunk } from '../hooks/useThunk';

import ExpandablePanle from './ExpandablePanle';
import AlbumsList from './AlbumsList';
import Button from './Button';

const UsersListItem = ({ user }) => {
  const [doRemoveUSer, isLoading, error] = useThunk(remomoveUser);

  const handleClick = () => {
    doRemoveUSer(user);
  };

  const header = (
    <>
      <Button
        className="mr-3 rounded-full"
        loading={isLoading}
        onClick={handleClick}
      >
        <TiDelete className="text-3xl" />
      </Button>
      {error && <h1>Error Deleting User!!!</h1>}
      {user.name}
    </>
  );

  return (
    <ExpandablePanle header={header}>
      <AlbumsList user={user} />
    </ExpandablePanle>
  );
};

export default UsersListItem;
