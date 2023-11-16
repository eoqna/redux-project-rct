import { useState } from "react";
import styled from "styled-components";

const BorderLayout = styled.div`
  border: 5px solid red;
  margin: 10px;
`;

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

interface LeftProps {
  number: number;
};

interface RightProps {
  onIncrease: () => void;
}

const WithoutReduce = () => {
  const [ number, setNumber ] = useState(1);

  return (
    <BorderLayout>
      <h1>Root : {number}</h1>
      <GridLayout>
        <Left1 number={number} />
        <Right1 onIncrease={() => {
          setNumber(number + 1);
        }} />
      </GridLayout>
    </BorderLayout>
  );
};

const Left1 = (props: LeftProps) => {
  return (
    <BorderLayout>
      <h1>Left1 : {props.number}</h1>
      <Left2 number={props.number} />
    </BorderLayout>
  )
};

const Left2 = (props: LeftProps) => {
  return (
    <BorderLayout>
      <h1>Left2 : {props.number}</h1>
      <Left3  number={props.number} />
    </BorderLayout>
  )
};

const Left3 = (props: LeftProps) => {
  return (
    <BorderLayout>
      <h1>Left3 : {props.number}</h1>
    </BorderLayout>
  )
};

const Right1 = (props: RightProps) => {
  return (
    <BorderLayout>
      <h1>Right1</h1>
      <Right2 onIncrease={props.onIncrease} />
    </BorderLayout>
  )
};

const Right2 = (props: RightProps) => {
  return (
    <BorderLayout>
      <h1>Right1</h1>
      <Right3 onIncrease={props.onIncrease} />
    </BorderLayout>
  )
};

const Right3 = (props: RightProps) => {
  return (
    <BorderLayout>
      <h1>Right1</h1>
      <button onClick={props.onIncrease}>+</button>
    </BorderLayout>
  )
};

export default WithoutReduce;