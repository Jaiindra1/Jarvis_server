function parseTransaction(text) {

  const amountMatch = text.match(/(INR|Rs\.?|₹)\s?(\d+(\.\d+)?)/i)

  const refMatch = text.match(/(Ref|UTR|Txn)[^0-9]*(\d{6,})/i)

  let type = "unknown"

  if (/credited|cr\./i.test(text)) type = "credit"

  if (/debited|dr\.|paid|sent/i.test(text)) type = "debit"

  return {

    amount: amountMatch ? parseFloat(amountMatch[2]) : 0,

    reference: refMatch ? refMatch[2] : null,

    type

  }
}

module.exports = parseTransaction
