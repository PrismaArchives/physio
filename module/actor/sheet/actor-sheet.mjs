export class PhysioActorSheet extends ActorSheet {
    
    static get defaultOptions() {
        const defaults = super.defaultOptions;
        const overrides = {
            template: "systems/physio/templates/actors/actor-sheet.hbs",
            tabs: [{ navSelector: ".tabs", contentSelector: ".content", initial: "tab1" }],
            width: 900
    
        };
        

        return mergeObject(defaults, overrides);
    }

    async getData() {
        const context = super.getData();
        context.config = CONFIG.physio;
        context.gear_list = context.items.filter (function(item) { return item.type == "gear"});
        context.body_parts = context.items.filter (function(item) { return item.type == "body_part"});

        return context;
    }

    activateListeners(html) {
        
        super.activateListeners(html);
        
        var event_data = {
            actor: game.actors.get(this.actor._id),

        }
        
        html
        .on('submit', event_data, async function(event) {
            var actor = event.data.actor;
            var activeEl = document.activeElement;
            console.log(actor.items);
            if(($(activeEl)).hasClass('delete')) {
                var id = $(activeEl).attr('id');
                //items.delete() seems to delete on client side remember to use items.find.delete to delete the item itself.
                console.log(actor.items.find(item => item._id == id));
                actor.items.find(item => item._id == id).delete();
                $("." + id).remove();
            }
            console.log(actor.items);
        })
        .on('click', event_data, async function(event) {
            var actor = event.data.actor;
            var activeEl = document.activeElement;
            if($(activeEl).hasClass('no-style-button')) {
                console.log(activeEl);
                var diceTotal = parseInt($(activeEl).attr('id'));
                console.log(diceTotal)
                if($(activeEl).hasClass('skill')) {

                    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation
                    var attribute_name = $(activeEl).attr('data-parent-attribute');
                    diceTotal += parseInt(actor.system[attribute_name]);
                }

                console.log(diceTotal)
                const roll = new Roll( String(diceTotal) + "d10cs>3")
                roll.toMessage({
                    rollMode: 'roll',
                    speaker: {alias: name}
                    });
            }
        })
        
        
    }

    //when and Item is placed on the sheet
    //create logic to ensure certain things can't be duplicates eq transformations and techniques
    /*
    super not working rn but leave commented out until fixed wont add items to sheet otherwise
    _onDropItem() {
        super._onDropItem();
    }
    */ 

} 
