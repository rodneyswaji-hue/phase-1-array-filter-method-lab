// Code your solution here
function findMatching (array, driverName) {
    const match = array.filter(item => item === driverName || item === driverName.toLowerCase())
    return match
}
function fuzzyMatch (array, firstLetter) {
    const match = array.filter(item => item.slice(0,2) === firstLetter)
    return match
}
function matchName (arrayOfDriverObject, driver_Name) {
   
    const nameMatch = arrayOfDriverObject.filter(item => item.name === driver_Name);
    return nameMatch
}