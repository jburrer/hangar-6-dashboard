import "./App.css";
import { useState } from "react";

// quick helper function to easily convert to title case
function titleCase(str) {
    return str.toLowerCase().replace("-", " ").split(' ').map(w => w[0].toUpperCase() +
           w.substring(1).toLowerCase()).join(' ');
}

// transfers all planes into planeBox on app start
const origData = require("./data.json");
origData.planes.forEach((plane) => {
    plane.spot = "planeBox";
    origData.spots.planeBox.plane.push(plane);
});

function RampBox({ data, updateData, moveMode, setMoveMode, moveHere }) {
    return (
        <div id="ramp" className="box">
            <div className="box title-box" style={{"fontSize": 1.5+"em"}}>
                Ramp
            </div>
            <table className="table-list" border="1" frame="void" rules="rows">
                <tbody>
                    <RampBoxItem name="ramp-a" data={data} updateData={updateData}
                        moveMode={moveMode} setMoveMode={setMoveMode} moveHere={moveHere} />
                    <RampBoxItem name="ramp-b" data={data} updateData={updateData}
                        moveMode={moveMode} setMoveMode={setMoveMode} moveHere={moveHere} />
                    <RampBoxItem name="ramp-c" data={data} updateData={updateData}
                        moveMode={moveMode} setMoveMode={setMoveMode} moveHere={moveHere} />
                    <RampBoxItem name="ramp-d" data={data} updateData={updateData}
                        moveMode={moveMode} setMoveMode={setMoveMode} moveHere={moveHere} />
                    <RampBoxItem name="ramp-e" data={data} updateData={updateData}
                        moveMode={moveMode} setMoveMode={setMoveMode} moveHere={moveHere} />
                    <RampBoxItem name="ramp-f" data={data} updateData={updateData}
                        moveMode={moveMode} setMoveMode={setMoveMode} moveHere={moveHere} />
                    <RampBoxItem name="ramp-g" data={data} updateData={updateData}
                        moveMode={moveMode} setMoveMode={setMoveMode} moveHere={moveHere} />
                    <RampBoxItem name="ramp-h" data={data} updateData={updateData}
                        moveMode={moveMode} setMoveMode={setMoveMode} moveHere={moveHere} />
                    <RampBoxItem name="ramp-i" data={data} updateData={updateData}
                        moveMode={moveMode} setMoveMode={setMoveMode} moveHere={moveHere} />
                    <RampBoxItem name="ramp-j" data={data} updateData={updateData}
                        moveMode={moveMode} setMoveMode={setMoveMode} moveHere={moveHere} />
                    <RampBoxItem name="ramp-k" data={data} updateData={updateData}
                        moveMode={moveMode} setMoveMode={setMoveMode} moveHere={moveHere} />
                    <RampBoxItem name="ramp-l" data={data} updateData={updateData}
                        moveMode={moveMode} setMoveMode={setMoveMode} moveHere={moveHere} />
                    <RampBoxItem name="ramp-m" data={data} updateData={updateData}
                        moveMode={moveMode} setMoveMode={setMoveMode} moveHere={moveHere} />
                    <RampBoxItem name="ramp-n" data={data} updateData={updateData}
                        moveMode={moveMode} setMoveMode={setMoveMode} moveHere={moveHere} />
                    <RampBoxItem name="ramp-o" data={data} updateData={updateData}
                        moveMode={moveMode} setMoveMode={setMoveMode} moveHere={moveHere} />
                    <RampBoxItem name="ramp-p" data={data} updateData={updateData}
                        moveMode={moveMode} setMoveMode={setMoveMode} moveHere={moveHere} />
                    <RampBoxItem name="ramp-q" data={data} updateData={updateData}
                        moveMode={moveMode} setMoveMode={setMoveMode} moveHere={moveHere} />
                    <RampBoxItem name="ramp-r" data={data} updateData={updateData}
                        moveMode={moveMode} setMoveMode={setMoveMode} moveHere={moveHere} />
                </tbody>
            </table>
        </div>
    );
}

function RampBoxItem({ name, data, updateData, moveMode, setMoveMode, moveHere }) {
    let plane;
    if (data.spots[name].plane) {
        plane = (
            <Plane plane={data.spots[name].plane} moveMode={moveMode}
                setMoveMode={setMoveMode} />
        );
    }
    let glow = (moveMode && !data.spots[name].plane ? "glow" : "");
    let upperChar = name.replace("ramp-", "").toUpperCase();
    return (
        <tr id={name} className={glow}
                onClick={() => moveHere(name, data, updateData, moveMode, setMoveMode)}>
            <td>{upperChar}</td>
            <td>{plane}</td>
        </tr>
    );
}

function DirectionBox({ data, updateData, moveMode, setMoveMode, moveHere }) {
    return (
        <div id="direction" className="box">
            <table className="center-table" border="1" frame="void">
                <tbody>
                    <tr>
                        <DirectionBoxItem name="xc-1" data={data} updateData={updateData}
                            moveMode={moveMode} setMoveMode={setMoveMode} moveHere={moveHere} />
                        <td>
                            <table className="center-table" border="1" frame="void">
                                <tbody>
                                    <tr>
                                        <DirectionBoxItem name="kmcx"
                                            data={data} updateData={updateData}
                                            moveMode={moveMode} setMoveMode={setMoveMode}
                                            moveHere={moveHere} />
                                    </tr>
                                    <tr>
                                        <DirectionBoxItem name="northwest"
                                            data={data} updateData={updateData}
                                            moveMode={moveMode} setMoveMode={setMoveMode}
                                            moveHere={moveHere} />
                                        <DirectionBoxItem name="northeast"
                                            data={data} updateData={updateData}
                                            moveMode={moveMode} setMoveMode={setMoveMode}
                                            moveHere={moveHere} />
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <DirectionBoxItem name="xc-2" data={data} updateData={updateData}
                            moveMode={moveMode} setMoveMode={setMoveMode} moveHere={moveHere} />
                    </tr>
                    <tr>
                        <DirectionBoxItem name="xc-3" data={data} updateData={updateData}
                            moveMode={moveMode} setMoveMode={setMoveMode} moveHere={moveHere} />
                        <td>
                            <table className="center-table" border="1" frame="void">
                                <tbody>
                                    <tr>
                                        <DirectionBoxItem name="southwest"
                                            data={data} updateData={updateData}
                                            moveMode={moveMode} setMoveMode={setMoveMode}
                                            moveHere={moveHere} />
                                        <DirectionBoxItem name="southeast"
                                            data={data} updateData={updateData}
                                            moveMode={moveMode} setMoveMode={setMoveMode}
                                            moveHere={moveHere} />
                                    </tr>
                                    <tr>
                                        <DirectionBoxItem name="kcfj"
                                            data={data} updateData={updateData}
                                            moveMode={moveMode} setMoveMode={setMoveMode}
                                            moveHere={moveHere} />
                                        <DirectionBoxItem name="kfkr"
                                            data={data} updateData={updateData}
                                            moveMode={moveMode} setMoveMode={setMoveMode}
                                            moveHere={moveHere} />
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <DirectionBoxItem name="xc-4" data={data} updateData={updateData}
                            moveMode={moveMode} setMoveMode={setMoveMode} moveHere={moveHere} />
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

function DirectionBoxItem({ name, data, updateData, moveMode, setMoveMode, moveHere }) {
    let planes = [];
    for (let i = 0; i < data.spots[name].plane.length; i++) {
        planes.push(
            <Plane plane={data.spots[name].plane[i]} moveMode={moveMode}
                setMoveMode={setMoveMode} />
        );
    }
    let glow = (moveMode ? "glow" : "");
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
                onClick={() => moveHere(name, data, updateData, moveMode, setMoveMode)}
                width={widthVal} height={heightVal} colSpan={colSpanVal}>
            {displayName}
            <div className={classNameVal}>{planes}</div>
        </td>
    );
}

function HangarsBox({ data, updateData, moveMode, setMoveMode, moveHere }) {
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
                        <HangarsBoxItem name="h5-1" spotType="full" data={data}
                            updateData={updateData} moveMode={moveMode}
                            setMoveMode={setMoveMode} moveHere={moveHere}/>
                        <HangarsBoxItem name="h5-2" spotType="full" data={data}
                            updateData={updateData} moveMode={moveMode}
                            setMoveMode={setMoveMode} moveHere={moveHere}/>
                        <HangarsBoxItem name="h5-3" spotType="full" data={data}
                            updateData={updateData} moveMode={moveMode}
                            setMoveMode={setMoveMode} moveHere={moveHere}/>
                        <HangarsBoxItem name="h6w-1" spotType="full" data={data}
                            updateData={updateData} moveMode={moveMode}
                            setMoveMode={setMoveMode} moveHere={moveHere}/>
                        <td>
                            <table className="center-table" border="1" frame="void">
                                <tbody>
                                    <tr>
                                        <HangarsBoxItem name="h6w-7" spotType="half" data={data}
                                            updateData={updateData} moveMode={moveMode}
                                            setMoveMode={setMoveMode} moveHere={moveHere}/>
                                    </tr>
                                    <tr>
                                        <HangarsBoxItem name="h6w-8" spotType="half" data={data}
                                            updateData={updateData} moveMode={moveMode}
                                            setMoveMode={setMoveMode} moveHere={moveHere}/>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <HangarsBoxItem name="h6w-4" spotType="full" data={data}
                            updateData={updateData} moveMode={moveMode}
                            setMoveMode={setMoveMode} moveHere={moveHere}/>
                        <HangarsBoxItem name="h6-1" spotType="full" data={data}
                            updateData={updateData} moveMode={moveMode}
                            setMoveMode={setMoveMode} moveHere={moveHere}/>
                        <HangarsBoxItem name="h6-2" spotType="full" data={data}
                            updateData={updateData} moveMode={moveMode}
                            setMoveMode={setMoveMode} moveHere={moveHere}/>
                        <HangarsBoxItem name="h6-3" spotType="full" data={data}
                            updateData={updateData} moveMode={moveMode}
                            setMoveMode={setMoveMode} moveHere={moveHere}/>
                    </tr>
                    <tr>
                        <HangarsBoxItem name="h5-4" spotType="full" data={data}
                            updateData={updateData} moveMode={moveMode}
                            setMoveMode={setMoveMode} moveHere={moveHere}/>
                        <HangarsBoxItem name="h5-5" spotType="full" data={data}
                            updateData={updateData} moveMode={moveMode}
                            setMoveMode={setMoveMode} moveHere={moveHere}/>
                        <HangarsBoxItem name="h5-6" spotType="full" data={data}
                            updateData={updateData} moveMode={moveMode}
                            setMoveMode={setMoveMode} moveHere={moveHere}/>
                        <HangarsBoxItem name="h6w-2" spotType="full" data={data}
                            updateData={updateData} moveMode={moveMode}
                            setMoveMode={setMoveMode} moveHere={moveHere}/>
                        <td>
                            <table className="center-table" border="1" frame="void">
                                <tbody>
                                    <tr>
                                        <HangarsBoxItem name="h6w-9" spotType="half" data={data}
                                            updateData={updateData} moveMode={moveMode}
                                            setMoveMode={setMoveMode} moveHere={moveHere}/>
                                    </tr>
                                    <tr>
                                        <HangarsBoxItem name="h6w-10" spotType="half" data={data}
                                            updateData={updateData} moveMode={moveMode}
                                            setMoveMode={setMoveMode} moveHere={moveHere}/>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <HangarsBoxItem name="h6w-5" spotType="full" data={data}
                            updateData={updateData} moveMode={moveMode}
                            setMoveMode={setMoveMode} moveHere={moveHere}/>
                        <td className="empty"></td>
                        <HangarsBoxItem name="h6-4" spotType="full" data={data}
                            updateData={updateData} moveMode={moveMode}
                            setMoveMode={setMoveMode} moveHere={moveHere}/>
                        <td className="empty"></td>
                    </tr>
                    <tr>
                        <td className="empty"></td>
                        <HangarsBoxItem name="h5-7" spotType="full" data={data}
                            updateData={updateData} moveMode={moveMode}
                            setMoveMode={setMoveMode} moveHere={moveHere}/>
                        <td className="empty"></td>
                        <HangarsBoxItem name="h6w-3" spotType="full" data={data}
                            updateData={updateData} moveMode={moveMode}
                            setMoveMode={setMoveMode} moveHere={moveHere}/>
                        <td>
                            <table className="center-table" border="1" frame="void">
                                <tbody>
                                    <tr>
                                        <HangarsBoxItem name="h6w-11" spotType="half" data={data}
                                            updateData={updateData} moveMode={moveMode}
                                            setMoveMode={setMoveMode} moveHere={moveHere}/>
                                    </tr>
                                    <tr>
                                        <HangarsBoxItem name="h6w-12" spotType="half" data={data}
                                            updateData={updateData} moveMode={moveMode}
                                            setMoveMode={setMoveMode} moveHere={moveHere}/>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <HangarsBoxItem name="h6w-6" spotType="full" data={data}
                            updateData={updateData} moveMode={moveMode}
                            setMoveMode={setMoveMode} moveHere={moveHere}/>
                        <td className="empty"></td>
                        <td className="empty"></td>
                        <td className="empty"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

function HangarsBoxItem({ name, spotType, data, updateData, moveMode, setMoveMode, moveHere }) {
    let plane;
    if (data.spots[name].plane) {
        plane = (
            <Plane plane={data.spots[name].plane} moveMode={moveMode}
                setMoveMode={setMoveMode} />
        );
    }
    let glow = (moveMode && !data.spots[name].plane ? "glow" : "");
    let heightVal = "68px";
    if (spotType === "half") {
        heightVal = "34px";
    }
    return (
        <td id={name} className={glow} width="75px" height={heightVal}
                onClick={() => moveHere(name, data, updateData, moveMode, setMoveMode)}>
            <div>{plane}</div>
        </td>
    );
}

function OtherBox({ data, updateData, moveMode, setMoveMode, moveHere }) {
    return (
        <div id="other" className="box">
            <table id="other-table-list" className="table-list"
                   border="1" frame="void" rules="rows">
                <tbody>
                    <OtherBoxItem name="approaches" data={data} updateData={updateData}
                        moveMode={moveMode} setMoveMode={setMoveMode} moveHere={moveHere} />
                    <OtherBoxItem name="landings" data={data} updateData={updateData}
                        moveMode={moveMode} setMoveMode={setMoveMode} moveHere={moveHere} />
                    <OtherBoxItem name="purdue-aviation" data={data} updateData={updateData}
                        moveMode={moveMode} setMoveMode={setMoveMode} moveHere={moveHere} />
                </tbody>
            </table>
        </div>
    );
}

function OtherBoxItem({ name, data, updateData, moveMode, setMoveMode, moveHere }) {
    let planes = [];
    for (let i = 0; i < data.spots[name].plane.length; i++) {
        planes.push(
            <Plane plane={data.spots[name].plane[i]} moveMode={moveMode}
                setMoveMode={setMoveMode} />
        );
    }
    let glow = (moveMode ? "glow" : "");
    let displayName = titleCase(name);
    return (
        <tr id={name} className={glow}
                onClick={() => moveHere(name, data, updateData, moveMode, setMoveMode)}>
            <td>{displayName}</td>
            <td>{planes}</td>
        </tr>
    );
}

function TDoorsBox({ data, updateData, moveMode, setMoveMode, moveHere }) {
    return (
        <div id="t-doors" className="box">
            <div className="box title-box" style={{"fontSize": 1.5+"em"}}>T Doors</div>
            <table className="table-list" border="1" frame="void" rules="rows">
                <tbody>
                    <TDoorsBoxItem name="t-1" data={data} updateData={updateData}
                        moveMode={moveMode} setMoveMode={setMoveMode} moveHere={moveHere} />
                    <TDoorsBoxItem name="t-2" data={data} updateData={updateData}
                        moveMode={moveMode} setMoveMode={setMoveMode} moveHere={moveHere} />
                    <TDoorsBoxItem name="t-3" data={data} updateData={updateData}
                        moveMode={moveMode} setMoveMode={setMoveMode} moveHere={moveHere} />
                    <TDoorsBoxItem name="t-4" data={data} updateData={updateData}
                        moveMode={moveMode} setMoveMode={setMoveMode} moveHere={moveHere} />
                    <TDoorsBoxItem name="t-5" data={data} updateData={updateData}
                        moveMode={moveMode} setMoveMode={setMoveMode} moveHere={moveHere} />
                    <TDoorsBoxItem name="t-6" data={data} updateData={updateData}
                        moveMode={moveMode} setMoveMode={setMoveMode} moveHere={moveHere} />
                    <TDoorsBoxItem name="t-7" data={data} updateData={updateData}
                        moveMode={moveMode} setMoveMode={setMoveMode} moveHere={moveHere} />
                    <TDoorsBoxItem name="t-8" data={data} updateData={updateData}
                        moveMode={moveMode} setMoveMode={setMoveMode} moveHere={moveHere} />
                    <TDoorsBoxItem name="t-9" data={data} updateData={updateData}
                        moveMode={moveMode} setMoveMode={setMoveMode} moveHere={moveHere} />
                    <TDoorsBoxItem name="t-10" data={data} updateData={updateData}
                        moveMode={moveMode} setMoveMode={setMoveMode} moveHere={moveHere} />
                </tbody>
            </table>
        </div>
    );
}

function TDoorsBoxItem({ name, data, updateData, moveMode, setMoveMode, moveHere }) {
    let plane;
    if (data.spots[name].plane) {
        plane = (
            <Plane plane={data.spots[name].plane} moveMode={moveMode}
                setMoveMode={setMoveMode} />
        );
    }
    let glow = (moveMode && !data.spots[name].plane ? "glow" : "");
    let n = name.replace("t-", "");
    return (
        <tr id={name} className={glow}
                onClick={() => moveHere(name, data, updateData, moveMode, setMoveMode)}>
            <td>{n}</td>
            <td>
                {plane} 
            </td>
        </tr>
    );
}

function PlaneBox({ data, moveMode, setMoveMode }) {
    const planeElements = [];
    data.spots.planeBox.plane.forEach((plane) => {
        planeElements.push(
            <Plane plane={plane} moveMode={moveMode} setMoveMode={setMoveMode} />
        );
    });
    return (
        <div>
            {planeElements}
        </div>
    );
}

function Plane({ plane, moveMode, setMoveMode }) {
    let planeClass = "plane " + plane.type;
    if (moveMode === plane.tailNumber) {
        planeClass += " glow";
    }
    return (
        <span id={plane.tailNumber} className={planeClass}
              onClick={() => setMoveMode(plane.tailNumber)}>
            {plane.tailNumber}
        </span>
    );

}

export default function App() {

    // state
    const [data, updateData] = useState(origData);
    const [moveMode, setMoveMode] = useState(null);

    // function to move plane
    function moveHere(spotName, data, updateData, moveMode, setMoveMode) {
        if (moveMode) {
            let planeData;
            data.planes.forEach((plane) => {
                if (plane.tailNumber === moveMode) {
                    planeData = plane;
                }
            });
            if (Array.isArray(data.spots[planeData.spot].plane)) {
                data.spots[planeData.spot].plane.splice(
                    data.spots[planeData.spot].plane.indexOf(planeData), 1);
            } else {
                data.spots[planeData.spot].plane = null;
            }
            planeData.spot = spotName;
            if (Array.isArray(data.spots[spotName].plane)) {
                data.spots[spotName].plane.push(planeData);
            } else {
                data.spots[spotName].plane = planeData;
            }
            updateData(data);
            setMoveMode(null);
        }
    }

    return (
        <div>
            <div id="frame">
                <div id="title" className="box title-box">
                    <h1>Aircraft Locations</h1>
                </div>
                <RampBox
                    data={data}
                    updateData={updateData}
                    moveMode={moveMode}
                    setMoveMode={setMoveMode}
                    moveHere={moveHere}
                />
                <DirectionBox
                    data={data}
                    updateData={updateData}
                    moveMode={moveMode}
                    setMoveMode={setMoveMode}
                    moveHere={moveHere}
                />
                <HangarsBox
                    data={data}
                    updateData={updateData}
                    moveMode={moveMode}
                    setMoveMode={setMoveMode}
                    moveHere={moveHere}
                />
                <OtherBox
                    data={data}
                    updateData={updateData}
                    moveMode={moveMode}
                    setMoveMode={setMoveMode}
                    moveHere={moveHere}
                />
                <TDoorsBox
                    data={data}
                    updateData={updateData}
                    moveMode={moveMode}
                    setMoveMode={setMoveMode}
                    moveHere={moveHere}
                />
            </div>
            <div id="note">
                Made with love by Johnny Burrer :)
                Reach out on GroupMe with any feedback/bug reports!
            </div>
            <PlaneBox
                data={data}
                moveMode={moveMode}
                setMoveMode={setMoveMode}
            /> 
        </div>
    );
}
