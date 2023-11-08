export class DBUActorSheet extends ActorSheet {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            template: "systems/DBU/templates/actor/actor-sheet.html"
        })
    }
}