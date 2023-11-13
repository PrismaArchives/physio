

export let client;

export let connectedList = [];

export let listChanged = false;

// a list for all remove devices.
export let removedList = [];

//server_address


//always runs this before connecting/disconnecting.
// creates client and listeners for devices connecting and disconnecting.
export async function init() {
    console.log("Initializing Intiface client.")
    client = new Buttplug.ButtplugClient("Foundry Toy Time Client");

    client.addListener("deviceadded", (device) => {
        addDeviceToList(device);
        console.log(`Device Connected: ${device.name}`);

        console.log("Client currently knows about these devices:");
        client.devices.forEach((device) => console.log(`- ${device.name}`));
        
        console.log("Sending commands");
        
        
    });

    client.addListener("deviceremoved", (device) => {
        removeDeviceFromList(device);
        console.log(`Device Removed: ${device.name}`)
    
    });
}


export async function runAsyncConnect(address) {
    console.log("Starting Connection to Intiface");

    //check to see if init was called if not call it. If properly implemented won't occur.
    if(!client) {
        init();
    }

    // As of v3, Buttplug no longer requires initialization.

    // You'll need to have Intiface Central open on your system
    // Checking if client is already connected
    if(!client.connected) {
        const connector = new Buttplug.ButtplugBrowserWebsocketClientConnector(address);

        try {
            await client.connect(connector);
            console.log("It's Toy Time!");
            await client.startScanning();
        }
        catch (ex) {
            console.log("Connection Failed");
        }
    } else {
        console.log("Already Connected.");
    }

}

// Add to the list of connected devices
export async function addDeviceToList(device) {
    listChanged = true;
}

//remove from list of connected devices
export async function removeDeviceFromList(device) {
    removedList.push(device);
    listChanged = true;
}

export function listChangeFinished() {
    listChanged = false;
}

//takes a value from 0-100
export async function asyncDeviceControl(device, value) {
    // BP implementation uses a float value from 0.0-1.0 so converting.
    device.vibrate(value/100);
}



export function asyncDisconnect() {
    if(client.connected) {
        removedList = client.devices;
        client.disconnect();
    }   
}