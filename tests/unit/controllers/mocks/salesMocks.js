const allSales = [
  { productId: 1, quantity: 1 },
  { productId: 2, quantity: 5 },
]

const oneSaleReturn = [
  { productId: 1, quantity: 1 },
  { productId: 3, quantity: 5 },
];

const saleCreationReturn = {
  "id": 3,
  "itemsSold": [
    {
      "productId": 1,
      "quantity": 1
    },
    {
      "productId": 2,
      "quantity": 5
    }
  ]
};

module.exports = {
  allSales,
  oneSaleReturn,
  saleCreationReturn,
}