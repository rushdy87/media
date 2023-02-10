import { TiDelete } from 'react-icons/ti';

import { useRemoveAlbumMutation } from '../store';
import Button from './Button';
import ExpandablePanle from './ExpandablePanle';

const AlbumsListItem = ({ album }) => {
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const handleRemoveAlbum = () => {
    removeAlbum(album);
  };

  const header = (
    <>
      <Button
        className="mr-2 rounded-full"
        loading={results.isLoading}
        onClick={handleRemoveAlbum}
      >
        <TiDelete className="text-3xl" />
      </Button>
      {album.title}
    </>
  );
  return (
    <ExpandablePanle key={album.id} header={header}>
      List of photos in the album
    </ExpandablePanle>
  );
};

export default AlbumsListItem;
