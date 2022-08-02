import { Link, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { colors, fadeInAnimation } from '../../styles';

const DEFAULT_IMAGE = 'http://placeimg.com/640/480/animals';
interface Props {
  cover?: string;
  path: string;
  emoji: string;
}

const Ancor = styled(Link)`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  padding: 8px;
  position: relative;
`;

const Border = styled.div`
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
  background: linear-gradient(to right, ${colors.primary} 0%, ${colors.secondary} 100%);
  border-radius: 50%;
  height: 75px;
  width: 75px;
  padding: 3px;
`;

const Image = styled.img`
  border: 4px solid #fefefe;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  ${fadeInAnimation()};
`;

const Emoji = styled.span`
  font-size: 1.8em;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji }: Props) => {
  const [params] = useSearchParams();

  return (
    <Ancor to={path}>
      <Border>
        <Image src={cover} alt="imagen de categoría" />
      </Border>
      <Emoji>{emoji}</Emoji>
    </Ancor>
  );
};
