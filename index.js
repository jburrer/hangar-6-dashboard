import { JSONFilePreset } from "lowdb/node";

"use strict";

// start database
const { default: origData } = await import("./data.json", { assert: { type: "json" } });
origData.planes.forEach((plane) => {
    plane.spot = "planeBox";
    origData.spots.planeBox.plane.push(plane);
});
const db = await JSONFilePreset("db.json", origData)

// start web server
const { default: express } = await import("express");
const { default: path } = await import("path");
const app = express();
app.use(express.static(path.join(new URL(".", import.meta.url).pathname, "./frontend/build")));

// get data on spot from db
function getSpot(spot) {
    return db.data.spots[spot];
}

// get data on plane from db
function getPlane(plane) {
    return db.data.planes.find((sPlane) => sPlane.tailNumber === plane);
}

// endpoints
app.get("/getSpot", (req, res) => {
    res.json(getSpot(req.query.spot));
});

app.get("/getPlane", (req, res) => {
    res.json(getPlane(req.query.plane));
});

// updates db to reflect that a plane has moved
app.get("/movePlane", async (req, res) => {
    const plane = getPlane(req.query.plane);
    const oldSpot = getSpot(plane.spot);

    if(Array.isArray(oldSpot.plane)) {
        oldSpot.plane.splice(oldSpot.plane.indexOf(plane), 1);
    } else {
        oldSpot.plane = null;
    }

    plane.spot = req.query.spot;
    const newSpot = getSpot(req.query.spot);
    if(Array.isArray(newSpot.plane)) {
        newSpot.plane.push(plane);
    } else {
        newSpot.plane = plane;
    }

    await db.write();

    res.json(newSpot);
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log("App listening on port ${PORT}");
    console.log("Press Ctrl+C to quit.");
});
