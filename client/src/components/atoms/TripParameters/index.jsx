// Styles
import { TripParametersContainer, TripParameter } from "./styles";

const TripParameters = ({ days, countries }) => {
  return (
    <TripParametersContainer>
      {countries === 1 && <TripParameter> 1 Country</TripParameter>}
      {countries > 1 && (
        <TripParameter>{`${countries} Countries`}</TripParameter>
      )}

      {days === 1 && <TripParameter> 1 Day</TripParameter>}
      {days > 1 && <TripParameter>{`${days} Days`}</TripParameter>}
    </TripParametersContainer>
  );
};

export default TripParameters;
