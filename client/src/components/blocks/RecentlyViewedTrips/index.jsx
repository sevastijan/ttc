import { useQuery } from "react-query";

// Services
import { getRecentViewedTripsService } from "../../../services/getRecentlyViewedTrips";

// Elements
import TripTile from "../../elements/TripTile";

// Styles
import { RecentlyViewedTripsContainer } from "./style";

const RecentlyViewedTrips = () => {
  const { isLoading, error, data } = useQuery(
    "recentViewedTrips",
    getRecentViewedTripsService
  );

  if (isLoading) {
    return null;
  }

  if (error) {
    return (
      <div>{`There was a problem with your request ${error.message}`}</div>
    );
  }

  return (
    <RecentlyViewedTripsContainer>
      {data?.recentlyViewedTrips.map((item) => (
        <TripTile data={item} key={`recentlyViewedTrip-${item.id}`} />
      ))}
    </RecentlyViewedTripsContainer>
  );
};

export default RecentlyViewedTrips;
