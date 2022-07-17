/**
 * getRecentViewedTripsService
 * @returns recent viewed trips
 */
export const getRecentViewedTripsService = async () => {
  const request = await fetch(
    "http://localhost:3050/api/v1/get-recent-viewed-trips"
  );
  return request.json();
};
