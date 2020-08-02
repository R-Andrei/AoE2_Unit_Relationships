export const links = [
  // militia
  { target: 1, source: 2, type: 1 }, // spearmen
  { target: 1, source: 3, type: 1 }, // eagles
  { target: 1, source: 5, type: 1 }, // skirmishers
  { target: 1, source: 10, type: 1 }, // battering ram

  // spearmen
  { target: 2, source: 6, type: 1 }, // scout
  { target: 2, source: 7, type: 1 }, // knight
  { target: 2, source: 8, type: 1 }, // camel_rider
  { target: 2, source: 10, type: 1 }, // ram

  // eagles
  { target: 3, source: 2, type: 1 }, // spearmen
  { target: 3, source: 5, type: 1 }, // skirmisher
  { target: 3, source: 6, type: 1 }, // scout
  { target: 3, source: 10, type: 1 }, // battering ram
  { target: 3, source: 11, type: 1 }, // mangonel
  { target: 3, source: 13, type: 1 }, // monk

  // archer
  { target: 4, source: 1, type: 1 }, // militia
  { target: 4, source: 2, type: 1 }, // spearman
  { target: 4, source: 13, type: 1 }, // monk

  // skirmisher
  { target: 5, source: 2, type: 1 }, // spearman
  { target: 5, source: 4, type: 1 }, // archer,
  { target: 5, source: 9, type: 1 }, // cavalry archer

  // scout
  { target: 6, source: 5, type: 1 }, // skirmisher
  { target: 6, source: 10, type: 1 }, // battering ram
  { target: 6, source: 11, type: 1 }, // mangonel
  { target: 6, source: 13, type: 1 }, // monk,

  // knight
  { target: 7, source: 5, type: 1 }, // militia
  { target: 7, source: 3, type: 1 }, // eagle scout
  { target: 7, source: 4, type: 1 }, // archer
  { target: 7, source: 5, type: 1 }, // skirmisher
  { target: 7, source: 6, type: 1 }, // scout
  { target: 7, source: 9, type: 1 }, // cavalry archer
  { target: 7, source: 10, type: 1 }, // ram
  { target: 7, source: 11, type: 1 }, // mangonel
  { target: 7, source: 12, type: 1 }, // scorpion

  // camel rider
  { target: 8, source: 6, type: 1 }, // scout
  { target: 8, source: 7, type: 1 }, // knight
  { target: 8, source: 9, type: 1 }, // cavalry archer
  { target: 8, source: 10, type: 1 }, // ram

  // cavalry archer
  { target: 9, source: 1, type: 1 }, // militia
  { target: 9, source: 2, type: 1 }, // spearman
  { target: 9, source: 3, type: 1 }, // eagle scout
  { target: 9, source: 6, type: 1 }, // scout
  { target: 9, source: 11, type: 1 }, // mangonel
  { target: 9, source: 13, type: 1 }, // monk

  // battering ram
  { target: 10, source: 4, type: 1 }, // archer
  { target: 10, source: 5, type: 1 }, // skirmisher
  { target: 10, source: 9, type: 1 }, // cavalry archer

  // mangonel
  { target: 11, source: 1, type: 1 }, // militia
  { target: 11, source: 2, type: 1 }, // spearman
  { target: 11, source: 5, type: 1 }, // skirmisher
  { target: 11, source: 10, type: 1 }, // ram
  { target: 11, source: 12, type: 1 }, // cscorpion

  // scorpion
  { target: 12, source: 4, type: 1 }, // archer
  { target: 12, source: 5, type: 1 }, // skirmisher

  // monk
  { target: 13, source: 1, type: 1 }, // militia
  { target: 13, source: 7, type: 1 }, // knight
  { target: 13, source: 8, type: 1 }, // camel rider
  { target: 13, source: 9, type: 1 }, // cavalry archer
];
