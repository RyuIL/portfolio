import * as React from 'react';
import styled from 'styled-components';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ChangingProgressProvider from './ChangingProgressProvider';

interface CircleImageView {
  src: string;
  size?: number;
  float?: 'left' | 'right';
  values?: number[];
  ImgName?: string;
  isLoading? :boolean;
}

export default (props: CircleImageView) => {
  const [percentage, setPercentage] = React.useState(50);
  return (
    <Wrapper src={props.src} size={props.size} ImgName={props.ImgName}>
        {props.isLoading && <ChangingProgressProvider values={props.values!}>
        {(percentage: any) => <StyledCircularProgressbar value={percentage} />}
      </ChangingProgressProvider>}
    </Wrapper>
  );
};

const Wrapper = styled.div<CircleImageView>`
    @media only screen and (min-width: 1200px) {
      font-size: 11px;
    }
  border-radius: 50%;
  background-image: url(${props => props.src});
  height: ${props => (props.size ? props.size + 'px' : '14.5rem')};
  width: ${props => (props.size ? props.size + 'px' : '14.5rem')};
  background-size: cover;
  background-position: center;
  margin: 1rem;

  &:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8)),
      url(${props => props.src});
    display: felx;
    align-items: center;
    justify-content: center;
  }

  &:hover::after {
    content: ${props => props.ImgName};
    color: white;
  }
`;

const StyledCircularProgressbar = styled(CircularProgressbar)`
  opacity: 0.9;
`;
