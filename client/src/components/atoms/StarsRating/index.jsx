import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

// Styles
import { StarIcon, RatingContainer, RatingValue } from "./style";

const StarsRating = ({ value, quantity = 5 }) => {
  const rating = Array.from({ length: quantity }, (_, i) => i + 1).map((x) => {
    if (x < value) {
      return <StarIcon type="full" key={uuidv4()} />;
    }

    if (x > value && x - value <= 0.5) {
      return <StarIcon type="half" key={uuidv4()} />;
    }

    return <StarIcon type="empty" key={uuidv4()} />;
  });

  return (
    <RatingContainer>
      {rating}
      <RatingValue>{value}</RatingValue>
    </RatingContainer>
  );
};

StarsRating.proptype = {
  value: PropTypes.number.isRequired,
  quantity: PropTypes.number,
};

StarsRating.defaultProps = {
  quantity: 5,
};

export default StarsRating;
