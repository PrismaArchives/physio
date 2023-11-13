import { DBUActorSheet } from './module/actor/sheet/actor-sheet.js';




console.log("Hello World! This code runs immediately when the file is loaded.");

Hooks.on();

Hooks.on("init", function() {
  console.log("DBU START");

  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("dbu", DBUActorSheet, {makeDefault: true});
  
});

