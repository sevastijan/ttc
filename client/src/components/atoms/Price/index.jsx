import PropTypes from "prop-types";

// Helpers
import { formatNumber, decodeCurrencyCode } from "../../../helpers/numbers";

// Styles
import { PriceContainer, RegularPrice, SalePrice } from "./style";

const Price = ({ price, salePrice, currency }) => {
  return (
    <PriceContainer>
      {salePrice > 0 && (
        <SalePrice>
          From {decodeCurrencyCode(currency)}
          {formatNumber(salePrice)}
        </SalePrice>
      )}
      <RegularPrice>
        Price {decodeCurrencyCode(currency)}
        {formatNumber(price)}
      </RegularPrice>
    </PriceContainer>
  );
};

Price.propTypes = {
  price: PropTypes.number.isRequired,
  salePrice: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Price;
