import { DBUActorSheet } from './module/actor/sheet/actor-sheet.mjs';
import { preloadHandlebarsTemplates } from './module/util.mjs';



console.log("Hello World! This code runs immediately when the file is loaded.");


Hooks.on("init", function() {
  console.log("DBU START");
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("dbu", DBUActorSheet, {
    types: ["character"],
    makeDefault: true
  });
  
  preloadHandlebarsTemplates();
});

