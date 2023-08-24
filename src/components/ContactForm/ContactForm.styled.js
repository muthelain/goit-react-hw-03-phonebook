import styled from '@emotion/styled';

export const ContactFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;

  padding: 40px;
  margin-bottom: 40px;

  border: 2px solid black;
`;

export const ContactLabel = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 5px;

  font-size: 20px;
`;

export const ContactInput = styled.input`
  padding: 5px;
  margin-left: 20px;
`;

export const ContactBtn = styled.button`
  padding: 10px 5px;

  border-radius: 10px;

  cursor: pointer;
`;
