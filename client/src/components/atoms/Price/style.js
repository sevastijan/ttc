import styled from "styled-components";

export const PriceContainer = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

export const RegularPrice = styled.span`
  &:last-child:not(:first-child) {
    color: #666;
    text-decoration: line-through;
  }
`;
export const SalePrice = styled.span`
  &:not(:last-child) {
    &:after {
      padding: 0 5px;
      content: "•";
      color: #666;
    }
  }
`;
