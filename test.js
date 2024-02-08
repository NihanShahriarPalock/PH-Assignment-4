function calculateMoney(ticketSale) {

  if (ticketSale < 0)
    return "Invalid Number";

  if (ticketSale >= 0) {

    const totalTicketPrice = ticketSale * 120;
    const guardSalary = 1 * 500;
    const staffCost = 8 * 50;
    const totalCost = totalTicketPrice - (guardSalary + staffCost);
    return totalCost;
  }
}





function checkName(name) {
  if (typeof name !== 'string')
    return "invalid";

  if (typeof name === 'string') {
    let lowerCase = name.toLowerCase();
    let lastChar = lowerCase.charAt(lowerCase.length - 1);
    if (lastChar.includes('a') || lastChar.includes('e') || lastChar.includes('i') || lastChar.includes('o') ||   lastChar.includes('u') || lastChar.includes('y') || lastChar.includes('w')) {
      return "Good Name";
    }
    else {
      return "Bad Name";
    }
  }
}





function deleteInvalids(array) {

  if (Array.isArray(array)) {
    const newArray = [];
    for (const number of array) {
      if (typeof number === "number" && !isNaN(number))
        newArray.push(number);
    }
    return newArray;
  }
  if (!Array.isArray(array)) {
    return "Invalid Array";
  }
}





function password(obj) {
  if (Object.keys(obj).length === 3 && obj.birthYear.toString().length === 4) {
    const capitalized = obj['siteName'].charAt(0).toUpperCase() + obj['siteName'].slice(1)
    const result = capitalized + "#" + obj['name'] + "@" + obj['birthYear'];
    return result;
  }
  else {
    return "invalid";
  }
}





function monthlySavings(arr, livingCost) {
  let totalIncome = 0;
  let income;
  if (Array.isArray(arr) && typeof livingCost === "number") {
    for (const number of arr) {
      if (number >= 3000) {
        let tax = (number * (20 / 100));
        income = number - tax;
      }
      else {
        income = number;
      }
      totalIncome = totalIncome + income;
    }
    let savings = totalIncome - livingCost;
    if (savings >= 0) {
      return savings;
    }
    if (savings < 0) {
      return "earn more";
    }
  }
  if (!Array.isArray(arr) && typeof livingCost !== "number") {
    return "invalid input";
  }

}
