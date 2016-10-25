Characters = new Meteor.Collection('characters');

var CharacterSchema = new SimpleSchema({
    "characterName": {
        type: String,
        defaultValue: "",
        label: "Character Name"
    },
    "characterRole": {
        type: String,
        label: "Character Role",
        allowedValues: ["Player", "GameMaster"]
    },
    "characterHealth": {
        type: Number,
        label: "Character Health"
    },
    "characterStamina": {
        type: Number,
        label: "Character Stamina"
    }
});

Characters.attachSchema( CharacterSchema );