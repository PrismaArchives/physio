class CharacterData extends foundry.abstract.DataModel {
    static defineSchema() {
        const fields = foundry.data.fields;

  

        return {
            attributes: new fields.SchemaField({
                "strength": new fields.NumberField({
                    required: true,
                    initial: 3,
                    integer: true
                }),
                "agility": new fields.NumberField({
                    required: true,
                    initial: 3,
                    integer: true
                }),
                "endurance": new fields.NumberField({
                    required: true,
                    initial: 3,
                    integer: true
                }),
                "perception": new fields.NumberField({
                    required: true,
                    initial: 3,
                    integer: true
                }),
                "ego": new fields.NumberField({
                    required: true,
                    initial: 3,
                    integer: true
                }),
                "magic": new fields.NumberField({
                    required: false,
                    initial: 0,
                    integer: true
                }),
                "luck": new fields.NumberField({
                    required: false,
                    initial: 3,
                    integer: true
                })
            }),
            hp: new fields.SchemaField({
                value: new fields.NumberField({
                    required: true,
                    initial: (this.strength+this.endurance)*2,
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
            mana: new fields.SchemaField({
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