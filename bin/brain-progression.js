#!/usr/bin/env node

import { greeting } from '../src/cli.js';
import playGame from '../src/index.js';

greeting();
playGame([5, 7, 9, 11, 13, 15, 17, 19, 21, 23], 'What number is missing in the progression?');
