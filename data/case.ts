import data from './data/case.json';
import { Case } from '../models/Case';

const path = require('path');
const fs = require('fs');

export function getCases(): Case[] {
  return data as Case[];
}

export function getCasesFromJson(): Case[] {
  const casesJsonPath = path.join(process.cwd(), 'data', 'data', 'case.json');
  return JSON.parse(fs.readFileSync(casesJsonPath, 'utf8')) as Case[];
}
