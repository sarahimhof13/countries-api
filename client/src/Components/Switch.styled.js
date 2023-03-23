import styled from "styled-components";

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 20px;
`;

export const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: #b0b0b0;
  }

  &:focus + span {
    box-shadow: 0 0 1px ${(props) => props.theme.body};
  }

  &:checked + span:before {
    transform: translateX(30px);
  }
`;

export const SwitchSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #b0b0b0;
  transition: background-color 0.2s ease;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    background-color: ${(props) => props.theme.colors.text};
    transition: transform 0.2s ease;
    border-radius: 50%;
  }
`;
