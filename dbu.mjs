import { DBUActorSheet } from './module/actor/sheet/actor-sheet.mjs';
import { preloadHandlebarsTemplates, registerHelpers } from './module/util.mjs';
import { dbu } from './module/config.mjs';


console.log("Hello World! This code runs immediately when the file is loaded.");


Hooks.on("init", function() {
  console.log("DBU START");


  CONFIG.dbu = dbu;

  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("dbu", DBUActorSheet, {
    //types: ["character"],
    makeDefault: true
  });
  
  preloadHandlebarsTemplates();
  registerHelpers();
});

