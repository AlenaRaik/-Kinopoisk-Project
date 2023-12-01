import styled from 'styled-components';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  labelText: string;
  error?: string;
};

export const Input: React.FC<Props> = ({ labelText, error, ...restProps }) => {
  return (
    <Label>
      <LabelText>{labelText}</LabelText>
      <InputWrapper $borderColor={error ? 'red' : undefined} {...restProps} />
      <Error>{error}</Error>
    </Label>
  );
};

const Label = styled.label`
  display: block;
  color: var(--text-primary-color);
`;

const LabelText = styled.div`
  text-align: start;
`;

const InputWrapper = styled.input<{ $borderColor?: string }>`
  width: 100%;
  height: 30px;
  box-sizing: border-box;
  border: 1px solid ${({ $borderColor }) => $borderColor || '#ffffff'};
  background-color: #ffffff;

  &:focus-visible {
    border: 1px solid ${({ $borderColor }) => $borderColor || '#000000cc'};
  }
`;

const Error = styled.div`
  height: 20px;
  color: red;
`;
