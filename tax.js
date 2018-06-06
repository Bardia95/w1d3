var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function sum(array) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return array.reduce(reducer);
}

function calculateSalesTax(salesData, taxRates) {
  var object = {};
  for (var i = 0; i < salesData.length; i++) {
    var company = salesData[i];
    var companyName = company['name'];
    var province = company['province'];
    var companySales = company['sales'];
    if (!object.hasOwnProperty(companyName)) {
      object[companyName] = {};
      object[companyName].totalSales = 0;
      object[companyName].totalTaxes = 0;
    }
      var salesSum = sum(companySales);
      var provinceTaxRate = taxRates[province];
      var taxes = provinceTaxRate * salesSum;
      object[companyName]['totalSales'] += salesSum;
      object[companyName]['totalTaxes'] += taxes;
  }
  return object;
}

// function totalSales() {
//   var total = 0;
//   for (var i = 0; i < companySalesData.length; i++) {
//     var companySales = companySalesData[i]['sales'];
//     for (var j = 0; j < companySales.length; j++) {
//       total += companySales
//     }
//   }
// return total;
// }

// console.log(totalSales());


var results = calculateSalesTax(companySalesData, salesTaxRates);

console.log(results);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/