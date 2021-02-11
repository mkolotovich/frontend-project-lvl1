#!/usr/bin/env node

import { greeting } from '../src/cli.js';
import playGame from '../src/index.js';

greeting();
playGame([25, 50, 100, 52, 3, 9, 3, 3, 4, 5, 1, 1], 'Find the greatest common divisor of given numbers.');
