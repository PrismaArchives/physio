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
        const context = super.getData();
        context.config = CONFIG.dbu;
        context.transformations = context.items.filter (function(item) { return item.type == "transformation"});
        context.techniques = context.items.filter (function(item) { return item.type == "technique"});
        context.gear = context.items.filter (function(item) { return item.type == "gear"});

        return context;
    }

    activateListeners(html) {
        
        super.activateListeners(html);
        
        var event_data = {
            actor: this.actor,

        }
        

        html
        .on('submit', event_data, async function(event) {
            var actor = event.data.actor;
            var activeEl = document.activeElement;
            console.log(actor.items);
            if(($(activeEl)).hasClass('delete')) {
                var id = $(activeEl).attr('id');
                actor.items.delete(id);
                $("." + id).remove();
            }
            console.log(actor.items);
        })
        
    }

    //when and Item is placed on the sheet
    //create logic to ensure certain things can't be duplicates eq transformations and techniques
    _onDropItem() {
        
    }


} 
