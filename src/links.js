export const common = [
  // militia
  { target: 1101, target_name: "militia", source: 1102, source_name: "spearmen", type: 1 }, // spearmen
  { target: 1101, target_name: "militia", source: 1202, source_name: "skirmisher", type: 1 }, // skirmishers
  { target: 1101, target_name: "militia", source: 1401, source_name: "ram", type: 1 }, // ram
  { target: 1101, target_name: "militia", source: 1404, source_name: "trebuchet", type: 1 }, // trebuchet
  { target: 1101, target_name: "militia", source: 1405, source_name: "bombard_cannon", type: 1 }, // bombard_cannon
  { target: 1101, target_name: "militia", source: 1406, source_name: "siege_tower", type: 1 }, // siege_tower

  // spearmen
  { target: 1102, target_name: "spearman", source: 1301, source_name: "scout", type: 1 }, // scout
  { target: 1102, target_name: "spearman", source: 1302, source_name: "knight", type: 1 }, // knight
  { target: 1102, target_name: "spearman", source: 1303, source_name: "camel_rider", type: 1 }, // camel_rider
  { target: 1102, target_name: "spearman", source: 1401, source_name: "ram", type: 1 }, // ram
  { target: 1102, target_name: "spearman", source: 1404, source_name: "trebuchet", type: 1 }, // trebuchet
  { target: 1102, target_name: "spearman", source: 1405, source_name: "bombard_cannon", type: 1 }, // bombard_cannon
  { target: 1102, target_name: "spearman", source: 1406, source_name: "siege_tower", type: 1 }, // siege_tower

  // archer
  { target: 1201, target_name: "archer", source: 1101, source_name: "militia", type: 1 }, // militia
  { target: 1201, target_name: "archer", source: 1102, source_name: "spearmen", type: 1 }, // spearman
  { target: 1201, target_name: "archer", source: 1203, source_name: "hand_cannoneer", type: 1 }, // hand_cannoneer
  { target: 1201, target_name: "archer", source: 1501, source_name: "monk", type: 1 }, // monk
  { target: 1201, target_name: "archer", source: 1502, source_name: "petard", type: 1 }, // petard

  // skirmisher
  { target: 1202, target_name: "skirmisher", source: 1102, source_name: "spearmen", type: 1 }, // spearman
  { target: 1202, target_name: "skirmisher", source: 1201, source_name: "archer", type: 1 }, // archer
  { target: 1202, target_name: "skirmisher", source: 1203, source_name: "hand_cannoneer", type: 1 }, // hand_cannoneer
  { target: 1202, target_name: "skirmisher", source: 1304, source_name: "cavalry_archer", type: 1 }, // cavalry_archer
  { target: 1202, target_name: "skirmisher", source: 1502, source_name: "petard", type: 1 }, // petard

  // hand_cannoneer
  { target: 1203, target_name: "hand_cannoneer", source: 1101, source_name: "militia", type: 1 }, // militia
  { target: 1203, target_name: "hand_cannoneer", source: 1102, source_name: "spearmen", type: 1 }, // spearman
  { target: 1203, target_name: "hand_cannoneer", source: 1502, source_name: "petard", type: 1 }, // petard
  { target: 1203, target_name: "hand_cannoneer", source: 1501, source_name: "monk", type: 1 }, // monk

  // scout
  { target: 1301, target_name: "scout", source: 1202, source_name: "skirmisher", type: 1 }, // skirmisher
  { target: 1301, target_name: "scout", source: 1401, source_name: "ram", type: 1 }, // ram
  { target: 1301, target_name: "scout", source: 1402, source_name: "mangonel", type: 1 }, // mangonel
  { target: 1301, target_name: "scout", source: 1404, source_name: "trebuchet", type: 1 }, // trebuchet
  { target: 1301, target_name: "scout", source: 1405, source_name: "bombard_cannon", type: 1 }, // bombard_cannon
  { target: 1301, target_name: "scout", source: 1406, source_name: "siege_tower", type: 1 }, // siege_tower
  { target: 1301, target_name: "scout", source: 1501, source_name: "monk", type: 1 }, // monk

  // knight
  { target: 1302, target_name: "knight", source: 1101, source_name: "militia", type: 1 }, // militia
  { target: 1302, target_name: "knight", source: 2113, source_name: "eagle", type: 1 }, // eagle scout
  { target: 1302, target_name: "knight", source: 1201, source_name: "archer", type: 1 }, // archer
  { target: 1302, target_name: "knight", source: 1202, source_name: "skirmisher", type: 1 }, // skirmisher
  { target: 1302, target_name: "knight", source: 1203, source_name: "hand_cannoneer", type: 1 }, // hand_cannoneer
  { target: 1302, target_name: "knight", source: 1301, source_name: "scout", type: 1 }, // scout
  { target: 1302, target_name: "knight", source: 1304, source_name: "cavalry_archer", type: 1 }, // cavalry_archer
  { target: 1302, target_name: "knight", source: 1401, source_name: "ram", type: 1 }, // ram
  { target: 1302, target_name: "knight", source: 1402, source_name: "mangonel", type: 1 }, // mangonel
  { target: 1302, target_name: "knight", source: 1403, source_name: "scorpion", type: 1 }, // scorpion
  { target: 1302, target_name: "knight", source: 1404, source_name: "trebuchet", type: 1 }, // trebuchet
  { target: 1302, target_name: "knight", source: 1405, source_name: "bombard_cannon", type: 1 }, // bombard_cannon
  { target: 1302, target_name: "knight", source: 1406, source_name: "siege_tower", type: 1 }, // siege_tower

  // camel_rider
  { target: 1303, target_name: "camel_rider", source: 1202, source_name: "skirmisher", type: 1 }, // skirmisher
  { target: 1303, target_name: "camel_rider", source: 1301, source_name: "scout", type: 1 }, // scout
  { target: 1303, target_name: "camel_rider", source: 1302, source_name: "knight", type: 1 }, // knight
  { target: 1303, target_name: "camel_rider", source: 1304, source_name: "cavalry_archer", type: 1 }, // cavalry_archer
  { target: 1303, target_name: "camel_rider", source: 1401, source_name: "ram", type: 1 }, // ram
  { target: 1303, target_name: "camel_rider", source: 1404, source_name: "trebuchet", type: 1 }, // trebuchet
  { target: 1303, target_name: "camel_rider", source: 1405, source_name: "bombard_cannon", type: 1 }, // bombard_cannon
  { target: 1303, target_name: "camel_rider", source: 1406, source_name: "siege_tower", type: 1 }, // siege_tower

  // cavalry_archer
  { target: 1304, target_name: "cavalry_archer", source: 1101, source_name: "militia", type: 1 }, // militia
  { target: 1304, target_name: "cavalry_archer", source: 1102, source_name: "spearmen", type: 1 }, // spearman
  { target: 1304, target_name: "cavalry_archer", source: 1203, source_name: "hand_cannoneer", type: 1 }, // hand_cannoneer
  { target: 1304, target_name: "cavalry_archer", source: 1301, source_name: "scout", type: 1 }, // scout
  { target: 1304, target_name: "cavalry_archer", source: 1402, source_name: "mangonel", type: 1 }, // mangonel
  { target: 1304, target_name: "cavalry_archer", source: 1501, source_name: "monk", type: 1 }, // monk
  { target: 1304, target_name: "cavalry_archer", source: 1502, source_name: "petard", type: 1 }, // petard

  // ram
  { target: 1401, target_name: "ram", source: 1201, source_name: "archer", type: 1 }, // archer
  { target: 1401, target_name: "ram", source: 1202, source_name: "skirmisher", type: 1 }, // skirmisher
  { target: 1401, target_name: "ram", source: 1304, source_name: "cavalry_archer", type: 1 }, // cavalry_archer
  { target: 1401, target_name: "ram", source: 1203, source_name: "hand_cannoneer", type: 1 }, // hand_cannoneer

  // mangonel
  { target: 1402, target_name: "mangonel", source: 1101, source_name: "militia", type: 1 }, // militia
  { target: 1402, target_name: "mangonel", source: 1102, source_name: "spearmen", type: 1 }, // spearman
  { target: 1402, target_name: "mangonel", source: 1202, source_name: "skirmisher", type: 1 }, // skirmisher
  { target: 1402, target_name: "mangonel", source: 1401, source_name: "ram", type: 1 }, // ram
  { target: 1402, target_name: "mangonel", source: 1403, source_name: "scorpion", type: 1 }, // scorpion
  { target: 1402, target_name: "mangonel", source: 1404, source_name: "trebuchet", type: 1 }, // trebuchet

  // scorpion
  { target: 1403, target_name: "scorpion", source: 1201, source_name: "archer", type: 1 }, // archer
  { target: 1403, target_name: "scorpion", source: 1202, source_name: "skirmisher", type: 1 }, // skirmishe
  { target: 1403, target_name: "scorpion", source: 1203, source_name: "hand_cannoneer", type: 1 }, // hand_cannoneerr

  // trebuchet
  { target: 1404, target_name: "trebuchet", source: 1201, source_name: "archer", type: 1 }, // archer
  { target: 1404, target_name: "trebuchet", source: 1202, source_name: "skirmisher", type: 1 }, // skirmishe
  { target: 1404, target_name: "trebuchet", source: 1304, source_name: "cavalry_archer", type: 1 }, // cavalry_archer

  // bombard_cannon
  { target: 1405, target_name: "bombard_cannon", source: 1404, source_name: "trebuchet", type: 1 }, // trebuchet
  { target: 1405, target_name: "bombard_cannon", source: 1202, source_name: "skirmisher", type: 1 }, // skirmishe
  { target: 1405, target_name: "bombard_cannon", source: 1401, source_name: "ram", type: 1 }, // ram
  { target: 1405, target_name: "bombard_cannon", source: 1402, source_name: "mangonel", type: 1 }, // mangonel

  // siege_tower
  { target: 1406, target_name: "siege_tower", source: 1201, source_name: "archer", type: 1 }, // archer
  { target: 1406, target_name: "siege_tower", source: 1202, source_name: "skirmisher", type: 1 }, // skirmishe
  { target: 1406, target_name: "siege_tower", source: 1304, source_name: "cavalry_archer", type: 1 }, // cavalry_archer

  // monk
  { target: 1501, target_name: "monk", source: 1101, source_name: "militia", type: 1 }, // militia
  { target: 1501, target_name: "monk", source: 1302, source_name: "knight", type: 1 }, // knight
  { target: 1501, target_name: "monk", source: 1303, source_name: "camel_rider", type: 1 }, // camel_rider

  // petard
  { target: 1502, target_name: "petard", source: 1101, source_name: "militia", type: 1 }, // militia
  { target: 1502, target_name: "petard", source: 1102, source_name: "spearmen", type: 1 }, // spearman
  { target: 1502, target_name: "petard", source: 1401, source_name: "ram", type: 1 }, // ram
];

export const unique = [
  // eagle_warrior
  { target: 2113, target_name: "eagle_warrior", source: 2201, source_name: "longbowman", type: 1 }, // longbowman
  { target: 2113, target_name: "eagle_warrior", source: 2202, source_name: "chu_ko_nu", type: 1 }, // chu_ko_nu
  { target: 2113, target_name: "eagle_warrior", source: 2204, source_name: "genoese_crossbowman", type: 1 }, // genoese_crossbowman
  { target: 2113, target_name: "eagle_warrior", source: 2206, source_name: "janissary", type: 1 }, // janissary
  { target: 2113, target_name: "eagle_warrior", source: 2207, source_name: "rattan_archer", type: 1 }, // rattan_archer
  { target: 2113, target_name: "eagle_warrior", source: 2304, source_name: "tarkan", type: 1 }, // tarkan
  { target: 2113, target_name: "eagle_warrior", source: 2401, source_name: "genitour", type: 1 }, // genitour
  { target: 2113, target_name: "eagle_warrior", source: 2402, source_name: "camel_archer", type: 1 }, // camel_archer
  { target: 2113, target_name: "eagle_warrior", source: 2404, source_name: "kipchak", type: 1 }, // kipchak
  { target: 2113, target_name: "eagle_warrior", source: 2405, source_name: "elephant_archer", type: 1 }, // elephant_archer
  { target: 2113, target_name: "eagle_warrior", source: 2301, source_name: "steppe", type: 1 }, // steppe lancer
  { target: 2113, target_name: "eagle_warrior", source: 2502, source_name: "organ_gun", type: 1 }, // organ_gun
  { target: 2113, target_name: "eagle_warrior", source: 2604, source_name: "missionary", type: 1 }, // missionary

  // jaguar_warrior
  { target: 2101, target_name: "jaguar_warrior", source: 2113, source_name: "eagle", type: 1 }, // eagle scout

  // woad_raider
  { target: 2102, target_name: "woad_raider", source: 2113, source_name: "eagle", type: 1 }, // eagle scout

  // shotel_warrior
  { target: 2103, target_name: "shotel_warrior", source: 2113, source_name: "eagle", type: 1 }, // eagle scout

  // huskarl
  { target: 2104, target_name: "huskarl", source: 2113, source_name: "eagle", type: 1 }, // eagle scout

  // condottiero
  { target: 2106, target_name: "condottiero", source: 2113, source_name: "eagle", type: 1 }, // eagle scout

  // samurai
  { target: 2107, target_name: "samurai", source: 2113, source_name: "eagle", type: 1 }, // eagle scout

  // teutonic_knight
  { target: 2109, target_name: "teutonic_knight", source: 2113, source_name: "eagle", type: 1 }, // eagle scout

  // berserker
  { target: 2110, target_name: "berserker", source: 2113, source_name: "eagle", type: 1 }, // eagle scout

  // gbeto
  { target: 2111, target_name: "gbeto", source: 2113, source_name: "eagle", type: 1 }, // eagle scout

  // throwing_axeman
  { target: 2112, target_name: "throwing_axeman", source: 2113, source_name: "eagle", type: 1 }, // eagle scout

  // battle_elephant
  { target: 2302, target_name: "battle_elephant", source: 1201, source_name: "archer", type: 1 }, // archer

  // cataphracts
  { target: 2303, target_name: "cataphracts", source: 2113, source_name: "eagle", type: 1 }, // eagle scout

  // tarkan
  { target: 2304, target_name: "tarkan", source: 1201, source_name: "archer", type: 1 }, // archer

  // leitis
  { target: 2305, target_name: "leitis", source: 2113, source_name: "eagle", type: 1 }, // eagles

  // war_elephant
  { target: 2307, target_name: "war_elephant", source: 2113, source_name: "eagle", type: 1 }, // eagle scout

  // boyar
  { target: 2308, target_name: "boyar", source: 2113, source_name: "eagle", type: 1 }, // eagle scout

  // keshik
  { target: 2309, target_name: "keshik", source: 2113, source_name: "eagle", type: 1 }, // eagles

  // arambai
  { target: 2403, target_name: "arambai", source: 2113, source_name: "eagle", type: 1 }, // eagle scout

  // mameluke
  { target: 2408, target_name: "mameluke", source: 2113, source_name: "eagle", type: 1 }, // eagle scout

  // conquistador
  { target: 2409, target_name: "conquistador", source: 2113, source_name: "eagle", type: 1 }, // eagle scout

];

export const combined = [
  // militia
  { target: 1101, target_name: "militia", source: 2104, type: 1 }, // huskarl
  { target: 1101, target_name: "militia", source: 2113, source_name: "eagle", type: 1 }, // eagles

  //spearman
  { target: 1102, target_name: "spearman", source: 2301, source_name: "steppe", type: 1 }, // steppe lancer
  { target: 1102, target_name: "spearman", source: 2302, source_name: "battle_elephant", type: 1 }, // battle_elephant
  { target: 1102, target_name: "spearman", source: 2303, source_name: "cataphract", type: 1 }, // cataphract
  { target: 1102, target_name: "spearman", source: 2304, source_name: "tarkan", type: 1 }, // tarkan
  { target: 1102, target_name: "spearman", source: 2305, source_name: "leitis", type: 1 }, // leitis
  { target: 1102, target_name: "spearman", source: 2306, source_name: "rmagyar_huszar", type: 1 }, // rmagyar_huszar
  { target: 1102, target_name: "spearman", source: 2307, source_name: "war_elephant", type: 1 }, // war_elephant
  { target: 1102, target_name: "spearman", source: 2308, source_name: "boyar", type: 1 }, // boyar
  { target: 1102, target_name: "spearman", source: 2309, source_name: "keshik", type: 1 }, // keshik
  { target: 1102, target_name: "spearman", source: 2405, source_name: "elephant_archer", type: 1 }, // elephant_archer

  // archer
  { target: 1201, target_name: "archer", source: 2101, source_name: "jaguar_warrior", type: 1 }, // jaguar_warrior
  { target: 1201, target_name: "archer", source: 2107, source_name: "samurai", type: 1 }, // samurai
  { target: 1201, target_name: "archer", source: 2109, source_name: "teutonic_knight", type: 1 }, // teutonic_knight
  { target: 1201, target_name: "archer", source: 2111, source_name: "throwing_axeman", type: 1 }, // throwing_axeman
  { target: 1201, target_name: "archer", source: 2203, source_name: "slinger", type: 1 }, // slinger

  // skirmisher
  { target: 1202, target_name: "skirmisher", source: 2201, source_name: "longbowman", type: 1 }, // longbowman
  { target: 1202, target_name: "skirmisher", source: 2203, source_name: "slinger", type: 1 }, // slinger
  { target: 1202, target_name: "skirmisher", source: 2204, source_name: "genoese_crossbowman", type: 1 }, // genoese_crossbowman
  { target: 1202, target_name: "skirmisher", source: 2205, source_name: "plumed_archer", type: 1 }, // plumed_archer
  { target: 1202, target_name: "skirmisher", source: 2207, source_name: "rattan_archer", type: 1 }, // rattan_archer
  { target: 1202, target_name: "skirmisher", source: 2402, source_name: "camel_archer", type: 1 }, // camel_archer
  { target: 1202, target_name: "skirmisher", source: 2404, source_name: "kipchak", type: 1 }, // kipchak
  { target: 1202, target_name: "skirmisher", source: 2407, source_name: "mangudai", type: 1 }, // mangudai

  // hand_cannoneer
  { target: 1203, target_name: "hand_cannoneer", source: 2203, source_name: "slinger", type: 1 }, // slinger
  { target: 1203, target_name: "hand_cannoneer", source: 2101, source_name: "jaguar_warrior", type: 1 }, // jaguar_warrior
  { target: 1203, target_name: "hand_cannoneer", source: 2102, source_name: "woad_raider", type: 1 }, // woad_raider
  { target: 1203, target_name: "hand_cannoneer", source: 2103, source_name: "shotel_warrior", type: 1 }, // shotel_warrior
  { target: 1203, target_name: "hand_cannoneer", source: 2105, source_name: "kamayuk", type: 1 }, // kamayuk
  { target: 1203, target_name: "hand_cannoneer", source: 2107, source_name: "samurai", type: 1 }, // samurai
  { target: 1203, target_name: "hand_cannoneer", source: 2108, source_name: "karambit_warrior", type: 1 }, // karambit_warrior
  { target: 1203, target_name: "hand_cannoneer", source: 2109, source_name: "teutonic_knight", type: 1 }, // teutonic_knight
  { target: 1203, target_name: "hand_cannoneer", source: 2110, source_name: "berserker", type: 1 }, // berserker
  { target: 1203, target_name: "hand_cannoneer", source: 2112, source_name: "gbeto", type: 1 }, // gbeto
  { target: 1203, target_name: "hand_cannoneer", source: 2203, source_name: "slinger", type: 1 }, // slinger
  { target: 1203, target_name: "hand_cannoneer", source: 2203, source_name: "slinger", type: 1 }, // slinger
  { target: 1203, target_name: "hand_cannoneer", source: 2203, source_name: "slinger", type: 1 }, // slinger

  // scout
  { target: 1301, target_name: "scout", source: 2201, source_name: "longbowman", type: 1 }, // longbowman
  { target: 1301, target_name: "scout", source: 2202, source_name: "chu_ko_nu", type: 1 }, // chu_ko_nu
  { target: 1301, target_name: "scout", source: 2203, source_name: "slinger", type: 1 }, // slinger
  { target: 1301, target_name: "scout", source: 2205, source_name: "plumed_archer", type: 1 }, // plumed_archer
  { target: 1301, target_name: "scout", source: 2207, source_name: "rattan_archer", type: 1 }, // rattan_archer
  { target: 1301, target_name: "scout", source: 2502, source_name: "organ_gun", type: 1 }, // organ_gun
  { target: 1301, target_name: "scout", source: 2604, source_name: "missionary", type: 1 }, // missionary
  { target: 1301, target_name: "scout", source: 2404, source_name: "kipchak", type: 1 }, // kipchak
  { target: 1301, target_name: "scout", source: 2401, source_name: "genitour", type: 1 }, // genitour

  // jaguar_warrior
  { target: 2101, target_name: "jaguar_warrior", source: 1101, source_name: "militia", type: 1 }, // militia
  { target: 2101, target_name: "jaguar_warrior", source: 1102, source_name: "spearmen", type: 1 }, // spearman
  { target: 2101, target_name: "jaguar_warrior", source: 1202, source_name: "skirmisher", type: 1 }, // skirmisher

  // woad_raider
  { target: 2102, target_name: "woad_raider", source: 1102, source_name: "spearmen", type: 1 }, // spearman
  { target: 2102, target_name: "woad_raider", source: 1201, source_name: "archer", type: 1 }, // archer
  { target: 2102, target_name: "woad_raider", source: 1202, source_name: "skirmisher", type: 1 }, // skirmisher

  // shotel_warrior
  { target: 2103, target_name: "shotel_warrior", source: 1102, source_name: "spearmen", type: 1 }, // spearman
  { target: 2103, target_name: "shotel_warrior", source: 1202, source_name: "skirmisher", type: 1 }, // skirmisher

  // huskarl
  { target: 2104, target_name: "huskarl", source: 1102, source_name: "spearmen", type: 1 }, // spearman
  { target: 2104, target_name: "huskarl", source: 1201, source_name: "archer", type: 1 }, // archer
  { target: 2104, target_name: "huskarl", source: 1202, source_name: "skirmisher", type: 1 }, // skirmisher

  // kamayuk
  { target: 2105, target_name: "kamayuk", source: 1102, source_name: "spearmen", type: 1 }, // spearman
  { target: 2105, target_name: "kamayuk", source: 1202, source_name: "skirmisher", type: 1 }, // skirmisher
  { target: 2105, target_name: "kamayuk", source: 1301, source_name: "scout", type: 1 }, // scout

  // condottiero
  { target: 2106, target_name: "condottiero", source: 1102, source_name: "spearmen", type: 1 }, // spearman
  { target: 2106, target_name: "condottiero", source: 1201, source_name: "archer", type: 1 }, // archer
  { target: 2106, target_name: "condottiero", source: 1202, source_name: "skirmisher", type: 1 }, // skirmisher
  { target: 2106, target_name: "condottiero", source: 1203, source_name: "hand_cannoneer", type: 1 }, // hand_cannoneer
  { target: 2106, target_name: "condottiero", source: 1301, source_name: "scout", type: 1 }, // scout

  // samurai
  { target: 2107, target_name: "samurai", source: 1102, source_name: "spearmen", type: 1 }, // spearman
  { target: 2107, target_name: "samurai", source: 1202, source_name: "skirmisher", type: 1 }, // skirmisher

  // karambit_warrior
  { target: 2108, target_name: "karambit_warrior", source: 1102, source_name: "spearmen", type: 1 }, // spearman
  { target: 2108, target_name: "karambit_warrior", source: 1202, source_name: "skirmisher", type: 1 }, // skirmisher

  // teutonic_knight
  { target: 2109, target_name: "teutonic_knight", source: 1101, source_name: "militia", type: 1 }, // militia
  { target: 2109, target_name: "teutonic_knight", source: 1102, source_name: "spearmen", type: 1 }, // spearman
  { target: 2109, target_name: "teutonic_knight", source: 1202, source_name: "skirmisher", type: 1 }, // skirmisher
  { target: 2109, target_name: "teutonic_knight", source: 1301, source_name: "scout", type: 1 }, // scout

  // berserker
  { target: 2110, target_name: "berserker", source: 1102, source_name: "spearmen", type: 1 }, // spearman
  { target: 2110, target_name: "berserker", source: 1202, source_name: "skirmisher", type: 1 }, // skirmisher
  { target: 2110, target_name: "berserker", source: 1301, source_name: "scout", type: 1 }, // scout

  // gbeto
  { target: 2111, target_name: "gbeto", source: 1102, source_name: "spearmen", type: 1 }, // spearman
  { target: 2111, target_name: "gbeto", source: 1202, source_name: "skirmisher", type: 1 }, // skirmisher
  { target: 2111, target_name: "gbeto", source: 1301, source_name: "scout", type: 1 }, // scout

  // throwing_axeman
  { target: 2112, target_name: "throwing_axeman", source: 1102, source_name: "spearmen", type: 1 }, // spearman
  { target: 2112, target_name: "throwing_axeman", source: 1202, source_name: "skirmisher", type: 1 }, // skirmisher

  // eagles
  { target: 2113, target_name: "eagle_warrior", source: 1102, source_name: "spearmen", type: 1 }, // spearmen
  { target: 2113, target_name: "eagle_warrior", source: 1201, source_name: "archer", type: 1 }, // archer
  { target: 2113, target_name: "eagle_warrior", source: 1203, source_name: "hand_cannoneer", type: 1 }, // hand_cannoneer
  { target: 2113, target_name: "eagle_warrior", source: 1202, source_name: "skirmisher", type: 1 }, // skirmisher
  { target: 2113, target_name: "eagle_warrior", source: 1301, source_name: "scout", type: 1 }, // scout
  { target: 2113, target_name: "eagle_warrior", source: 1303, source_name: "camel_rider", type: 1 }, // camel_rider
  { target: 2113, target_name: "eagle_warrior", source: 1304, source_name: "cavalry_archer", type: 1 }, // cavalry_archer
  { target: 2113, target_name: "eagle_warrior", source: 1401, source_name: "ram", type: 1 }, // ram
  { target: 2113, target_name: "eagle_warrior", source: 1402, source_name: "mangonel", type: 1 }, // mangonel
  { target: 2113, target_name: "eagle_warrior", source: 1501, source_name: "monk", type: 1 }, // monk
  { target: 2113, target_name: "eagle_warrior", source: 1404, source_name: "trebuchet", type: 1 }, // trebuchet
  { target: 2113, target_name: "eagle_warrior", source: 1405, source_name: "bombard_cannon", type: 1 }, // bombard_cannon
  { target: 2113, target_name: "eagle_warrior", source: 1406, source_name: "siege_tower", type: 1 }, // siege_tower

  // longbowman
  { target: 2201, target_name: "longbowman", source: 1101, source_name: "militia", type: 1 }, // militia
  { target: 2201, target_name: "longbowman", source: 1102, source_name: "spearmen", type: 1 }, // spearman
  { target: 2201, target_name: "longbowman", source: 1201, source_name: "archer", type: 1 }, // archer
  { target: 2201, target_name: "longbowman", source: 1203, source_name: "hand_cannoneer", type: 1 }, // hand_cannoneer

  // chu_ko_nu
  { target: 2202, target_name: "chu_ko_nu", source: 1101, source_name: "militia", type: 1 }, // militia
  { target: 2202, target_name: "chu_ko_nu", source: 1102, source_name: "spearmen", type: 1 }, // spearman
  { target: 2202, target_name: "chu_ko_nu", source: 1203, source_name: "hand_cannoneer", type: 1 }, // hand_cannoneer

  // slinger
  { target: 2203, target_name: "slinger", source: 1101, source_name: "militia", type: 1 }, // militia
  { target: 2203, target_name: "slinger", source: 1102, source_name: "spearmen", type: 1 }, // spearman

// genoese_crossbowman
  { target: 2204, target_name: "genoese_crossbowman", source: 1101, source_name: "militia", type: 1 }, // militia
  { target: 2204, target_name: "genoese_crossbowman", source: 1102, source_name: "spearmen", type: 1 }, // spearman
  { target: 2204, target_name: "genoese_crossbowman", source: 1203, source_name: "hand_cannoneer", type: 1 }, // hand_cannoneer
  { target: 2204, target_name: "genoese_crossbowman", source: 1301, source_name: "scout", type: 1 }, // scout

  // plumed_archer
  { target: 2205, target_name: "plumed_archer", source: 1101, source_name: "militia", type: 1 }, // militia
  { target: 2205, target_name: "plumed_archer", source: 1102, source_name: "spearmen", type: 1 }, // spearman
  { target: 2205, target_name: "plumed_archer", source: 1201, source_name: "archer", type: 1 }, // archer
  { target: 2205, target_name: "plumed_archer", source: 1203, source_name: "hand_cannoneer", type: 1 }, // hand_cannoneer

  // janissary
  { target: 2206, target_name: "janissary", source: 1101, source_name: "militia", type: 1 }, // militia
  { target: 2206, target_name: "janissary", source: 1102, source_name: "spearmen", type: 1 }, // spearman
  { target: 2206, target_name: "janissary", source: 1202, source_name: "skirmisher", type: 1 }, // skirmisher
  { target: 2207, target_name: "rattan_archer", source: 1203, source_name: "hand_cannoneer", type: 1 }, // hand_cannoneer

  // rattan_archer
  { target: 2207, target_name: "rattan_archer", source: 1101, source_name: "militia", type: 1 }, // militia
  { target: 2207, target_name: "rattan_archer", source: 1102, source_name: "spearmen", type: 1 }, // spearman
  { target: 2207, target_name: "rattan_archer", source: 1201, source_name: "archer", type: 1 }, // archer
  { target: 2207, target_name: "rattan_archer", source: 1203, source_name: "hand_cannoneer", type: 1 }, // hand_cannoneer

  // rattan_archer
  { target: 2301, target_name: "steppe lancer", source: 1202, source_name: "skirmisher", type: 1 }, // skirmisher
  { target: 2301, target_name: "steppe lancer", source: 1203, source_name: "hand_cannoneer", type: 1 }, // hand_cannoneer
  { target: 2301, target_name: "steppe lancer", source: 1301, source_name: "scout", type: 1 }, // scout

  // battle_elephant
  { target: 2302, target_name: "battle_elephant", source: 1201, source_name: "archer", type: 1 }, // archer
  { target: 2302, target_name: "battle_elephant", source: 1202, source_name: "skirmisher", type: 1 }, // skirmisher
  { target: 2302, target_name: "battle_elephant", source: 1203, source_name: "hand_cannoneer", type: 1 }, // hand_cannoneer
  { target: 2302, target_name: "battle_elephant", source: 1301, source_name: "scout", type: 1 }, // scout

  // cataphracts
  { target: 2303, target_name: "cataphracts", source: 1101, source_name: "militia", type: 1 }, // militia
  { target: 2303, target_name: "cataphracts", source: 1201, source_name: "archer", type: 1 }, // archer
  { target: 2303, target_name: "cataphracts", source: 1202, source_name: "skirmisher", type: 1 }, // skirmisher
  { target: 2303, target_name: "cataphracts", source: 1203, source_name: "hand_cannoneer", type: 1 }, // hand_cannoneer
  { target: 2303, target_name: "cataphracts", source: 1301, source_name: "scout", type: 1 }, // scout

  // tarkan
  { target: 2304, target_name: "tarkan", source: 1201, source_name: "archer", type: 1 }, // archer
  { target: 2304, target_name: "tarkan", source: 1202, source_name: "skirmisher", type: 1 }, // skirmisher
  { target: 2304, target_name: "tarkan", source: 1203, source_name: "hand_cannoneer", type: 1 }, // hand_cannoneer
  { target: 2304, target_name: "tarkan", source: 1301, source_name: "scout", type: 1 }, // scout

  // leitis
  { target: 2305, target_name: "leitis", source: 1201, source_name: "archer", type: 1 }, // archer
  { target: 2305, target_name: "leitis", source: 1202, source_name: "skirmisher", type: 1 }, // skirmisher
  { target: 2305, target_name: "leitis", source: 1203, source_name: "hand_cannoneer", type: 1 }, // hand_cannoneer
  { target: 2305, target_name: "leitis", source: 1301, source_name: "scout", type: 1 }, // scout

  // rmagyar_huszar
  { target: 2306, target_name: "rmagyar_huszar", source: 1201, source_name: "archer", type: 1 }, // archer
  { target: 2306, target_name: "rmagyar_huszar", source: 1202, source_name: "skirmisher", type: 1 }, // skirmisher
  { target: 2306, target_name: "rmagyar_huszar", source: 1203, source_name: "hand_cannoneer", type: 1 }, // hand_cannoneer
  { target: 2306, target_name: "rmagyar_huszar", source: 1301, source_name: "scout", type: 1 }, // scout

  // war_elephant
  { target: 2307, target_name: "war_elephant", source: 1101, source_name: "militia", type: 1 }, // militia
  { target: 2307, target_name: "war_elephant", source: 1201, source_name: "archer", type: 1 }, // archer
  { target: 2307, target_name: "war_elephant", source: 1202, source_name: "skirmisher", type: 1 }, // skirmisher
  { target: 2307, target_name: "war_elephant", source: 1203, source_name: "hand_cannoneer", type: 1 }, // hand_cannoneer
  { target: 2307, target_name: "war_elephant", source: 1301, source_name: "scout", type: 1 }, // scout

  // boyar
  { target: 2308, target_name: "boyar", source: 1101, source_name: "militia", type: 1 }, // militia
  { target: 2308, target_name: "boyar", source: 1201, source_name: "archer", type: 1 }, // archer
  { target: 2308, target_name: "boyar", source: 1202, source_name: "skirmisher", type: 1 }, // skirmisher
  { target: 2308, target_name: "boyar", source: 1203, source_name: "hand_cannoneer", type: 1 }, // hand_cannoneer
  { target: 2308, target_name: "boyar", source: 1301, source_name: "scout", type: 1 }, // scout

  // keshik
  { target: 2309, target_name: "keshik", source: 1201, source_name: "archer", type: 1 }, // archer
  { target: 2309, target_name: "keshik", source: 1202, source_name: "skirmisher", type: 1 }, // skirmisher
  { target: 2309, target_name: "keshik", source: 1203, source_name: "hand_cannoneer", type: 1 }, // hand_cannoneer
  { target: 2309, target_name: "keshik", source: 1301, source_name: "scout", type: 1 }, // scout

  // genitour
  { target: 2401, target_name: "genitour", source: 1201, source_name: "archer", type: 1 }, // archer
  { target: 2401, target_name: "genitour", source: 1203, source_name: "hand_cannoneer", type: 1 }, // hand_cannoneer

  // camel_archer
  { target: 2402, target_name: "camel_archer", source: 1101, source_name: "militia", type: 1 }, // militia
  { target: 2402, target_name: "camel_archer", source: 1203, source_name: "hand_cannoneer", type: 1 }, // hand_cannoneer

  // arambai
  { target: 2403, target_name: "arambai", source: 1101, source_name: "militia", type: 1 }, // militia
  { target: 2403, target_name: "arambai", source: 1102, source_name: "spearmen", type: 1 }, // spearman
  { target: 2403, target_name: "arambai", source: 1201, source_name: "archer", type: 1 }, // archer
  { target: 2403, target_name: "arambai", source: 1202, source_name: "skirmisher", type: 1 }, // skirmisher
  { target: 2403, target_name: "arambai", source: 1203, source_name: "hand_cannoneer", type: 1 }, // hand_cannoneer
  { target: 2403, target_name: "arambai", source: 1301, source_name: "scout", type: 1 }, // scout

  // kipchak
  { target: 2404, target_name: "kipchak", source: 1101, source_name: "militia", type: 1 }, // militia
  { target: 2404, target_name: "kipchak", source: 1203, source_name: "hand_cannoneer", type: 1 }, // hand_cannoneer

  // elephant_archer
  { target: 2405, target_name: "elephant_archer", source: 1101, source_name: "militia", type: 1 }, // militia
  { target: 2405, target_name: "elephant_archer", source: 1201, source_name: "archer", type: 1 }, // archer
  { target: 2405, target_name: "elephant_archer", source: 1202, source_name: "skirmisher", type: 1 }, // skirmisher
  { target: 2405, target_name: "elephant_archer", source: 1203, source_name: "hand_cannoneer", type: 1 }, // hand_cannoneer
  { target: 2405, target_name: "elephant_archer", source: 1301, source_name: "scout", type: 1 }, // scout

  // war_wagon
  { target: 2406, target_name: "war_wagon", source: 1101, source_name: "militia", type: 1 }, // militia
  { target: 2406, target_name: "war_wagon", source: 1201, source_name: "archer", type: 1 }, // archer
  { target: 2406, target_name: "war_wagon", source: 1202, source_name: "skirmisher", type: 1 }, // skirmisher
  { target: 2406, target_name: "war_wagon", source: 1203, source_name: "hand_cannoneer", type: 1 }, // hand_cannoneer
  { target: 2406, target_name: "war_wagon", source: 1301, source_name: "scout", type: 1 }, // scout

  // mangudai
  { target: 2407, target_name: "mangudai", source: 1101, source_name: "militia", type: 1 }, // militia
  { target: 2407, target_name: "mangudai", source: 1102, source_name: "spearmen", type: 1 }, // spearman
  { target: 2407, target_name: "mangudai", source: 1203, source_name: "hand_cannoneer", type: 1 }, // hand_cannoneer

  // mameluke
  { target: 2408, target_name: "mameluke", source: 1101, source_name: "militia", type: 1 }, // militia
  { target: 2408, target_name: "mameluke", source: 1102, source_name: "spearmen", type: 1 }, // spearman
  { target: 2408, target_name: "mameluke", source: 1201, source_name: "archer", type: 1 }, // archer
  { target: 2408, target_name: "mameluke", source: 1202, source_name: "skirmisher", type: 1 }, // skirmisher
  { target: 2408, target_name: "mameluke", source: 1203, source_name: "hand_cannoneer", type: 1 }, // hand_cannoneer
  { target: 2408, target_name: "mameluke", source: 1301, source_name: "scout", type: 1 }, // scout

  // conquistador
  { target: 2409, target_name: "conquistador", source: 1101, source_name: "militia", type: 1 }, // militia
  { target: 2409, target_name: "conquistador", source: 1102, source_name: "spearmen", type: 1 }, // spearman
  { target: 2409, target_name: "conquistador", source: 1201, source_name: "archer", type: 1 }, // archer
  { target: 2409, target_name: "conquistador", source: 1202, source_name: "skirmisher", type: 1 }, // skirmisher
  { target: 2409, target_name: "conquistador", source: 1203, source_name: "hand_cannoneer", type: 1 }, // hand_cannoneer
  { target: 2409, target_name: "conquistador", source: 1301, source_name: "scout", type: 1 }, // scout

  // ballista_elephant
  { target: 2501, target_name: "ballista_elephant", source: 1101, source_name: "militia", type: 1 }, // militia
  { target: 2501, target_name: "ballista_elephant", source: 1201, source_name: "archer", type: 1 }, // archer
  { target: 2501, target_name: "ballista_elephant", source: 1202, source_name: "skirmisher", type: 1 }, // skirmisher
  { target: 2501, target_name: "ballista_elephant", source: 1203, source_name: "hand_cannoneer", type: 1 }, // hand_cannoneer

  // organ_gun
  { target: 2502, target_name: "organ_gun", source: 1102, source_name: "spearmen", type: 1 }, // spearman
  { target: 2502, target_name: "organ_gun", source: 1201, source_name: "archer", type: 1 }, // archer
  { target: 2502, target_name: "organ_gun", source: 1202, source_name: "skirmisher", type: 1 }, // skirmisher

  // konnik
  { target: 2601, target_name: "konnik", source: 1101, source_name: "militia", type: 1 }, // militia
  { target: 2601, target_name: "konnik", source: 1201, source_name: "archer", type: 1 }, // archer
  { target: 2601, target_name: "konnik", source: 1202, source_name: "skirmisher", type: 1 }, // skirmisher
  { target: 2601, target_name: "konnik", source: 1203, source_name: "hand_cannoneer", type: 1 }, // hand_cannoneer
  { target: 2601, target_name: "konnik", source: 1301, source_name: "scout", type: 1 }, // scout

  // missionary
  { target: 2604, target_name: "missionary", source: 1101, source_name: "militia", type: 1 }, // militia
];
