import { SVGProps } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../styles';
const Box = styled(Link)`
  text-decoration: none;
`;

const P = styled.p`
  text-align: center;
  width: 100%;
  font-style: italic;
  font-size: 1rem;
  font-weight: 500;
  color: ${colors.primary};
  transform: translateY(-15px) rotate(-1deg);
`;
export const Logo = (props: SVGProps<any>) => (
  <Box to="/">
    <svg
      width={'100%'}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="4.369 0.2 491.262 149.6"
      style={{
        background: '0 0',
      }}
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <defs>
        <linearGradient id="a" x1={0.063} x2={0.937} y1={0.258} y2={0.742} gradientUnits="objectBoundingBox">
          <stop offset={0} stopColor={colors.primary} />
          <stop offset={1} stopColor={colors.secondary} />
        </linearGradient>
      </defs>
      <path
        d="M39.61-5.62q-3.45 3.49-8.16 5.37-4.72 1.89-9.39 1.89-4.68 0-6.32-.82L13.2 14.76-3.44 16.4 7.87-41.82l13.37-1.39-1.07 5.65q3.45-5.82 10.58-5.82 8.04 0 12.3 5.17 3.77 4.67 3.77 11.81 0 7.13-1.88 12.21-1.89 5.09-5.33 8.57Zm-18.54-23L16.73-4.59q1.72 1.47 3.85 1.47t3.36-.82q1.23-.82 2.14-2.46 2.46-4.42 4.42-17.87.58-3.94.58-7.79 0-3.86-.86-5.09t-2.5-1.23q-5.01 0-6.65 9.76Zm63.88 14.76Q87-12.46 87-9.39q0 3.08-1.56 5.04-1.55 1.97-4.1 3.28-5.24 2.71-10.9 2.71T61.46.41q-3.32-1.23-5.54-3.53-4.34-4.34-4.34-12.3 0-12.38 6.72-19.92 7.22-8.12 19.76-8.12 7.79 0 11.65 3.28 2.87 2.46 2.87 6.48 0 14.43-24.93 14.43-.33 2.13-.33 3.94 0 3.77 1.68 5.2 1.68 1.44 4.8 1.44t6.44-1.44q3.32-1.43 4.71-3.73ZM68.22-22.8q5.83 0 9.19-3.6 3.36-3.45 3.36-8.94 0-1.89-.7-2.91-.69-1.03-2.09-1.03-1.39 0-2.58.53-1.19.54-2.42 2.34-3.03 4.1-4.76 13.61ZM96.68-8.2q0-2.21 1.15-7.79l4.34-22.14h-4.84l.33-2.46q9.84-2.95 19.35-10.17h3.94l-1.97 8.94h6.4l-.74 3.69h-6.31l-4.19 22.14q-1.06 5.08-1.06 6.81 0 3.93 3.44 4.75-.82 2.79-3.77 4.43-2.95 1.64-7.13 1.64-4.19 0-6.56-2.62-2.38-2.63-2.38-7.22Zm33.78-26.08q2.79-3.93 7.01-6.56 4.23-2.62 9.39-2.62 5.17 0 7.63 1.64l16.07-1.64-5.58 31.49q-2.87 16.07-8.93 22.38-5.83 5.99-17.14 5.99-8.61 0-13.53-2.71-4.92-2.7-4.92-7.21 0-3.36 2.54-5.29 2.54-1.93 6.48-1.93 3.44 0 6.07 1.56 1.55.82 2.29 1.97-1.88 1.64-1.88 4.34 0 3.53 3.28 3.53 5.49 0 8.61-12.96.9-3.52 1.64-7.05-3.69 4.51-12.06 4.51-5.82 0-9.18-2.79-3.36-2.78-3.36-9.34 0-4.1 1.39-8.74 1.39-4.63 4.18-8.57Zm10.66 17.55q0 5.58 2.87 5.58 1.97 0 3.86-2.13 1.47-1.73 2.05-4.27l4.18-21.07q-.41-.08-.82-.25-.82-.33-1.89-.33-5 0-7.95 8.2-2.3 6.4-2.3 14.27Zm58.3-6.31q2.96-5.25 2.96-10.58 0-3.53-2.55-3.53-1.96 0-4.01 3.37-2.14 3.36-2.79 7.7L188.76 0l-16.97 1.64 8.36-43.46 13.53-1.64-1.47 8.28q4.02-8.28 13.04-8.28 4.75 0 7.34 2.46 2.58 2.46 2.58 7.5 0 5.05-3.32 8.24-3.32 3.2-8.98 3.2-2.46 0-3.45-.98Zm20.63 20.58q-1.93-2.13-2.79-5.49-.86-3.37-.86-8.86 0-5.49 1.88-10.5 1.89-5 5.33-8.61 7.06-7.54 18.7-7.54 4.18 0 7.22 1.39l14.02-1.39-6.07 31.98q-.25.98-.25 2.79 0 1.8 1.11 2.95 1.11 1.15 2.75 1.31-.82 2.79-3.81 4.43-3 1.64-6.36 1.64-3.36 0-5.62-1.27-2.25-1.27-2.91-3.4-1.31 2.05-4.1 3.36-2.79 1.31-6.52 1.31-3.73 0-6.76-.98-3.04-.99-4.96-3.12Zm17.3-33.29q-.94 1.47-1.76 3.97-.82 2.51-2.18 9.19-1.35 6.68-1.35 11.44 0 4.75.74 6.15.74 1.39 2.05 1.39 2.62 0 4.55-2.5 1.93-2.5 2.66-6.93l4.35-24.02q-1.72-1.48-3.73-1.48t-3.2.66q-1.19.65-2.13 2.13Zm89.67 37.39q-9.93 0-9.93-7.71 0-3.36 1.44-9.88 1.43-6.52 1.93-9.14 1.14-5.99 1.14-7.87 0-4.19-3.11-4.19-2.05 0-4.02 2.83-1.97 2.83-2.87 8.49L306.52 0l-15.99 1.64 4.42-22.3q.74-3.69 1.4-7.88.65-4.18.65-4.83 0-3.78-2.78-3.78-1.89 0-3.94 2.79t-3.2 8.53l-5 25.83-16.15 1.64 8.61-43.46 13.36-1.64-1.39 8.28q2.13-4.43 6.07-6.35 3.93-1.93 10.08-1.93 3.53 0 5.82 1.72 2.3 1.72 3.04 4.51 1.39-2.87 4.96-4.55 3.57-1.68 7.95-1.68 4.39 0 6.56.94 2.18.95 3.49 2.5 2.21 2.87 2.21 8.12 0 5.17-2.21 15.91-1.15 5.25-1.15 7.18 0 1.92 1.11 3.07 1.1 1.15 2.74 1.31-.82 2.79-3.65 4.43-2.82 1.64-6.51 1.64Z"
        fill="url(#a)"
        transform="translate(80.924 108.58)"
      />
    </svg>
    <P>El lugar ideal para tus mascotas...</P>
  </Box>
);