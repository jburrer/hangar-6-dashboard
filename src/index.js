"use strict";

// import database stuff
import { JSONFilePreset } from "lowdb/node";

// start database
const { default: origData } = await import("./data.json", { assert: { type: "json" } });
origData.planes.forEach((plane) => {
    plane.spot = "planeBox";
    origData.spots.planeBox.plane.push(plane);
});
const db = await JSONFilePreset("./db.json", origData)

// import web server stuff
const { default: express } = await import("express");
const { default: compression } = await import("compression");
const { default: bodyParser } = await import("body-parser");
const { default: cors } = await import("cors");
const { default: path } = await import("path");

// start web server
const app = express();
app.use(compression());
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(new URL(".", import.meta.url).pathname, "../frontend/build")));

// initialize array of clients (connected browsers)
let clients = [];

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
    const oldSpotName = plane.spot;
    const oldSpot = getSpot(oldSpotName);

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

    res.json(null);
    sendToAllUsers({
        "newSpot": {
            "spotName": req.query.spot,
            "spotData": JSON.stringify(newSpot)
        },
        "oldSpot": {
            "spotName": oldSpotName,
            "spotData": JSON.stringify(oldSpot)
        }
    });
});


app.get("/events", (req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/event-stream",
        "Access-Control-Allow-Origin": "*",
        "Connection": "keep-alive",
        "Cache-Control": "no-cache",
        "X-Accel-Buffering": "no"
    });
 
    const clientId = genUniqId();
    const newClient = {
        id: clientId,
        res,
    };
 
    clients.push(newClient);
 
    console.log(`${clientId} - Connection opened`);
 
    req.on('close', () => {
        console.log(`${clientId} - Connection closed`);
        clients = clients.filter(client => client.id !== clientId);
    });
});

function genUniqId(){
   return Date.now() + '-' + Math.floor(Math.random() * 1000000000);
}

function sendToAllUsers(data) {
    for(let i = 0; i < clients.length; i++){
        clients[i].res.write(`data: ${JSON.stringify(data)}\n\n`);
        clients[i].res.flush();
    }
}


// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log("App listening on port ${PORT}");
    console.log("Press Ctrl+C to quit.");
});
