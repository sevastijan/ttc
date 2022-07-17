import PropTypes from "prop-types";

// Atoms
import StarsRating from "../../atoms/StarsRating/index.jsx";
import Price from "../../atoms/Price";
import TripParameters from "../../atoms/TripParameters";

// Styles
import {
  Tile,
  TileThumbnail,
  TileFeatures,
  TilePrice,
  TileTitle,
} from "./style";

const TripTile = ({ data }) => {
  return (
    <Tile>
      <div className="trip-tile__thumbnail">
        <TileThumbnail src={data.thumbnail.src} alt={data.thumbnail.alt} />
      </div>
      <TileFeatures>
        <TripParameters
          days={data.features.countries}
          countries={data.features.countries}
        />
        <TileTitle>{data.title}</TileTitle>
        <StarsRating value={data.rating} />
        <TilePrice>
          <Price
            price={data.price.displayPrice.regular}
            salePrice={data.price.displayPrice.sale}
            currency={data.price.currency}
          />
        </TilePrice>
      </TileFeatures>
    </Tile>
  );
};

TripTile.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.shape({
      currency: PropTypes.string.isRequired,
      displayPrice: PropTypes.shape({
        sale: PropTypes.number.isRequired,
        regular: PropTypes.number.isRequired,
      }),
    }),
    rating: PropTypes.number.isRequired,
    thumbnail: PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }),
    features: PropTypes.shape({
      countries: PropTypes.number.isRequired,
      days: PropTypes.number.isRequired,
    }),
  }),
};

export default TripTile;
