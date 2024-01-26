import { PhysioActorSheet } from '../module/actor/sheet/actor-sheet.js';



console.log("Hello World! This code runs immediately when the file is loaded.");

Hooks.on();

Hooks.on("init", function() {
  console.log("DBU START");
  registerSettings();

  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("physio", PhysioActorSheet, {makeDefault: true});
  
});

