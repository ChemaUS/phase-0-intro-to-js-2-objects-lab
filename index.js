// Write your solution in this file!
const employee = {
    name: "Cesar",
    address: "214 conch st"
}
function updateEmployeeWithKeyAndValue(employee,key,value){
     return {...employee,
        [key]:value
    }}
    function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key]= value
        return employee
    }
    function deleteFromEmployeeByKey(employee,key,value){
        delete employee.key;
        return{
            ...employee,
            [key]: value,
        }
    }
    function destructivelyDeleteFromEmployeeByKey(employee,key,value){
        delete employee.key;
        employee[key]= value;
        return employee
    }