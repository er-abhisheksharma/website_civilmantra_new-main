import Bridges from "../../../../components/Sectors/Bridges";
import Herosectors from "../../../../components/Sectors/HeroSectors";
import Metro from "../../../../components/Sectors/Metro";
import Railway from "../../../../components/Sectors/Railway";
import Roadsbridges from "../../../../components/Sectors/Roads";
import Transport from "../../../../components/Sectors/TransportPlan";
import Tunnels from "../../../../components/Sectors/Tunnels";
import Urbaninfra from "../../../../components/Sectors/UrbanInfra";
import Waterway from "../../../../components/Sectors/Waterway";

export default function Sectors () {
    return(
        <>
        <Herosectors/>
        <Roadsbridges/>
        <Tunnels/>
        <Urbaninfra/>
        <Bridges/>
        <Metro/>
        <Railway/>
        <Waterway/>
        
        </>
    );
};

