import faker from "faker";

export const initialState = tableData();

function tableData() {
  let result = [];
  for (let i = 0; i < 100; i++) {
    let tableRowDataArray = [
      faker.name.firstName(),//first name
      faker.name.lastName(),// last name
      `${faker.date.past().toLocaleString('en-US')}`,// birth year
      faker.commerce.price().toLocaleString(),// price
      `${faker.name.jobDescriptor()} ${faker.name.jobArea()} ${faker.name.jobType()}`,// job
      (Math.random() - 0.5 > 0) ? '✓': '✗',// true:false
      (Math.random() * Date.now()).toFixed(0)// date in seconds
    ];
    result.push(tableRowDataArray)
  }
  return result
}