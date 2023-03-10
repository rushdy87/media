import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { TiUserAdd } from 'react-icons/ti';

import { fetchUsers, addUser } from '../store';
import { useThunk } from '../hooks/useThunk';

import Skeleton from './Skeleton';
import Button from './Button';
import UsersListItem from './UsersListItem';

const UsersList = () => {
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);
  const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);

  const { data } = useSelector((state) => {
    return state.users; //{data, isLoading, error}
  });

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  const handleUserAdd = () => {
    doCreateUser();
  };

  let content;
  if (isLoadingUsers) {
    content = <Skeleton times={6} className="h-10 w-full" />;
  } else if (loadingUsersError) {
    content = <h1>Error fetching data...</h1>;
  } else {
    content = data.map((user) => {
      return <UsersListItem user={user} key={user.id} />;
    });
  }

  return (
    <div>
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl">Users</h1>

        <Button onClick={handleUserAdd} loading={isCreatingUser}>
          <TiUserAdd />
        </Button>
        {creatingUserError && 'Error creating user..'}
      </div>
      {content}
    </div>
  );
};

export default UsersList;
