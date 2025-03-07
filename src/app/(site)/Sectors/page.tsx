import Bridges from "../../../../components/Sectors/Bridges";
import DiversificationSection from "../../../../components/Sectors/Diversification";
import FrequentlyAskedQuestions from "../../../../components/Sectors/FAQ";
import Herosectors from "../../../../components/Sectors/HeroSectors";
import Metro from "../../../../components/Sectors/Metro";
import EnhancedProjectSectors from "../../../../components/Sectors/Ppt";
import Railway from "../../../../components/Sectors/Railway";
import Roadsbridges from "../../../../components/Sectors/Roads";
import Transport from "../../../../components/Sectors/TransportPlan";
import Tunnels from "../../../../components/Sectors/Tunnels";
import Urbaninfra from "../../../../components/Sectors/UrbanInfra";
import Waterway from "../../../../components/Sectors/Waterway";

export default function Sectors() {
  return (
    <>
      <Herosectors />
      <DiversificationSection />
      <EnhancedProjectSectors/>
    </>
  );
}
