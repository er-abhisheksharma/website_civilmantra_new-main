import Herosectors from "../../../../components/Sectors/HeroSectors";
import Railway from "../../../../components/Sectors/Railway";
import Roadsbridges from "../../../../components/Sectors/RoadsnBridges";
import Transport from "../../../../components/Sectors/TransportPlan";
import Tunnels from "../../../../components/Sectors/Tunnels";
import Urbaninfra from "../../../../components/Sectors/UrbanInfra";

export default function Sectors () {
    return(
        <>
        <Herosectors/>
        <Roadsbridges/>
        <Tunnels/>
        <Transport/>
        <Urbaninfra/>
        <Railway/>
        
        </>
    );
};

