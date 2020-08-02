export const links = [
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
  { target: 1102, source: 1303, type: 1 }, // camel_rider
  { target: 1102, source: 1401, type: 1 }, // ram
  { target: 1102, source: 1404, type: 1 }, // trebuchet
  { target: 1102, source: 1405, type: 1 }, // bombard cannon
  { target: 1102, source: 1406, type: 1 }, // siege tower

  // eagles
  { target: 1103, source: 1102, type: 1 }, // spearmen
  { target: 1103, source: 1202, type: 1 }, // skirmisher
  { target: 1103, source: 1301, type: 1 }, // scout
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
  { target: 1301, source: 1103, type: 1 }, // eagle warrior
  { target: 1301, source: 1404, type: 1 }, // trebuchet
  { target: 1301, source: 1405, type: 1 }, // bombard cannon
  { target: 1301, source: 1406, type: 1 }, // siege tower

  // knight
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
  { target: 1304, source: 1103, type: 1 }, // eagle scout
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
