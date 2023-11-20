import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { increment, decrement } from "../slices/countSlice";

const BorderLayout = styled.div`
  border: 5px solid red;
  margin: 10px;
`;

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const WithReduce = () => {
  return (
    <BorderLayout>
      <h1>Root</h1>
      <GridLayout>
        <Left1 />
        <Right1 />
      </GridLayout>
    </BorderLayout>
  );
};

const Left1 = () => {
  return (
    <BorderLayout>
      <h1>Left1</h1>
      <Left2 />
    </BorderLayout>
  )
};

const Left2 = () => {
  return (
    <BorderLayout>
      <h1>Left2</h1>
      <Left3 />
    </BorderLayout>
  )
};

const Left3 = () => {
  const number = useAppSelector((state) => state.count.value);

  return (
    <BorderLayout>
      <h1>Left3 : {number}</h1>
    </BorderLayout>
  )
};

const Right1 = () => {
  return (
    <BorderLayout>
      <h1>Right1</h1>
      <Right2 />
    </BorderLayout>
  )
};

const Right2 = () => {
  return (
    <BorderLayout>
      <h1>Right2</h1>
      <Right3 />
    </BorderLayout>
  )
};

const Right3 = () => {
  const dispatch = useAppDispatch();

  return (
    <BorderLayout>
      <h1>Right3</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </BorderLayout>
  )
};

export default WithReduce;