export async function preloadHandlebarsTemplates() {

    console.log("Loading templates")
    const templatePaths = [
        "systems/DBU/templates/actors/partials/character-header-partial.hbs"
    ];

    return loadTemplates(templatePaths);
}