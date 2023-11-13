import { registerSettings } from './settings.js';
import { ConnectApp } from './connect.js';
import { init } from './bp.js';

export let connect_app = new ConnectApp();



console.log("Hello World! This code runs immediately when the file is loaded.");

Hooks.on();

Hooks.on("init", function() {
  console.log("DBU START");
  registerSettings();

  //initializes BP Client
  init();

});

Hooks.on("ready", function() {
  console.log("This code runs once core initialization is ready and game data is available.");
  
  console.log(connect_app.options);
  if (game.settings.get("toy-time", "autoPopUp")) {
    connect_app.render(true, { userId: game.userId });
  }
  if (game.settings.get("toy-time", "autoConnect")) {
    
  }
});