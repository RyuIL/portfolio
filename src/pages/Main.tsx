import * as React from 'react';
import styled from 'styled-components';
import Typist from 'react-typist';
import BgImg from '~assets/img/coding-job.png';

import Typescript from '~assets/img/typescript.jpg';
import Mobx from '~assets/img/mobx.png';
import StyledComponent from '~assets/img/styled-components.png';
import ReactImg from '~assets/img/react.png';
import NextImg from '~assets/img/nextjs.png';
import ES6Img from '~assets/img/ES6.jpg';
import WebpackImg from '~assets/img/webpack.png';

import JavaImg from '~assets/img/java.png';
import MysqlImg from '~assets/img/mysql.png';
import SpringBootImg from '~assets/img/springboot.png';
import ExpressImg from '~assets/img/Expressjs.png';
import MongodbImg from '~assets/img/mongodb.png';
import NodeJSImg from '~assets/img/Nodejs.jpg'

import JiraImg from '~assets/img/jira.jpg';
import GitImg from '~assets/img/git.png';
import DockerImg from '~assets/img/docker.png';
import GraphqlImg from '~assets/img/graphql.png';
import SketchImg from '~assets/img/sketch.png';
import ec2Img from '~assets/img/amazon-ec2.png';

import CircleImageView from '~components/CircleImageView';

interface Animate {
  animate: boolean;
  float?: 'left' | 'right';
}

export default () => {
  const [isScroll, setScroll] = React.useState(false);
  const [show, doShow] = React.useState<boolean[][]>([
    [false, false, false, false, false, false],
    [false],
    [false],
  ]);
  
const getNumArr = (num : number) => {
  const numArr = [0];
  for (let i = 0; i < 8; i++) {
    numArr.push(numArr[i] + num/10);
  }
  numArr.push(num);
  return numArr;
}

  const slideOneRef = React.useRef<HTMLDivElement>(null),
    s1item1 = React.useRef<HTMLDivElement>(null),
    s1item2 = React.useRef<HTMLDivElement>(null),
    s1item3 = React.useRef<HTMLDivElement>(null),
    s1item4 = React.useRef<HTMLDivElement>(null),
    s1item5 = React.useRef<HTMLDivElement>(null),
    s1item6 = React.useRef<HTMLDivElement>(null),
    s1item7 = React.useRef<HTMLDivElement>(null),
    slideTwoRef = React.useRef<HTMLDivElement>(null);

  const slideOneArr = [s1item1, s1item2, s1item3, s1item4, s1item5, s1item6, s1item7];

  React.useEffect(() => {
    const topPos = (element: HTMLDivElement) =>
      element.getBoundingClientRect().top;
    const slideOnePos = slideOneArr.map(item => topPos(item.current!));
    const fadinFadout = (
      fadein: number,
      fadeout: number,
      scrollPos: number,
      slideIndex: number,
      index: number
    ) => {
      if (scrollPos < fadein) {
        show[slideIndex][index] = false;
      }
      if (fadein < scrollPos) {
        show[slideIndex][index] = true;
      }
      if (fadeout < scrollPos) {
        show[slideIndex][index] = false;
      }
      return show;
    };

    const innerHeight = window.innerHeight * 1.5;

    const div1Pos = topPos(s1item1.current!),
      div2Pos = topPos(slideTwoRef.current!);
    let prev = 0;
    const endSlide = slideOneRef.current!.clientHeight;
    const onScroll = () => {
      const scrollPos = window.scrollY + innerHeight - innerHeight + 100;
      //skills
      doShow({...fadinFadout(slideOnePos[0],slideOnePos[0] + innerHeight,scrollPos,0,0)});
      prev = slideOnePos[0] + innerHeight;
      //frontend
      doShow({ ...fadinFadout(prev, prev + innerHeight, scrollPos, 0, 1) });
      prev += 200;
      //frontend image
      doShow({ ...fadinFadout(prev, endSlide, scrollPos, 0, 2) });
      prev = prev + innerHeight + 200;
      //backend
      doShow({ ...fadinFadout(prev, prev + innerHeight, scrollPos, 0, 3) });
      prev += 200;
      //backend image
      doShow({ ...fadinFadout(prev, endSlide, scrollPos, 0, 4)});
      prev += innerHeight;
      //etc
      doShow({ ...fadinFadout(prev, prev + innerHeight, scrollPos, 0, 5)});
      prev += innerHeight;
      //etc image
      doShow({ ...fadinFadout(prev, endSlide, scrollPos, 0, 6)});
      if (div2Pos < scrollPos) {
        doShow(state => ({ ...state, itemTwo: true }));
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Layout>
      <Slide background={BgImg} color={'#ffffff'} height={1}>
        <WrapperFlexBox>
          <Title>안녕하세요!</Title>
          <Typist>
            Software engineer <Typist.Delay ms={300} /> 류일한의
            포트폴리오입니다.
          </Typist>
        </WrapperFlexBox>
      </Slide>
      <Slide ref={slideOneRef} backgroundColor={'#3c2d93'} height={10}>
        <WrapperAnimate>
          <AnimateText ref={s1item1} animate={show[0][0]}>
            저의 스킬을 소개합니다.
          </AnimateText>
          <AnimateText ref={s1item2} animate={show[0][1]}>
            <b>FrontEnd</b>
            {
              show[0][1] && <><Typist cursor={{blink: true, hideWhenDone: true}}>
              <span>Typescript</span> 
              </Typist>
              <Typist cursor={{blink: true, hideWhenDone: true}}>
              <Typist.Delay ms={400} />
                <span>Mobx</span>
              </Typist>
              <Typist cursor={{blink: true, hideWhenDone: true}}>
              <Typist.Delay ms={700} />
              <span>Next</span>
              </Typist>
              <Typist cursor={{blink: true, hideWhenDone: true}}>
              <Typist.Delay ms={900} />
              <span>React</span> 
              </Typist>
              <Typist cursor={{blink: true, hideWhenDone: true}}>
              <Typist.Delay ms={900} />
              <span>Css3</span> 
              </Typist>
              <Typist cursor={{blink: true, hideWhenDone: true}}>
              <Typist.Delay ms={900} />
              <span>ES6</span> 
              </Typist>
              </>
            }
          </AnimateText>
          <AnimateText ref={s1item4} animate={show[0][3]}>
            <b>BackEnd</b>
            {
              show[0][3] && <><Typist cursor={{blink: true, hideWhenDone: true}}>
              <span>Java</span> 
              </Typist>
              <Typist cursor={{blink: true, hideWhenDone: true}}>
              <Typist.Delay ms={400} />
                <span>Spring boot</span>
              </Typist>
              <Typist cursor={{blink: true, hideWhenDone: true}}>
              <Typist.Delay ms={700} />
              <span>Express</span>
              </Typist>
              <Typist cursor={{blink: true, hideWhenDone: true}}>
              <Typist.Delay ms={900} />
              <span>Mysql</span> 
              </Typist>
              <Typist cursor={{blink: true, hideWhenDone: true}}>
              <Typist.Delay ms={900} />
              <span>Node</span> 
              </Typist>
              <Typist cursor={{blink: true, hideWhenDone: true}}>
              <Typist.Delay ms={900} />
              <span>MongoDB</span> 
              </Typist>
              </>
            }
          </AnimateText>
        </WrapperAnimate>
        <WrapperAnimate top={10}>
        <AnimateText ref={s1item6} animate={show[0][5]}>
            <b>etc</b>
            {
              show[0][5] && <><Typist cursor={{blink: true, hideWhenDone: true}}>
              <span>Git</span> 
              </Typist>
              <Typist cursor={{blink: true, hideWhenDone: true}}>
              <Typist.Delay ms={400} />
                <span>Jira</span>
              </Typist>
              <Typist cursor={{blink: true, hideWhenDone: true}}>
              <Typist.Delay ms={700} />
              <span>EC2</span>
              </Typist>
              <Typist cursor={{blink: true, hideWhenDone: true}}>
              <Typist.Delay ms={900} />
              <span>Docker</span> 
              </Typist>
              <Typist cursor={{blink: true, hideWhenDone: true}}>
              <Typist.Delay ms={900} />
              <span>GraphQL</span> 
              </Typist>
              <Typist cursor={{blink: true, hideWhenDone: true}}>
              <Typist.Delay ms={900} />
              <span>Sketch</span> 
              </Typist>
              </>
            }
          </AnimateText>
        </WrapperAnimate>
        <WrapperFlexContainer>
        <WrapperFlexRowBox ref={s1item3} animate={show[0][2]} float={'left'}>
          <CircleImageView src={Typescript} ImgName={'Typescript'} values={getNumArr(85)} isLoading={show[0][2]} />
          <CircleImageView src={Mobx} ImgName={'Mobx'} values={getNumArr(75)} isLoading={show[0][2]} />
          <CircleImageView src={NextImg} ImgName={'Next'} values={getNumArr(70)} isLoading={show[0][2]} />
          <CircleImageView src={ReactImg} ImgName={'React'} values={getNumArr(90)} isLoading={show[0][2]} />
          <CircleImageView src={StyledComponent} ImgName={'StyledComponent'} values={getNumArr(90)} isLoading={show[0][2]} />
          <CircleImageView src={ES6Img} ImgName={'ES6Img'} values={getNumArr(90)} isLoading={show[0][2]} />
          {/* <CircleImageView src={WebpackImg} ImgName={'React'} values={getNumArr(70)} isLoading={show[0][2]} /> */}
        </WrapperFlexRowBox>
        <WrapperFlexRowBox ref={s1item7} animate={show[0][6]} float={'right'}>
        <CircleImageView src={GitImg} values={getNumArr(95)} isLoading={show[0][6]} />
          <CircleImageView src={JiraImg} values={getNumArr(80)} isLoading={show[0][6]} />
          <CircleImageView src={ec2Img} values={getNumArr(80)} isLoading={show[0][6]} />
          <CircleImageView src={DockerImg} values={getNumArr(85)} isLoading={show[0][6]} />
          <CircleImageView src={GraphqlImg} values={getNumArr(85)} isLoading={show[0][6]} />
          <CircleImageView src={SketchImg} values={getNumArr(85)} isLoading={show[0][6]} />
        </WrapperFlexRowBox>
        <WrapperFlexRowBox ref={s1item5} animate={show[0][4]} float={'left'}>
        <CircleImageView src={JavaImg} values={getNumArr(95)} isLoading={show[0][4]} />
          <CircleImageView src={SpringBootImg} values={getNumArr(80)} isLoading={show[0][4]} />
          <CircleImageView src={ExpressImg} values={getNumArr(80)} isLoading={show[0][4]} />
          <CircleImageView src={MysqlImg} values={getNumArr(85)} isLoading={show[0][4]} />
          <CircleImageView src={MongodbImg} values={getNumArr(85)} isLoading={show[0][4]} />
          <CircleImageView src={NodeJSImg} values={getNumArr(85)} isLoading={show[0][4]} />
        </WrapperFlexRowBox>
        </WrapperFlexContainer>
      </Slide>
      <Slide backgroundColor={'lightgray'} height={1}>
        <AnimateText ref={slideTwoRef} animate={show[1][0]}>
          Skills
        </AnimateText>
      </Slide>
    </Layout>
  );
};

const Layout = styled.div`
  position: relative;
  font-size: 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const WrapperFlexContainer = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  justify-content: space-between;
  height: 100vh;
`;

interface SlideProps {
  background?: string;
  noBackgroundImg? : boolean;
  backgroundColor?: string;
  color?: string;
  height: number;
}

const Slide = styled.div<SlideProps>`
  position: relative;
  color: ${props => (props.color ? props.color : 'black')};
  width: 100vw;


  @media screen and (max-width: 600px) {
    padding: 1rem;
  }
  @media screen and (min-width: 768px) {
    padding: 13rem;
  }
  @media screen and (min-width: 992px) {
    padding: 13rem;
  }
  @media only screen and (min-width: 1200px) {
    padding: 40rem;
  }

  
  background-image: linear-gradient(
      ${props =>
        props.background ? 'rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2)' : '40deg, #EEE7AE, #87BDEB'}),
    url(${props => (props.background ? props.background : '')});
  background-size: cover;
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : 'white'};
  background-position: center;
  justify-content: center;
  align-items: center;
  height: ${props => props.height * 100 + 'vh'};
`;

const WrapperFlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

const WrapperFlexRowBox = styled.div<Animate>`
  position: sticky;
  top: 2vh;
  height: 100vh;
  margin-top:0 ;
  float: ${props => props.float ? props.float : 'none'};
  transform: translateY(${props => (props.animate ? '0' : '60vh')});
  opacity: ${props => (props.animate ? '1' : '0')};
  height: ${props => (props.animate ? 'auto' : '0')};
  transition: transform 1s, opacity 0.5s linear;
`;

const WrapperAnimate = styled.div`
  position: sticky;
  top: ${(props : {top?: number}) => props.top ? props.top+'vh' : '30vh' };
  width: auto;
  margin-top: 30vh;
  text-align: center;
`;

const AnimateText = styled.p`
  font-size: 4rem;
  transform: translateY(
    ${(props: { animate?: boolean }) => (props.animate ? '0' : '10vh')}
  );
  opacity: ${(props: { animate?: boolean }) => (props.animate ? '1' : '0')};
  height: ${(props: { animate?: boolean }) => (props.animate ? 'auto' : '0')};
  transition: transform 1s, opacity 0.5s linear;
`;

const Title = styled.p`
  font-size: 4rem;
`;
