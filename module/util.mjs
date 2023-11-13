export async function preloadHandlebarsTemplates() {

    console.log("Loading templates")
    const templatePaths = [
        "systems/DBU/templates/actors/partials/character-header-partial.hbs",
        "systems/DBU/templates/actors/partials/attribute-partial.hbs",
        "systems/DBU/templates/actors/partials/skills-partial.hbs"
    ];

    return loadTemplates(templatePaths);
}

export async function registerHelpers() {
    //just use {{#if (eq arg1 arg2)}}
    /*
    Handlebars.registerHelper('ifEquals', function(arg1, arg2, options){
        return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
    });
    */
}