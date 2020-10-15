import { Employee } from '../models/Employee';

const path = require('path');
const fs = require('fs');

export function getEmployeesFromJson(): Employee[] {
  const jsonPath = path.join(process.cwd(), 'data', 'data', 'employee.json');
  return JSON.parse(fs.readFileSync(jsonPath, 'utf8')) as Employee[];
}
