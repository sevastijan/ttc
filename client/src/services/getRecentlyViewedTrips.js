/**
 * getRecentViewedTripsService
 * @returns recent viewed trips
 */
export const getRecentViewedTripsService = async () => {
  const request = await fetch(
    "/api/v1/get-recent-viewed-trips"
  );
  return request.json();
};
