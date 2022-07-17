import styled from "styled-components";

export const TripParametersContainer = styled.div`
  color: #666;
  font-weight: bold;
  font-size: 14px;
`;

export const TripParameter = styled.span`
  &:not(:last-child) {
    margin-right: 5px;
    &:after {
      content: ",";
    }
  }
`;
