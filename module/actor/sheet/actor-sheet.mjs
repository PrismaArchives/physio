export class DBUActorSheet extends ActorSheet {
    

    static get defaultOptions() {
        const defaults = super.defaultOptions;
        const overrides = {
            template: "systems/DBU/templates/actors/actor-sheet.hbs",
            tabs: [{ navSelector: ".tabs", contentSelector: ".content", initial: "tab1" }],
            width: 900
    
        };
        

        return mergeObject(defaults, overrides);
    }

    async getData() {
        const context = super.getData()
        context.config = CONFIG.dbu;

        return context;
    }

    activateListeners(html) {
        
        super.activateListeners(html);
        $('#connectionForm').submit(async function () {

                console.log("Something submitted!");

        });
    }

} 
