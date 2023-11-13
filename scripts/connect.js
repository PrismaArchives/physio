import { runAsyncConnect } from "./bp.js";
import { asyncDisconnect } from "./bp.js";
import { client } from "./bp.js";
import { listChanged } from "./bp.js";
import { listChangeFinished } from "./bp.js";
import { removedList } from "./bp.js";
import { vibratorElementSetAttr } from "./util.js";
import { asyncDeviceControl } from "./bp.js";

export class ConnectApp extends FormApplication {

    static get defaultOptions() {
        const defaults = super.defaultOptions;
        const overrides = {
            height: '900px',
            width: 'auto',
            id: 'toy-time',
            template: "./modules/toy-time/scripts/index.html",
            title: 'Toy Time Connection',
            closeOnSubmit: false,
            userId: game.userId,
            tabs: [{ navSelector: ".tabs", contentSelector: ".content", initial: "tab1" }]
        };
        return mergeObject(defaults, overrides);
    }



    getData() {
        // Send data to the template
        return {
            message: "Disconnected"
        };
    }

    activateListeners(html) {
        //Note, using forms as foundry has nice formatting for form buttons already. 
        //if using Application must have a return false in the form submit.
        super.activateListeners(html);
        let address = $(document.getElementById('address')).val();
        let device_list = {};
        let DevicesInterval;
        $('#connectionForm').submit(async function () {
            let device_tab = $(document.getElementById('device-tab'));
            if ($(document.activeElement).attr('id') == "btn-connect") {
                runAsyncConnect(address);
                //checks to see if its the first connection. If so sets up interval. otherwise ignores.
                if (!DevicesInterval) {
                    console.log("Created Interval");
                    DevicesInterval = setInterval(function () {
                        if (listChanged) {
                            console.log("List Updated");
                            if (removedList.length > 0) {
                                removedList.forEach((device) => {
                                    let deviceDiv = document.getElementById(device.index);
                                    deviceDiv.remove();
                                    removedList.splice(removedList.indexOf(device), 1);
                                    console.log(removedList.length);
                                });
                            }
                            if (client.connected && client.devices) {
                                client.devices.forEach((device) => {
                                    //check for id of deviceDive
                                    if (!document.getElementById(device.index)) {
                                        let deviceDiv = document.createElement("div");
                                        deviceDiv.setAttribute('id', device.index);

                                        //set this up so it can set one up for each vibrator/rotator/etc. for loop?
                                        // currently we just use all motors at once.
                                        let vibratorEl = document.createElement('input');
                                        vibratorElementSetAttr(vibratorEl);
                                        let device_name_text = document.createTextNode(device.name);
                                        device_tab.append(deviceDiv);
                                        deviceDiv.append(device_name_text);
                                        deviceDiv.append(vibratorEl);



                                    }
                                });
                            }
                            listChangeFinished();
                        }
                        //checks if there was a connection change. if so change connectionStatus
                        //IMPLEMENT
                    }, 500);

                }


            }
            //if client is connected and disconnect button is hit, disconnect.
            if ($(document.activeElement).attr('id') == "btn-disconnect") {
                asyncDisconnect();
            }
            if ($(document.activeElement).attr('id') == "btn-refresh") {
                console.log(game.user.character);
                //console.log(game.actors);
            }


            //DO NOT DELETE BREAKS EVERYTHING
            return false;
        });


        $("#device-tab").change(async function () {
            //gets parent(div) id (the device)
            let deviceDiv = $(document.activeElement).parent();
            let deviceIndex = deviceDiv.attr('id');
            let vibratorEl = $(document.activeElement);
            let value = vibratorEl.val();

            console.log(client.devices[deviceIndex]);
            //asyncDeviceControl(device, value);
            client.devices.forEach((device) => {
                if(device.index == deviceIndex) {
                    asyncDeviceControl(device, value);
                }
            });

            console.log(value);
            console.log(client.devices);
            //console.log(deviceDiv);
            

        });
    }


    async _updateObject(event, formData) {

    }
}

