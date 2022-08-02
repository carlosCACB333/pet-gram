import { gql, useQuery } from '@apollo/client';
import { useSearchParams } from 'react-router-dom';
import { IPhotosResponse } from '../../interfaces';
import { Loading } from '../UI';
import { Card } from './Card';

const GET_PHOTOS = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`;

export const PothoList = () => {
  const [params] = useSearchParams();

  const { data, loading, error } = useQuery<IPhotosResponse>(GET_PHOTOS, {
    variables: {
      categoryId: params.get('id') || '',
    },
  });
  if (loading) return <Loading />;
  if (error) return <p>{error.message}</p>;
  if (!data) return <p>No hay datos</p>;

  return (
    <div>
      {data.photos.map((photo) => (
        <Card key={photo.id} photo={photo} />
      ))}
    </div>
  );
};
