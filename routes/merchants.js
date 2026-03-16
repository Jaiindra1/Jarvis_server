const merchants = {
  amazon: "shopping",
  flipkart: "shopping",
  swiggy: "food",
  zomato: "food",
  uber: "transport",
  ola: "transport",
  netflix: "entertainment",
  salary: "income"
}

function detectMerchant(text) {

  text = text.toLowerCase()

  for (let merchant in merchants) {
    if (text.includes(merchant)) {
      return {
        merchant: merchant,
        category: merchants[merchant]
      }
    }
  }

  return {
    merchant: "unknown",
    category: "others"
  }
}

module.exports = detectMerchant
