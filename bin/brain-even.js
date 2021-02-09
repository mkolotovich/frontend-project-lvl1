#!/usr/bin/env node

import { greeting } from '../src/cli.js';
import { playGame } from '../src/index.js';

greeting();
playGame([15, 6, 7], 'Answer "yes" if the number is even, otherwise answer "no".');
