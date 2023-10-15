const POSSIBLE_AFFIXES = [
  "适应的",
  "极寒的",
  "抑制的",
  "亵渎的",
  "燃烧的",
  "仓促的",
  "锤击的",
  "活泼的",
  "磁性的",
  "炽炎的",//原文是molten，感觉很怪。匠魂里叫融熔
  "惊愕的",//可能是瘫痪的
  "反射的",
  "防护的",
  "致伤的",
];

const CHAMPIONS_BLACKLIST = [
  "mother_silverfish:mother_silverfish",
  "mother_silverfish:thief_silverfish",
  "minecraft:shulker",
  "minecraft:vex",
  "minecraft:vindicator",
  "minecraft:evoker",
  "minecraft:slime",
  "minecraft:magma_cube"
];

//Gets a list of random affixes for a given tier and returns them
//Doesn't give duplicates
function getRandomAffixes(tier) {
  //Initialize affix list
  let affixList = [];

  //Initialize a copy of the affix list for the mob
  let possibleAffixes = [];
  for (const element of POSSIBLE_AFFIXES) {
    possibleAffixes.push(element);
  }

  //For as much time as the tier and while the affix array has affixes available, do
  for (let x = 0; x < tier && possibleAffixes.length > 0; x++) {
    //Roll a random affix from the array
    let roll = Math.floor(Math.random() * possibleAffixes.length - 1);

    //Note that affix down into a list
    affixList.push(possibleAffixes[roll]);

    //Shrink the array so you don't end up with the same affix next roll if tier >= 2
    possibleAffixes.splice(roll, 1);
  }

  return affixList;
}

//Roll a dice with 100 faces
function d100() {
  return Math.floor(Math.random() * 100);
}

//Summons a champion with random affixes
function makeChampion(mob, tier, summoner) {
  //Get the affixes for the mob
  let affixesForMob = getRandomAffixes(tier);

  //If chunk isn't loaded, don't call the command
  if (!mob.level.minecraftLevel.isLoaded(mob.block.pos)) return;

  //Command requires a Summoner to work properly, assigned in the entity spawned event
  let command = `execute as ${summoner} in ${
    mob.level.dimension
  } run champions summonpos ${Math.round(mob.x)} ${Math.round(
    mob.y
  )} ${Math.round(mob.z)} ${mob.type} ${tier}`;
  for (let y = 0; y < affixesForMob.length; y++)
    command += " " + affixesForMob[y];

  //Summon the champion
  mob.server.runCommandSilent(command);
}

//Gets if the observed mob was spawned in a dungeon
function getDungeonType(kuLevel, mob) {
  //Initialize the dungeon type to a default value
  let dungeonType = "none";

  //If the mob is not permitted to transform into a champion
  if (CHAMPIONS_BLACKLIST.includes(mob.type)) return dungeonType;

  //Get the block the mob is supposed to spawn on
  let level = mob.level;
  let block = level.getBlock(mob.x, mob.y, mob.z);

  //Check if that block is part of a dungeon and note it to return it
  if (kuLevel.isStructureAtLocation(block, "ftbdungeons:stone_dungeon"))
    dungeonType = "stone";
  else if (kuLevel.isStructureAtLocation(block, "ftbdungeons:nether0_dungeon"))
    dungeonType = "nether";
  else if (kuLevel.isStructureAtLocation(block, "ftbstoneblock:end_city"))
    dungeonType = "end";
  else if (kuLevel.isStructureAtLocation(block, "ftbstoneblock:boss_dungeon"))
    dungeonType = "boss";

  return dungeonType;
}

//Whenever an entity spawns, do
onEvent("entity.spawned", (e) => {
  //Get the level the mob spawned in
  let kuLevel = new Ku.Level(e.entity.level);

  //Get information about the mob and the players online
  let mob = e.entity;
  let playerList = e.server.players;
  let summoner = playerList[0];

  //If no one is online, champions don't spawn so return
  if (!summoner) {
    return;
  }

  //If the mob is a hostile monster that just spawned, it's a valid target
  if (mob.isLiving() && !mob.isPlayer() && mob.isMonster()) {
    //Get the type of dungeon the mob is in
    let dungeonType = getDungeonType(kuLevel, mob);

    //If the mob is not inside a dungeon, leave it be and return
    if (dungeonType == "none") return;
    else {
      //If it's a valid dungeon type such as stone or nether
      //Initialize some values for the champion to summon
      let championChance = 0;
      let tier = 0;

      //Values are in percentage
      switch (dungeonType) {
        case "stone":
          championChance = 15;
          tier = 1;
          break;
        case "nether":
          championChance = 20;
          tier = 2;
          break;
        case "end":
          championChance = 20;
          tier = 3;
          break;
        case "boss":
          championChance = 25;
          tier = 4;
          break;
        default:
          //Safety return
          return;
      }

      //Roll a dice 100
      let roll = d100();

      //Compare the dice with the champion chance, if the champion didn't roll, then return
      if (roll > championChance) {
        return;
      } else {
        //Otherwise the mob will become a champion!
        makeChampion(mob, tier, summoner);

        //Cancel the event! If you don't do this, two mobs spawn: the original and the summoned champion.
        e.cancel();
      }
    }
  }
});
