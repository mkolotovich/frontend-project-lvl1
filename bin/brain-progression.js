#!/usr/bin/env node

import { greeting } from '../src/cli.js';
import { playGame } from '../src/index.js';

greeting();
playGame([], 'What number is missing in the progression?');
