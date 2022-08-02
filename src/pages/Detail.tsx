import { Card } from '../components/potho';
import { gql, useQuery } from '@apollo/client';
import { Loading } from '../components/UI';
import { IPhoto } from '../interfaces/photos';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { MdKeyboardBackspace } from 'react-icons/md';

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`;

const GobackElement = styled.span`
  cursor: pointer;
  font-weight: 600;
  display: flex;
  align-items: center;
  &:hover {
    color: #000000b5;
  }
`;

export const Detail = () => {
  const { id } = useParams();
  const { loading, data, error } = useQuery<{ photo: IPhoto }>(GET_SINGLE_PHOTO, { variables: { id } });
  const navigate = useNavigate();

  if (loading) return <Loading />;
  if (error) return <span>Error</span>;
  if (!data) return <span>No encontrado</span>;
  const { photo } = data;

  return (
    <>
      <GobackElement onClick={() => navigate(-1)}>
        <MdKeyboardBackspace />
        Volver
      </GobackElement>
      <Card photo={photo} />
    </>
  );
};
