export const common = [
  // militia
  { target: 1101, source: 1102, type: 1 }, // spearmen
  { target: 1101, source: 1202, type: 1 }, // skirmishers
  { target: 1101, source: 1401, type: 1 }, // ram
  { target: 1101, source: 1404, type: 1 }, // trebuchet
  { target: 1101, source: 1405, type: 1 }, // bombard cannon
  { target: 1101, source: 1406, type: 1 }, // siege tower

  // spearmen
  { target: 1102, source: 1301, type: 1 }, // scout
  { target: 1102, source: 1302, type: 1 }, // knight
  { target: 1102, source: 1303, type: 1 }, // camel rider
  { target: 1102, source: 1401, type: 1 }, // ram
  { target: 1102, source: 1404, type: 1 }, // trebuchet
  { target: 1102, source: 1405, type: 1 }, // bombard cannon
  { target: 1102, source: 1406, type: 1 }, // siege tower

  // archer
  { target: 1201, source: 1101, type: 1 }, // militia
  { target: 1201, source: 1102, type: 1 }, // spearman
  { target: 1201, source: 1203, type: 1 }, // hand cannoneer
  { target: 1201, source: 1501, type: 1 }, // monk
  { target: 1201, source: 1502, type: 1 }, // petard

  // skirmisher
  { target: 1202, source: 1102, type: 1 }, // spearman
  { target: 1202, source: 1201, type: 1 }, // archer
  { target: 1202, source: 1203, type: 1 }, // hand cannoneer
  { target: 1202, source: 1304, type: 1 }, // cavalry archer
  { target: 1202, source: 1502, type: 1 }, // petard

  // hand cannoneer
  { target: 1203, source: 1101, type: 1 }, // militia
  { target: 1203, source: 1102, type: 1 }, // spearman
  { target: 1203, source: 1502, type: 1 }, // petard
  { target: 1203, source: 1501, type: 1 }, // monk

  // scout
  { target: 1301, source: 1202, type: 1 }, // skirmisher
  { target: 1301, source: 1401, type: 1 }, // ram
  { target: 1301, source: 1402, type: 1 }, // mangonel
  { target: 1301, source: 1404, type: 1 }, // trebuchet
  { target: 1301, source: 1405, type: 1 }, // bombard cannon
  { target: 1301, source: 1406, type: 1 }, // siege tower

  // knight
  { target: 1302, source: 1101, type: 1 }, // militia
  { target: 1302, source: 2113, type: 1 }, // eagle scout
  { target: 1302, source: 1201, type: 1 }, // archer
  { target: 1302, source: 1202, type: 1 }, // skirmisher
  { target: 1302, source: 1203, type: 1 }, // hand cannoneer
  { target: 1302, source: 1301, type: 1 }, // scout
  { target: 1302, source: 1304, type: 1 }, // cavalry archer
  { target: 1302, source: 1401, type: 1 }, // ram
  { target: 1302, source: 1402, type: 1 }, // mangonel
  { target: 1302, source: 1403, type: 1 }, // scorpion
  { target: 1302, source: 1404, type: 1 }, // trebuchet
  { target: 1302, source: 1405, type: 1 }, // bombard cannon
  { target: 1302, source: 1406, type: 1 }, // siege tower

  // camel rider
  { target: 1303, source: 1202, type: 1 }, // skirmisher
  { target: 1303, source: 1301, type: 1 }, // scout
  { target: 1303, source: 1302, type: 1 }, // knight
  { target: 1303, source: 1304, type: 1 }, // cavalry archer
  { target: 1303, source: 1401, type: 1 }, // ram
  { target: 1303, source: 1404, type: 1 }, // trebuchet
  { target: 1303, source: 1405, type: 1 }, // bombard cannon
  { target: 1303, source: 1406, type: 1 }, // siege tower

  // cavalry archer
  { target: 1304, source: 1101, type: 1 }, // militia
  { target: 1304, source: 1102, type: 1 }, // spearman
  { target: 1304, source: 1203, type: 1 }, // hand cannoneer
  { target: 1304, source: 1301, type: 1 }, // scout
  { target: 1304, source: 1402, type: 1 }, // mangonel
  { target: 1304, source: 1501, type: 1 }, // monk
  { target: 1304, source: 1502, type: 1 }, // petard

  // ram
  { target: 1401, source: 1201, type: 1 }, // archer
  { target: 1401, source: 1202, type: 1 }, // skirmisher
  { target: 1401, source: 1304, type: 1 }, // cavalry archer
  { target: 1401, source: 1203, type: 1 }, // hand cannoneer

  // mangonel
  { target: 1402, source: 1101, type: 1 }, // militia
  { target: 1402, source: 1102, type: 1 }, // spearman
  { target: 1402, source: 1202, type: 1 }, // skirmisher
  { target: 1402, source: 1401, type: 1 }, // ram
  { target: 1402, source: 1403, type: 1 }, // scorpion
  { target: 1402, source: 1404, type: 1 }, // trebuchet

  // scorpion
  { target: 1403, source: 1201, type: 1 }, // archer
  { target: 1403, source: 1202, type: 1 }, // skirmishe
  { target: 1403, source: 1203, type: 1 }, // hand cannoneerr

  // trebuchet
  { target: 1404, source: 1201, type: 1 }, // archer
  { target: 1404, source: 1202, type: 1 }, // skirmishe
  { target: 1404, source: 1304, type: 1 }, // cavalry archer

  // bombard cannon
  { target: 1405, source: 1404, type: 1 }, // trebuchet
  { target: 1405, source: 1202, type: 1 }, // skirmishe
  { target: 1405, source: 1401, type: 1 }, // ram
  { target: 1405, source: 1402, type: 1 }, // mangonel

  // siege tower
  { target: 1406, source: 1201, type: 1 }, // archer
  { target: 1406, source: 1202, type: 1 }, // skirmishe
  { target: 1406, source: 1304, type: 1 }, // cavalry archer

  // monk
  { target: 1501, source: 1101, type: 1 }, // militia
  { target: 1501, source: 1302, type: 1 }, // knight
  { target: 1501, source: 1303, type: 1 }, // camel rider

  // petard
  { target: 1502, source: 1101, type: 1 }, // militia
  { target: 1502, source: 1102, type: 1 }, // spearman
  { target: 1502, source: 1401, type: 1 }, // ram

  // // infantry
  // { target: 11, source: 13, type: 1 }, // infantry

  // // artillery
  // { target: 12, source: 11, type: 1 }, // infantry

  // // cavalry
  // { target: 13, source: 12, type: 1 }, // artillery
];

export const unique = [
  // eagle warrior
  { target: 2113, source: 2201, type: 1 }, // longbowman
  { target: 2113, source: 2202, type: 1 }, // chu ko nu
  { target: 2113, source: 2204, type: 1 }, // genoese crossbowma
  { target: 2113, source: 2206, type: 1 }, // janissary
  { target: 2113, source: 2207, type: 1 }, // rattan archer
  { target: 2113, source: 2304, type: 1 }, // tarkan
  { target: 2113, source: 2401, type: 1 }, // genitour
  { target: 2113, source: 2402, type: 1 }, // camel archer
  { target: 2113, source: 2404, type: 1 }, // kipchak
  { target: 2113, source: 2405, type: 1 }, // elephant archer
  { target: 2113, source: 2301, type: 1 }, // steppe lancer
  { target: 2113, source: 2502, type: 1 }, // organ gun
  { target: 2113, source: 2604, type: 1 }, // missionary

  // jaguar warrior
  { target: 2101, source: 2113, type: 1 }, // eagle scout

  // woad raider
  { target: 2102, source: 2113, type: 1 }, // eagle scout

  // shotel warrior
  { target: 2103, source: 2113, type: 1 }, // eagle scout

  // huskarl
  { target: 2104, source: 2113, type: 1 }, // eagle scout

  // condottiero
  { target: 2106, source: 2113, type: 1 }, // eagle scout

  // samurai
  { target: 2107, source: 2113, type: 1 }, // eagle scout

  // teutonic knight
  { target: 2109, source: 2113, type: 1 }, // eagle scout

  // berserker
  { target: 2110, source: 2113, type: 1 }, // eagle scout

  // gbeto
  { target: 2111, source: 2113, type: 1 }, // eagle scout

  // throwing axeman
  { target: 2112, source: 2113, type: 1 }, // eagle scout

  // battle elephant
  { target: 2302, source: 1201, type: 1 }, // archer

  // cataphracts
  { target: 2303, source: 2113, type: 1 }, // eagle scout

  // tarkan
  { target: 2304, source: 1201, type: 1 }, // archer

  // leitis
  { target: 2305, source: 2113, type: 1 }, // eagles

  // war elephant
  { target: 2307, source: 2113, type: 1 }, // eagle scout

  // boyar
  { target: 2308, source: 2113, type: 1 }, // eagle scout

  // keshik
  { target: 2309, source: 2113, type: 1 }, // eagles

  // arambai
  { target: 2403, source: 2113, type: 1 }, // eagle scout

  // mameluke
  { target: 2408, source: 2113, type: 1 }, // eagle scout

  // conquistador
  { target: 2409, source: 2113, type: 1 }, // eagle scout

];

export const combined = [
  // militia
  { target: 1101, source: 2104, type: 1 }, // huskarl
  { target: 1101, source: 2113, type: 1 }, // eagles

  //spearman
  { target: 1102, source: 2301, type: 1 }, // steppe lancer
  { target: 1102, source: 2302, type: 1 }, // battle elephant
  { target: 1102, source: 2303, type: 1 }, // cataphract
  { target: 1102, source: 2304, type: 1 }, // tarkan
  { target: 1102, source: 2305, type: 1 }, // leitis
  { target: 1102, source: 2306, type: 1 }, // magyar huszar
  { target: 1102, source: 2307, type: 1 }, // war elephant
  { target: 1102, source: 2308, type: 1 }, // boyar
  { target: 1102, source: 2309, type: 1 }, // keshik
  { target: 1102, source: 2405, type: 1 }, // elephant archer

  // archer
  { target: 1201, source: 2101, type: 1 }, // jaguar warrior
  { target: 1201, source: 2107, type: 1 }, // samurai
  { target: 1201, source: 2109, type: 1 }, // teutonic knight
  { target: 1201, source: 2111, type: 1 }, // throwing axeman
  { target: 1201, source: 2203, type: 1 }, // slinger

  // skirmisher
  { target: 1202, source: 2201, type: 1 }, // longbowman
  { target: 1202, source: 2203, type: 1 }, // slinger
  { target: 1202, source: 2204, type: 1 }, // genoese crossbowman
  { target: 1202, source: 2205, type: 1 }, // plumed archer
  { target: 1202, source: 2207, type: 1 }, // rattan archer
  { target: 1202, source: 2402, type: 1 }, // camel archer
  { target: 1202, source: 2404, type: 1 }, // kipchak
  { target: 1202, source: 2407, type: 1 }, // mangudai

  // hand cannoneer
  { target: 1203, source: 2203, type: 1 }, // slinger
  { target: 1203, source: 2101, type: 1 }, // jaguar warrior
  { target: 1203, source: 2102, type: 1 }, // woad raider
  { target: 1203, source: 2103, type: 1 }, // shotel warrior
  { target: 1203, source: 2105, type: 1 }, // kamayuk
  { target: 1203, source: 2107, type: 1 }, // samurai
  { target: 1203, source: 2108, type: 1 }, // karambit warrior
  { target: 1203, source: 2109, type: 1 }, // teutonic knight
  { target: 1203, source: 2110, type: 1 }, // berserker
  { target: 1203, source: 2112, type: 1 }, // gbeto

  { target: 1203, source: 2203, type: 1 }, // slinger
  { target: 1203, source: 2203, type: 1 }, // slinger
  { target: 1203, source: 2203, type: 1 }, // slinger

  // jaguar warrior
  { target: 2101, source: 1101, type: 1 }, // militia
  { target: 2101, source: 1102, type: 1 }, // spearman
  { target: 2101, source: 1202, type: 1 }, // skirmisher

  // woad raider
  { target: 2102, source: 1102, type: 1 }, // spearman
  { target: 2102, source: 1201, type: 1 }, // archer
  { target: 2102, source: 1202, type: 1 }, // skirmisher

  // shotel warrior
  { target: 2103, source: 1102, type: 1 }, // spearman
  { target: 2103, source: 1202, type: 1 }, // skirmisher

  // huskarl
  { target: 2104, source: 1102, type: 1 }, // spearman
  { target: 2104, source: 1201, type: 1 }, // archer
  { target: 2104, source: 1202, type: 1 }, // skirmisher

  // kamayuk
  { target: 2105, source: 1102, type: 1 }, // spearman
  { target: 2105, source: 1202, type: 1 }, // skirmisher

  // condottiero
  { target: 2106, source: 1102, type: 1 }, // spearman
  { target: 2106, source: 1201, type: 1 }, // archer
  { target: 2106, source: 1202, type: 1 }, // skirmisher
  { target: 2106, source: 1203, type: 1 }, // hand cannoneer

  // samurai
  { target: 2107, source: 1102, type: 1 }, // spearman
  { target: 2107, source: 1202, type: 1 }, // skirmisher

  // karambit warrior
  { target: 2108, source: 1102, type: 1 }, // spearman
  { target: 2108, source: 1202, type: 1 }, // skirmisher

  // teutonic knight
  { target: 2109, source: 1101, type: 1 }, // militia
  { target: 2109, source: 1102, type: 1 }, // spearman
  { target: 2109, source: 1202, type: 1 }, // skirmisher

  // berserker
  { target: 2110, source: 1102, type: 1 }, // spearman
  { target: 2110, source: 1202, type: 1 }, // skirmisher

  // gbeto
  { target: 2111, source: 1102, type: 1 }, // spearman
  { target: 2111, source: 1202, type: 1 }, // skirmisher

  // throwing axeman
  { target: 2112, source: 1102, type: 1 }, // spearman
  { target: 2112, source: 1202, type: 1 }, // skirmisher

  // eagles
  { target: 2113, source: 1102, type: 1 }, // spearmen
  { target: 2113, source: 1201, type: 1 }, // archer
  { target: 2113, source: 1203, type: 1 }, // hand cannoneer
  { target: 2113, source: 1202, type: 1 }, // skirmisher
  { target: 2113, source: 1301, type: 1 }, // scout
  { target: 2113, source: 1303, type: 1 }, // camel rider
  { target: 2113, source: 1304, type: 1 }, // cavalry archer
  { target: 2113, source: 1401, type: 1 }, // ram
  { target: 2113, source: 1402, type: 1 }, // mangonel
  { target: 2113, source: 1501, type: 1 }, // monk
  { target: 2113, source: 1404, type: 1 }, // trebuchet
  { target: 2113, source: 1405, type: 1 }, // bombard cannon
  { target: 2113, source: 1406, type: 1 }, // siege tower

  // longbowman
  { target: 2201, source: 1101, type: 1 }, // militia
  { target: 2201, source: 1102, type: 1 }, // spearman
  { target: 2201, source: 1201, type: 1 }, // archer
  { target: 2201, source: 1203, type: 1 }, // hand cannoneer

  // chu ko nu
  { target: 2202, source: 1101, type: 1 }, // militia
  { target: 2202, source: 1102, type: 1 }, // spearman
  { target: 2202, source: 1203, type: 1 }, // hand cannoneer

  // slinger
  { target: 2203, source: 1101, type: 1 }, // militia
  { target: 2203, source: 1102, type: 1 }, // spearman

  // genoese crossbowman
  { target: 2204, source: 1101, type: 1 }, // militia
  { target: 2204, source: 1102, type: 1 }, // spearman
  { target: 2204, source: 1203, type: 1 }, // hand cannoneer

  // plumed archer
  { target: 2205, source: 1101, type: 1 }, // militia
  { target: 2205, source: 1102, type: 1 }, // spearman
  { target: 2205, source: 1201, type: 1 }, // archer
  { target: 2205, source: 1203, type: 1 }, // hand cannoneer

  // janissary
  { target: 2206, source: 1101, type: 1 }, // militia
  { target: 2206, source: 1102, type: 1 }, // spearman
  { target: 2206, source: 1202, type: 1 }, // skirmisher
  { target: 2207, source: 1203, type: 1 }, // hand cannoneer

  // rattan archer
  { target: 2207, source: 1101, type: 1 }, // militia
  { target: 2207, source: 1102, type: 1 }, // spearman
  { target: 2207, source: 1201, type: 1 }, // archer
  { target: 2207, source: 1203, type: 1 }, // hand cannoneer

  // steppe lancer
  { target: 2301, source: 1202, type: 1 }, // skirmisher
  { target: 2301, source: 1203, type: 1 }, // hand cannoneer

  // battle elephant
  { target: 2302, source: 1201, type: 1 }, // archer
  { target: 2302, source: 1202, type: 1 }, // skirmisher
  { target: 2302, source: 1203, type: 1 }, // hand cannoneer

  // cataphracts
  { target: 2303, source: 1101, type: 1 }, // militia
  { target: 2303, source: 1201, type: 1 }, // archer
  { target: 2303, source: 1202, type: 1 }, // skirmisher
  { target: 2303, source: 1203, type: 1 }, // hand cannoneer

  // tarkan
  { target: 2304, source: 1201, type: 1 }, // archer
  { target: 2304, source: 1202, type: 1 }, // skirmisher
  { target: 2304, source: 1203, type: 1 }, // hand cannoneer

  // leitis
  { target: 2305, source: 1201, type: 1 }, // archer
  { target: 2305, source: 1202, type: 1 }, // skirmisher
  { target: 2305, source: 1203, type: 1 }, // hand cannoneer

  // magyar huszar
  { target: 2306, source: 1201, type: 1 }, // archer
  { target: 2306, source: 1202, type: 1 }, // skirmisher
  { target: 2306, source: 1203, type: 1 }, // hand cannoneer

  // war elephant
  { target: 2307, source: 1101, type: 1 }, // militia
  { target: 2307, source: 1201, type: 1 }, // archer
  { target: 2307, source: 1202, type: 1 }, // skirmisher
  { target: 2307, source: 1203, type: 1 }, // hand cannoneer

  // boyar
  { target: 2308, source: 1101, type: 1 }, // militia
  { target: 2308, source: 1201, type: 1 }, // archer
  { target: 2308, source: 1202, type: 1 }, // skirmisher
  { target: 2308, source: 1203, type: 1 }, // hand cannoneer

  // keshik
  { target: 2309, source: 1201, type: 1 }, // archer
  { target: 2309, source: 1202, type: 1 }, // skirmisher
  { target: 2309, source: 1203, type: 1 }, // hand cannoneer

  // genitour
  { target: 2401, source: 1201, type: 1 }, // archer
  { target: 2401, source: 1203, type: 1 }, // hand cannoneer

  // camel archer
  { target: 2402, source: 1101, type: 1 }, // militia
  { target: 2402, source: 1203, type: 1 }, // hand cannoneer

  // arambai
  { target: 2403, source: 1101, type: 1 }, // militia
  { target: 2403, source: 1102, type: 1 }, // spearman
  { target: 2403, source: 1201, type: 1 }, // archer
  { target: 2403, source: 1202, type: 1 }, // skirmisher
  { target: 2403, source: 1203, type: 1 }, // hand cannoneer

  // kipchak
  { target: 2404, source: 1101, type: 1 }, // militia
  { target: 2404, source: 1203, type: 1 }, // hand cannoneer

  // elephant archer
  { target: 2405, source: 1101, type: 1 }, // militia
  { target: 2405, source: 1201, type: 1 }, // archer
  { target: 2405, source: 1202, type: 1 }, // skirmisher
  { target: 2405, source: 1203, type: 1 }, // hand cannoneer

  // war wagon
  { target: 2406, source: 1101, type: 1 }, // militia
  { target: 2406, source: 1201, type: 1 }, // archer
  { target: 2406, source: 1202, type: 1 }, // skirmisher
  { target: 2406, source: 1203, type: 1 }, // hand cannoneer

  // mangudai
  { target: 2407, source: 1101, type: 1 }, // militia
  { target: 2407, source: 1102, type: 1 }, // spearman
  { target: 2407, source: 1203, type: 1 }, // hand cannoneer

  // mameluke
  { target: 2408, source: 1101, type: 1 }, // militia
  { target: 2408, source: 1102, type: 1 }, // spearman
  { target: 2408, source: 1201, type: 1 }, // archer
  { target: 2408, source: 1202, type: 1 }, // skirmisher
  { target: 2408, source: 1203, type: 1 }, // hand cannoneer

  // conquistador
  { target: 2409, source: 1101, type: 1 }, // militia
  { target: 2409, source: 1102, type: 1 }, // spearman
  { target: 2409, source: 1201, type: 1 }, // archer
  { target: 2409, source: 1202, type: 1 }, // skirmisher
  { target: 2409, source: 1203, type: 1 }, // hand cannoneer

  // ballista elephant
  { target: 2501, source: 1101, type: 1 }, // militia
  { target: 2501, source: 1201, type: 1 }, // archer
  { target: 2501, source: 1202, type: 1 }, // skirmisher
  { target: 2501, source: 1203, type: 1 }, // hand cannoneer

  // organ gun
  { target: 2502, source: 1102, type: 1 }, // spearman
  { target: 2502, source: 1201, type: 1 }, // archer
  { target: 2502, source: 1202, type: 1 }, // skirmisher

  // konnik
  { target: 2601, source: 1101, type: 1 }, // militia
  { target: 2601, source: 1201, type: 1 }, // archer
  { target: 2601, source: 1202, type: 1 }, // skirmisher
  { target: 2601, source: 1203, type: 1 }, // hand cannoneer

  // missionary
  { target: 2604, source: 1101, type: 1 }, // militia
];
