#!/usr/bin/env node

import { greeting } from '../src/cli.js';
import playGame from '../src/index.js';

greeting();
playGame([3, 5, 6, 7], 'Answer "yes" if given number is prime. Otherwise answer "no".');
