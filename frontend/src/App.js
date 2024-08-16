import "./App.css";
import { useState, useEffect, useContext, createContext } from "react";

const DOMAIN = "https://hangar6parking.online";
//const DOMAIN = "http://localhost:8080";

// quick helper function to easily convert to title case
function titleCase(str) {
    return str.toLowerCase().replace("-", " ").split(' ').map(w => w[0].toUpperCase() +
           w.substring(1).toLowerCase()).join(' ');
}

// contexts
const PlaneToMoveContext = createContext({
    planeToMove: null,
    setPlaneToMove: () => {}
});

const RefreshTogglerContext = createContext({
    refreshToggler: false,
    setRefreshToggler: () => {}
});

const MovePlaneContext = createContext(() => {});

function RampBox() {
    return (
        <div id="ramp" className="box">
            <div className="title-box" style={{"fontSize": 1.5+"em"}}>
                Ramp
            </div>
            <table className="table-list" border="1" frame="void" rules="rows">
                <tbody>
                    <Spot name="ramp-a" box="ramp" many={false} />
                    <Spot name="ramp-b" box="ramp" many={false} />
                    <Spot name="ramp-c" box="ramp" many={false} />
                    <Spot name="ramp-d" box="ramp" many={false} />
                    <Spot name="ramp-e" box="ramp" many={false} />
                    <Spot name="ramp-f" box="ramp" many={false} />
                    <Spot name="ramp-g" box="ramp" many={false} />
                    <Spot name="ramp-h" box="ramp" many={false} />
                    <Spot name="ramp-i" box="ramp" many={false} />
                    <Spot name="ramp-j" box="ramp" many={false} />
                    <Spot name="ramp-k" box="ramp" many={false} />
                    <Spot name="ramp-l" box="ramp" many={false} />
                    <Spot name="ramp-m" box="ramp" many={false} />
                    <Spot name="ramp-n" box="ramp" many={false} />
                    <Spot name="ramp-o" box="ramp" many={false} />
                    <Spot name="ramp-p" box="ramp" many={false} />
                    <Spot name="ramp-q" box="ramp" many={false} />
                    <Spot name="ramp-r" box="ramp" many={false} />
                </tbody>
            </table>
        </div>
    );
}

function DirectionBox() {
    return (
        <div id="direction" className="box">
            <table className="center-table" border="1" frame="void">
                <tbody>
                    <tr>
                        <Spot name="xc-1" box="direction" many={true} />
                        <td>
                            <table className="center-table" border="1" frame="void">
                                <tbody>
                                    <tr>
                                        <Spot name="kmcx" box="direction" many={true} />
                                    </tr>
                                    <tr>
                                        <Spot name="northwest" box="direction" many={true} />
                                        <Spot name="northeast" box="direction" many={true} />
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <Spot name="xc-2" box="direction" many={true} />
                    </tr>
                    <tr>
                        <Spot name="xc-3" box="direction" many={true} />
                        <td>
                            <table className="center-table" border="1" frame="void">
                                <tbody>
                                    <tr>
                                        <Spot name="southwest" box="direction" many={true} />
                                        <Spot name="southeast" box="direction" many={true} />
                                    </tr>
                                    <tr>
                                        <Spot name="kcfj" box="direction" many={true} />
                                        <Spot name="kfkr" box="direction" many={true} />
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <Spot name="xc-4" box="direction" many={true} />
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

function HangarsBox() {
    return (
        <div id="hangars" className="box">
            <table className="center-table" border="1" frame="void">
                <tbody>
                    <tr>
                        <td colSpan="3" className="hangar-header">Hangar 5</td>
                        <td colSpan="3" className="hangar-header">Hangar 6W</td>
                        <td colSpan="3" className="hangar-header">Hangar 6</td>
                    </tr>
                    <tr>
                        <Spot name="h5-1" box="hangars" many={false} />
                        <Spot name="h5-2" box="hangars" many={false} />
                        <Spot name="h5-3" box="hangars" many={false} />
                        <Spot name="h6w-1" box="hangars" many={false} />
                        <td>
                            <table className="center-table" border="1" frame="void">
                                <tbody>
                                    <tr>
                                        <Spot name="h6w-7" box="hangars" many={false} />
                                    </tr>
                                    <tr>
                                        <Spot name="h6w-8" box="hangars" many={false} />
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <Spot name="h6w-4" box="hangars" many={false} />
                        <Spot name="h6-1" box="hangars" many={false} />
                        <Spot name="h6-2" box="hangars" many={false} />
                        <Spot name="h6-3" box="hangars" many={false} />
                    </tr>
                    <tr>
                        <Spot name="h5-4" box="hangars" many={false} />
                        <Spot name="h5-5" box="hangars" many={false} />
                        <Spot name="h5-6" box="hangars" many={false} />
                        <Spot name="h6w-2" box="hangars" many={false} />
                        <td>
                            <table className="center-table" border="1" frame="void">
                                <tbody>
                                    <tr>
                                        <Spot name="h6w-9" box="hangars" many={false} />
                                    </tr>
                                    <tr>
                                        <Spot name="h6w-10" box="hangars" many={false} />
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <Spot name="h6w-5" box="hangars" many={false} />
                        <td className="empty"></td>
                        <Spot name="h6-4" box="hangars" many={false} />
                        <td className="empty"></td>
                    </tr>
                    <tr>
                        <td className="empty"></td>
                        <Spot name="h5-7" box="hangars" many={false} />
                        <td className="empty"></td>
                        <Spot name="h6w-3" box="hangars" many={false} />
                        <td>
                            <table className="center-table" border="1" frame="void">
                                <tbody>
                                    <tr>
                                        <Spot name="h6w-11" box="hangars" many={false} />
                                    </tr>
                                    <tr>
                                        <Spot name="h6w-12" box="hangars" many={false} />
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <Spot name="h6w-6" box="hangars" many={false} />
                        <td className="empty"></td>
                        <td className="empty"></td>
                        <td className="empty"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

function OtherBox() {
    return (
        <div id="other" className="box">
            <table id="other-table-list" className="table-list"
                   border="1" frame="void" rules="rows">
                <tbody>
                    <Spot name="approaches" box="other" many={true} />
                    <Spot name="landings" box="other" many={true} />
                    <Spot name="purdue-aviation" box="other" many={true} />
                </tbody>
            </table>
        </div>
    );
}

function TDoorsBox() {
    return (
        <div id="t-doors" className="box">
            <div className="title-box" style={{"fontSize": 1.5+"em"}}>T Doors</div>
            <table className="table-list" border="1" frame="void" rules="rows">
                <tbody>
                    <Spot name="t-1" box="tdoors" many={false} />
                    <Spot name="t-2" box="tdoors" many={false} />
                    <Spot name="t-3" box="tdoors" many={false} />
                    <Spot name="t-4" box="tdoors" many={false} />
                    <Spot name="t-5" box="tdoors" many={false} />
                    <Spot name="t-6" box="tdoors" many={false} />
                    <Spot name="t-7" box="tdoors" many={false} />
                    <Spot name="t-8" box="tdoors" many={false} />
                    <Spot name="t-9" box="tdoors" many={false} />
                    <Spot name="t-10" box="tdoors" many={false} />
                </tbody>
            </table>
        </div>
    );
}

function Spot({ name, box, many }) {
    const { planeToMove, setPlaneToMove } = useContext(PlaneToMoveContext);
    const { refreshToggler, setRefreshToggler } = useContext(RefreshTogglerContext);
    const movePlane = useContext(MovePlaneContext);
    const [spotData, setSpotData] = useState(null);
    useEffect(() => {
        async function getSpotData() {
            const response = await fetch(DOMAIN + "/getSpot?spot=" + name);
            return response.json();
        }
        getSpotData()
            .then(spotData => setSpotData(spotData))
            .catch(e => console.log(e));
    }, [name, refreshToggler]);
    if (spotData) {
        let plane;
        let planes = [];
        let glow;
        if (many) {
            for (let i = 0; i < spotData.plane.length; i++) {
                planes.push(
                    <Plane plane={spotData.plane[i]} />
                );
            }
            glow = (planeToMove ? "glow" : "");
        } else {
            if (spotData.plane) {
                plane = (
                    <Plane plane={spotData.plane} />
                );
            }
            glow = (planeToMove && !spotData.plane ? "glow" : "");
        }
        switch (box) {
            case "ramp":
                let upperChar = name.replace("ramp-", "").toUpperCase();
                return (
                    <tr id={name} className={glow}
                            onClick={() => movePlane(name, planeToMove, glow)}>
                        <td>{upperChar}</td>
                        <td>{plane}</td>
                    </tr>
                );
            case "tdoors":
                let n = name.replace("t-", "");
                return (
                    <tr id={name} className={glow}
                            onClick={() => movePlane(name, planeToMove, glow)}>
                        <td>{n}</td>
                        <td>
                            {plane} 
                        </td>
                    </tr>
                );
            case "hangars":
                let hangarsHeightVal = "68px";
                if ([ "7", "8", "9", "10", "11", "12" ].includes(name.replace("h6w-",""))) {
                    hangarsHeightVal = "34px";
                }
                return (
                    <td id={name} width="75px" height={hangarsHeightVal}
                            onClick={() => movePlane(name, planeToMove, glow)}>
                        <div className={glow}>{plane}</div>
                    </td>
                );
            case "direction":
                let classNameVal = "many";
                let colSpanVal = 1;
                let displayName;
                let widthVal;
                let heightVal;
                if (name.length === 4) {
                    displayName = name.toUpperCase();
                } else {
                    displayName = titleCase(name);
                }
                if (name.includes("xc")) {
                    displayName = "XC";
                    classNameVal += " vert";
                    widthVal = "75px";
                    heightVal = "148px";
                } else {
                    heightVal = "70px";
                }
                if (name === "kmcx") {
                    colSpanVal = 2;
                }
                return (
                    <td id={name} className={glow}
                            onClick={() => movePlane(name, planeToMove, glow)}
                            width={widthVal} height={heightVal} colSpan={colSpanVal}>
                        {displayName}
                        <div className={classNameVal}>{planes}</div>
                    </td>
                );
            case "other":
                let otherDisplayName = titleCase(name);
                return (
                    <tr id={name} className={glow}
                            onClick={() => movePlane(name, planeToMove, glow)}>
                        <td>{otherDisplayName}</td>
                        <td>{planes}</td>
                    </tr>
                );
            default:
        }
    }
}

function PlaneBox() {
    const { refreshToggler, setRefreshToggler } = useContext(RefreshTogglerContext);
    const [planes, setPlanes] = useState(null);
    useEffect(() => {
        async function getPlanes() {
            const response = await fetch(DOMAIN + "/getSpot?spot=planeBox");
            return response.json();
        }
        getPlanes()
            .then(planes => setPlanes(planes.plane))
            .catch(e => console.log(e));
    }, [refreshToggler]);
    if (planes) {
        const planeElements = [];
        planes.forEach((plane) => {
            planeElements.push(
                <Plane plane={plane} />
            );
        });
        return (
            <div id="planeBox">
                {planeElements}
            </div>
        );
    }
}

function Plane({ plane }) {
    const { planeToMove, setPlaneToMove } = useContext(PlaneToMoveContext);
    let planeClass = "plane " + plane.type;
    if (planeToMove === plane.tailNumber) {
        planeClass += " glow";
    }
    return (
        <span id={plane.tailNumber} className={planeClass}
                onClick={() => setPlaneToMove(plane.tailNumber)}>
            {plane.tailNumber}
        </span>
    );
}

export default function App() {
    const [planeToMove, setPlaneToMove] = useState(null);
    const [refreshToggler, setRefreshToggler] = useState(null);
    async function movePlane(spotName, plane, eligible) {
        if (planeToMove && eligible) {
            fetch(DOMAIN + "/movePlane?plane=" + plane + "&spot=" + spotName)
                .catch(e => console.log(e));
            setPlaneToMove(null);
        }
    }
    useEffect(() => {
        let mount = true;
        let events;
        let timer;
        let createEvents = () => {
            if(events){
                events.close();
            }
            events = new EventSource(DOMAIN + "/events");
            events.onmessage = (event) => {
                if(mount){
                    setRefreshToggler(!refreshToggler);
                }
            };
            events.onerror = (err) => {
                timer = setTimeout(() => {
                    createEvents();
                }, 1000);
            };
        };
        createEvents();
        return () => {
            mount = false;
            clearTimeout(timer);
            events.close();
        }
    }, [refreshToggler, setRefreshToggler]);
    return (
        <div>
            <PlaneToMoveContext.Provider value={{ planeToMove, setPlaneToMove }}>
            <RefreshTogglerContext.Provider value={{ refreshToggler, setRefreshToggler}}>
            <MovePlaneContext.Provider value={movePlane}>
                <div id="frame">
                    <div id="title" className="title-box">
                        <h1>Aircraft Locations</h1>
                    </div>
                    <RampBox />
                    <TDoorsBox />
                    <HangarsBox />
                    <DirectionBox />
                    <OtherBox />
                </div>
                <div id="note">
                    Made with love by Johnny Burrer :)
                    Reach out on GroupMe with any feedback/bug reports!
                </div>
                <PlaneBox /> 
            </MovePlaneContext.Provider>
            </RefreshTogglerContext.Provider>
            </PlaneToMoveContext.Provider>
        </div>
    );
}
