#!/usr/bin/env node

import { greeting } from '../src/cli.js';
import { gameFlow } from '../src/index.js';

greeting();
gameFlow([3, 5, 6, 7], 'Answer "yes" if given number is prime. Otherwise answer "no".');
