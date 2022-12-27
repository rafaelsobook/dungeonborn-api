const { Schema, model } = require("mongoose")


const charSchema = new Schema({
    owner: String,
    name: String,
    stats: { sword: Number, def: Number, core: Number, magic: Number, spd: Number},
    lvl: { type: Number, default: 1},
    rank: { type: String, default: 'F'},
    hp: { type: Number, default: 300},
    maxHp: { type: Number, default: 300},
    mp: { type: Number, default: 100},
    maxMp: { type: Number, default: 100},
    sp: { type: Number, default: 100},
    maxSp: { type: Number, default: 100},
    exp: { type: Number, default: 0},
    maxExp: { type: Number, default: 100},
    x:{ type: Number, default: 0},
    z:{ type: Number, default: 0},
    weapon: { meshId: String, name: String, itemType: String, plusDef: Number, plusDmg: Number, 
    magRes: Number, plusMag: Number, price: Number},
    cloth: String,
    pants: String,
    hair: String,
    boots: String,
    hairColor: {r: Number, g: Number, b: Number},
    armor:{ meshId: String, name: String, itemType: String, plusDef: Number, plusDmg: Number, 
    magRes: Number, plusMag: Number, price: Number},
    items: [{ meshId: String, name: String, itemType: String, plusDef: Number, plusDmg: Number, 
    magRes: Number, plusMag: Number, price: Number, qnty: Number}],
    skills: [{skillId: String, name: String, power: Number, demand: {name: String, cost: Number}, rank: String, skillType: String}],
    killQuest: [{questId: String, title: String, def: String, reward: Number, demandKills: Number, kills: Number}],
    titles: { type: Array, default: [] },
    profession: { name: String, rank: Number},
    clearedQuests: Number,
    currentPlace: String,
    places: { type: Array, default: [] }, 
    status: { type: Array, default: []}, // sickness //poisoned etc
    regens: {sp: Number, hp: Number, mana: Number},
    points: { type: Number, default: 1},
    coins: { type: Number, default: 5000 }
})

module.exports = CharModel = model("character", charSchema)