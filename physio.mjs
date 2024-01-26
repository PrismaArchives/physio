import { PhysioActorSheet } from './module/actor/sheet/actor-sheet.mjs';
import { preloadHandlebarsTemplates, registerHelpers } from './module/util.mjs';
import { physio } from './module/config.mjs';


console.log("Hello World! This code runs immediately when the file is loaded.");


Hooks.on("init", function() {
  console.log("Physio START");


  CONFIG.physio = physio;

  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("physio", PhysioActorSheet, {
    //types: ["character"],
    makeDefault: true
  });
  
  preloadHandlebarsTemplates();
  registerHelpers();
});

