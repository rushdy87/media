import { useFetchAlbumsQuery, useAddAlbumMutation } from '../store';
import Skeleton from './Skeleton';
import ExpandablePanle from './ExpandablePanle';
import Button from './Button';

const AlbumsList = ({ user }) => {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();

  let content;
  if (isLoading) {
    content = <Skeleton times={3} className="h-10 w-full" />;
  } else if (error) {
    content = <div>Error lodaing albums</div>;
  } else {
    content = data.map((album) => {
      const header = <div>{album.title}</div>;
      return (
        <ExpandablePanle key={album.id} header={header}>
          List of photos in the album
        </ExpandablePanle>
      );
    });
  }

  const handleAddAlbum = () => {
    addAlbum(user);
  };

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Album For {user.name}</h3>
        <Button loading={results.isLoading} onClick={handleAddAlbum}>
          + Add Album
        </Button>
      </div>
      <div>{content}</div>
    </div>
  );
};

export default AlbumsList;
