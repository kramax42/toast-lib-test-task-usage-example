import styled from 'styled-components';

export const Button = styled.button`
  height: 60px;
  font-size: inherit;
`;

export const Input = styled.input`
  width: 100%;
  padding: 5px;
  font-size: inherit;
`;

export const CheckBox = styled.input.attrs({ type: 'checkbox' })`
  font-size: inherit;
`;

export const ColorInput = styled.input.attrs({ type: 'color' })``;

export const Content = styled.div`
  display: flex;
  width: 250px;
  gap: 10px;
  margin-top: 100px;
  font-size: 18px;
  flex-direction: column;
`;

export const Option = styled.option`
  font-size: inherit;
`;

export const Select = styled.select`
  width: 100%;
  padding: 5px;
  font-size: inherit;
`;

export const Label = styled.label`
  color: gray;
  font-size: 17px;
`;

export const Title = styled.h3``;
