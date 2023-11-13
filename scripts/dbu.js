import { DBUActorSheet } from '../module/actor/sheet/actor-sheet.js';
import { ConnectApp } from './connect.js';
import { init } from './bp.js';

export let connect_app = new ConnectApp();



console.log("Hello World! This code runs immediately when the file is loaded.");

Hooks.on();

Hooks.on("init", function() {
  console.log("DBU START");
  registerSettings();

  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("dbu", DBUActorSheet, {makeDefault: true});
  
});

