const { Schema, model } = require("mongoose")


const charSchema = new Schema({
    owner: String,
    name: String,
    stats: { str: Number, spd: Number, def: Number},
    hp: { type: Number, default: 300},
    maxHp: { type: Number, default: 300},
    mp: { type: Number, default: 100},
    maxMp: { type: Number, default: 100},
    sp: { type: Number, default: 100},
    maxSp: { type: Number, default: 100},
    x:{ type: Number, default: 0},
    z:{ type: Number, default: 0},
    weapon: { itemId: String, name: String, itemType: String, plusDef: Number, plusDmg: Number, 
    magRes: Number, plusMag: Number, price: Number},
    cloth: String,
    pants: String,
    hair: String,
    boots: String,
    armor:{ itemId: String, name: String, itemType: String, plusDef: Number, plusDmg: Number, 
    magRes: Number, plusMag: Number, price: Number},
    items: [{ itemId: String, name: String, itemType: String, plusDef: Number, plusDmg: Number, 
    magRes: Number, plusMag: Number, price: Number, qnty: Number, desc: String}],
    killQuest: [{questId: String, title: String, def: String, reward: Number, demandKills: Number, kills: Number}],
    titles: { type: Array, default: [] },
    profession: { name: String, rank: Number},
    clearedQuests: Number,
    currentPlace: String,
    morale: { hunger: Number, thirst: Number},
    status: { type: Array, default: []},
    regens: {sp: Number, hp: Number, mana: Number}
})

module.exports = CharModel = model("character", charSchema)