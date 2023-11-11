export async function preloadHandlebarsTemplates() {

    console.log("Loading templates")
    const templatePaths = [
        "systems/DBU/templates/actors/partials/character-header-partial.hbs",
        "systems/DBU/templates/actors/partials/attribute-partial.hbs",
        "systems/DBU/templates/actors/partials/skills-partial.hbs"
    ];

    return loadTemplates(templatePaths);
}