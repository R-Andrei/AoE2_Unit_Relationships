export const common = [
  // militia
  { target: 1101, source: 1102, type: 1 }, // spearmen
  { target: 1101, source: 1103, type: 1 }, // eagles
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

  // eagles
  { target: 1103, source: 1102, type: 1 }, // spearmen
  { target: 1103, source: 1201, type: 1 }, // archer
  { target: 1103, source: 1202, type: 1 }, // skirmisher
  { target: 1103, source: 1203, type: 1 }, // hand cannoneer
  { target: 1103, source: 1301, type: 1 }, // scout
  { target: 1103, source: 1303, type: 1 }, // camel rider
  { target: 1103, source: 1304, type: 1 }, // cavalry archer
  { target: 1103, source: 1401, type: 1 }, // ram
  { target: 1103, source: 1402, type: 1 }, // mangonel
  { target: 1103, source: 1501, type: 1 }, // monk
  { target: 1103, source: 1404, type: 1 }, // trebuchet
  { target: 1103, source: 1405, type: 1 }, // bombard cannon
  { target: 1103, source: 1406, type: 1 }, // siege tower

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
  { target: 1302, source: 1103, type: 1 }, // eagle scout
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
];

export const unique = [];

export const combined = [
  // militia
  { target: 1101, source: 2104, type: 1 }, // spearmen

  //spearman
  { target: 1102, source: 1305, type: 1 }, // steppe lancer
  { target: 1102, source: 1305, type: 1 }, // battle elephant
  { target: 1102, source: 2301, type: 1 }, // cataphract
  { target: 1102, source: 2302, type: 1 }, // tarkan
  { target: 1102, source: 2303, type: 1 }, // leitis
  { target: 1102, source: 2304, type: 1 }, // magyar huszar
  { target: 1102, source: 2305, type: 1 }, // war elephant
  { target: 1102, source: 2306, type: 1 }, // boyar
  { target: 1102, source: 2307, type: 1 }, // keshik
  { target: 1102, source: 2405, type: 1 }, // elephant archer

  // eagle warrior
  { target: 1103, source: 2201, type: 1 }, // longbowman
  { target: 1103, source: 2202, type: 1 }, // chu ko nu
  { target: 1103, source: 2204, type: 1 }, // genoese crossbowma
  { target: 1103, source: 2206, type: 1 }, // janissary
  { target: 1103, source: 2207, type: 1 }, // rattan archer
  { target: 1103, source: 2302, type: 1 }, // tarkan
  { target: 1103, source: 2401, type: 1 }, // genitour
  { target: 1103, source: 2402, type: 1 }, // camel archer
  { target: 1103, source: 2404, type: 1 }, // kipchak
  { target: 1103, source: 2405, type: 1 }, // elephant archer
  { target: 1103, source: 2502, type: 1 }, // organ gun
  { target: 1103, source: 2604, type: 1 }, // missionary

  // archer
  { target: 1201, source: 2101, type: 1 }, // jaguar warrior
  { target: 1201, source: 2107, type: 1 }, // samurai
  { target: 1201, source: 2109, type: 1 }, // teutonic knight
  { target: 1201, source: 2111, type: 1 }, // throwing axeman

  // jaguar warrior
  { target: 2101, source: 1101, type: 1 }, // militia
  { target: 2101, source: 1102, type: 1 }, // spearman
  { target: 2101, source: 1103, type: 1 }, // eagle scout

  // woad raider
  { target: 2102, source: 1102, type: 1 }, // spearman
  { target: 2102, source: 1103, type: 1 }, // eagle scout
  { target: 2102, source: 1201, type: 1 }, // archer

  // shotel warrior
  { target: 2103, source: 1102, type: 1 }, // spearman

  // huskarl
  { target: 2104, source: 1102, type: 1 }, // spearman
  { target: 2104, source: 1103, type: 1 }, // eagle scout
  { target: 2104, source: 1201, type: 1 }, // archer

  // kamayuk
  { target: 2105, source: 1102, type: 1 }, // spearman

  // condottiero
  { target: 2106, source: 1102, type: 1 }, // spearman
  { target: 2106, source: 1103, type: 1 }, // eagle scout

  // samurai
  { target: 2107, source: 1102, type: 1 }, // spearman
  { target: 2107, source: 1103, type: 1 }, // eagle scout

  // karambit warrior
  { target: 2108, source: 1102, type: 1 }, // spearman

  // teutonic knight
  { target: 2109, source: 1101, type: 1 }, // militia
  { target: 2109, source: 1102, type: 1 }, // spearman
  { target: 2109, source: 1103, type: 1 }, // eagle scout

  // berserker
  { target: 2110, source: 1102, type: 1 }, // spearman
  { target: 2110, source: 1103, type: 1 }, // eagle scout

  // gbeto
  { target: 2111, source: 1102, type: 1 }, // spearman
  { target: 2111, source: 1103, type: 1 }, // eagle scout

  // throwing axeman
  { target: 2112, source: 1102, type: 1 }, // spearman
  { target: 2112, source: 1103, type: 1 }, // eagle scout

  // longbowman
  { target: 2201, source: 1101, type: 1 }, // militia
  { target: 2201, source: 1102, type: 1 }, // spearman
  { target: 2201, source: 1201, type: 1 }, // archer

  // chu ko nu
  { target: 2202, source: 1101, type: 1 }, // militia
  { target: 2202, source: 1102, type: 1 }, // spearman

  // slinger
  { target: 2203, source: 1101, type: 1 }, // militia
  { target: 2203, source: 1102, type: 1 }, // spearman

  // genoese crossbowman
  { target: 2204, source: 1101, type: 1 }, // militia
  { target: 2204, source: 1102, type: 1 }, // spearman

  // plumed archer
  { target: 2205, source: 1101, type: 1 }, // militia
  { target: 2205, source: 1102, type: 1 }, // spearman
  { target: 2205, source: 1201, type: 1 }, // archer

  // janissary
  { target: 2206, source: 1101, type: 1 }, // militia
  { target: 2206, source: 1102, type: 1 }, // spearman

  // rattan archer
  { target: 2207, source: 1101, type: 1 }, // militia
  { target: 2207, source: 1102, type: 1 }, // spearman

  // steppe lancer
  { target: 1305, source: 1201, type: 1 }, // archer

  // battle elephant
  { target: 1305, source: 1201, type: 1 }, // archer

  // cataphracts
  { target: 2301, source: 1101, type: 1 }, // militia
  { target: 2301, source: 1103, type: 1 }, // eagle scout
  { target: 2301, source: 1201, type: 1 }, // archer

  // tarkan
  { target: 2302, source: 1201, type: 1 }, // archer

  // leitis
  { target: 2303, source: 1201, type: 1 }, // archer
  { target: 2303, source: 1103, type: 1 }, // eagle scout

  // magyar huszar
  { target: 2304, source: 1201, type: 1 }, // archer

  // war elephant
  { target: 2305, source: 1101, type: 1 }, // militia
  { target: 2305, source: 1103, type: 1 }, // eagle scout
  { target: 2305, source: 1201, type: 1 }, // archer

  // boyar
  { target: 2306, source: 1101, type: 1 }, // militia
  { target: 2306, source: 1103, type: 1 }, // eagle scout
  { target: 2306, source: 1201, type: 1 }, // archer

  // keshik
  { target: 2307, source: 1201, type: 1 }, // archer
  { target: 2307, source: 1103, type: 1 }, // eagle scout

  // camel archer
  { target: 2402, source: 1101, type: 1 }, // militia

  // arambai
  { target: 2403, source: 1101, type: 1 }, // militia
  { target: 2403, source: 1102, type: 1 }, // spearman
  { target: 2403, source: 1103, type: 1 }, // eagle scout

  // kipchak
  { target: 2404, source: 1101, type: 1 }, // militia

  // elephant archer
  { target: 2405, source: 1101, type: 1 }, // militia

  // war wagon
  { target: 2406, source: 1101, type: 1 }, // militia
  { target: 2406, source: 1201, type: 1 }, // archer

  // mangudai
  { target: 2407, source: 1101, type: 1 }, // militia
  { target: 2407, source: 1102, type: 1 }, // spearman

  // mameluke
  { target: 2408, source: 1101, type: 1 }, // militia
  { target: 2408, source: 1102, type: 1 }, // spearman
  { target: 2408, source: 1103, type: 1 }, // eagle scout

  // conquistador
  { target: 2409, source: 1101, type: 1 }, // militia
  { target: 2409, source: 1102, type: 1 }, // spearman
  { target: 2409, source: 1103, type: 1 }, // eagle scout

  // ballista elephant
  { target: 2501, source: 1101, type: 1 }, // militia

  // organ gun
  { target: 2502, source: 1102, type: 1 }, // spearman

  // konnik
  { target: 2601, source: 1101, type: 1 }, // militia

  // missionary
  { target: 2604, source: 1101, type: 1 }, // militia
];
