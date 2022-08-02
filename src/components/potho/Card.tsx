import styled from 'styled-components';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { fadeInAnimation } from '../../styles';
import { useRef, useEffect, useState } from 'react';
import { colors } from '../../styles/globalStyle';
import { IPhoto } from '../../interfaces';
import { gql, useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';

const Article = styled.article`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.12);
  padding: 16px;
  border-radius: 12px;
  margin: 8px 0;
  min-height: 300px;
`;
const ImgWrapper = styled.div`
  border-radius: 12px;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`;

const Image = styled.img`
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
  ${fadeInAnimation()};
`;

const Button = styled.button<{ color?: string }>`
  color: ${({ color = 'initial' }) => color};
  padding-top: 8px;
  display: flex;
  align-items: center;
  font-weight: 600;
  cursor: pointer;
  & svg {
    margin-right: 4px;
  }

  &:disabled {
    opacity: 0.5;
  }
`;

const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;

  & img {
    border-radius: 50%;
    height: 40px;
    width: 40px;
    margin-right: 8px;
    ${fadeInAnimation()};
  }
  & span {
    font-size: 1em;
    font-weight: bold;
  }

  & small {
    font-size: 0.8em;
    color: #666;
  }

  & div {
    display: flex;
    align-items: center;
  }
`;

interface Props {
  photo: IPhoto;
}

const LIKE_PHOTO = gql`
  mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id
      likes
      liked
    }
  }
`;

// al debolver el id y la cantidad de likes apolo internamente hara el cambio del estado con esa id sin necesidad de hacer nada mas

export const Card = ({ photo }: Props) => {
  const cardElement = useRef<HTMLElement>(null);
  const [show, setShow] = useState(false);

  const [onLike, { loading }] = useMutation(LIKE_PHOTO);

  useEffect(() => {
    Promise.resolve('IntersectionObserver' in window ? IntersectionObserver : import('intersection-observer')).then(
      () => {
        const observer = new IntersectionObserver((entry) => {
          if (entry[0].isIntersecting) {
            setShow(true);
            observer.disconnect();
          }
        });
        observer.observe(cardElement.current!);
      }
    );
  }, []);

  return (
    <Article ref={cardElement}>
      {show && (
        <>
          <AvatarContainer>
            <div>
              <img src={photo.src} alt="Autor" />
              <span></span>
            </div>
            <small>#{photo.id}</small>
          </AvatarContainer>

          <Link to={'/pet/' + photo.id}>
            <ImgWrapper>
              <Image src={photo.src} alt="imagen de mascota" />
            </ImgWrapper>
          </Link>

          <Button
            onClick={() => {
              onLike({ variables: { input: { id: photo.id } } });
            }}
            color={colors.primary}
            disabled={loading}
          >
            {photo.liked ? <MdFavorite size={24} /> : <MdFavoriteBorder size={24} />}
            {photo.likes} Likes!
          </Button>
        </>
      )}
    </Article>
  );
};
