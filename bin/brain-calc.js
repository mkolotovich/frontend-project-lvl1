#!/usr/bin/env node

import { greeting } from '../src/cli.js';
import { playGame } from '../src/index.js';

greeting();
playGame([35, 16, 4, 10, 25, 11, 7], 'What is the result of the expression?');
