import { gql, useQuery } from '@apollo/client';
import { Card } from '../components/potho';
import { Loading } from '../components/UI';
import { IPhoto } from '../interfaces';

const GET_FAV = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const Fav = () => {
  const { data, loading, error } = useQuery<{ favs: IPhoto[] }>(GET_FAV, { fetchPolicy: 'cache-and-network' });
  if (loading) return <Loading />;
  if (error) return <p>{error.message}</p>;
  if (!data) return <p>No hay favoritos</p>;

  return (
    <div>
      {data.favs.map((photo) => (
        <Card key={photo.id} photo={photo} />
      ))}
    </div>
  );
};
