import faker from "faker";

export const position = [
  { value: 'Senior', label: 'Senior' },
  { value: 'Middle', label: 'Middle' },
  { value: 'Junior', label: 'Junior' },
  { value: 'developer', label: 'developer' },
  { value: 'HR', label: 'HR' },
  { value: 'engineer', label: 'engineer' }
  ];
const index = (min,max)=>{
 let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand)};

export const initialState = tableData();

function tableData() {
  let result = [];
  for (let i = 0; i < 100; i++) {
    let tableRowDataArray = [
      faker.name.firstName(),//first name
      faker.name.lastName(),// last name
      faker.company.companyName(),// email
      faker.commerce.price().toLocaleString(),// price
      `${position[index(0,2)].label} ${position[index(3,5)].label}`,// job
      (Math.random() - 0.5 > 0) ,// true:false
      (Math.random() * Date.now()).toFixed(0)// date in seconds
    ];
    result.push(tableRowDataArray)
  }
  return result
}