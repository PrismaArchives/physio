//import ConnectApp from "./connect.js";

//for some reason the onChange key isn't working so I'mma just hook an event and do it myself.
export const registerSettings = function () {
    game.settings.register("toy-time", "autoPopUp", {
        name: "Pop Up Menu",
        hint: "Have the Connection menu automatically pop-up on start.",
        scope: "client",
        config: true,
        type: Boolean,
        default: true,
    });

    game.settings.register("toy-time", "autoConnect", {
        name: "Auto Connect",
        hint: "Have the module attempt to automatically connect on start-up.",
        scope: "client",
        config: true,
        type: Boolean,
        default: false,
    });
}