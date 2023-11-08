class CharacterData extends foundry.abstract.DataModel {
    static defineSchema() {
        const fields = foundry.data.fields;
        return {
            attributes: new fields.SchemaField({
                "agility": new fields.NumberField({
                    required: true,
                    initial: 1,
                    integer: true
                }),
                "force": new fields.NumberField({
                    required: true,
                    initial: 1,
                    integer: true
                }),
                "tenacity": new fields.NumberField({
                    required: true,
                    initial: 1,
                    integer: true
                }),
                "scholarship": new fields.NumberField({
                    required: true,
                    initial: 1,
                    integer: true
                }),
                "insight": new fields.NumberField({
                    required: true,
                    initial: 1,
                    integer: true
                }),
                "magic": new fields.NumberField({
                    required: true,
                    initial: 1,
                    integer: true
                }),
                "personality": new fields.NumberField({
                    required: true,
                    initial: 1,
                    integer: true
                })
            }),
            ki: new fields.SchemaField({
                value: new fields.NumberField({
                    required: true,
                    initial: 50,
                    integer: true
                }),
                min: new fields.NumberField({
                    required: true,
                    initial: 0,
                    integer: true
                }),
                max_capacity: new fields.NumberField({
                    required: true,
                    initial: 20,
                    integer: true
                })
            }),
        }
    }
}