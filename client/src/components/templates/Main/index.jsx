import { useEffect } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import WebFont from "webfontloader";

// Blocks
import RecentlyViewedTrips from "../../blocks/RecentlyViewedTrips";

// Styles
import { MainContainer, SectionHeading } from "./style";

const queryClient = new QueryClient();

const Main = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Open Sans:400,500,600,700"],
      },
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <MainContainer>
        <SectionHeading size="2">Recently viewed trips</SectionHeading>
        <RecentlyViewedTrips />
      </MainContainer>
    </QueryClientProvider>
  );
};

export default Main;
