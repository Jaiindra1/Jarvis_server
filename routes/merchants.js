const merchants = {
  amazon: "shopping",
  flipkart: "shopping",
  swiggy: "food",
  zomato: "food",
  uber: "transport",
  ola: "transport",
  netflix: "entertainment",
  spotify: "entertainment",
  airtel: "bills",
  jio: "bills",
  salary: "income"
}

function detectMerchant(text) {

  const lower = text.toLowerCase()

  for (const merchant in merchants) {
    if (lower.includes(merchant)) {

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
