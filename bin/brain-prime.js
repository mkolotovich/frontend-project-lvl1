#!/usr/bin/env node

import { greeting } from '../src/cli.js';
import { gameFlow } from '../src/index.js';

greeting();
gameFlow([7], 'Answer "yes" if given number is prime. Otherwise answer "no".');
