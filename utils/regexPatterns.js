'use strict';

/**
 * Regex patterns for extracting information from transactions.
 */

const regexPatterns = {
    amount: /[\d,]+(?:\.\d{1,2})?/,                // Matches amounts like 1,000.00 or 1000
    reference: /[A-Z0-9]+(?:-[A-Z0-9]+)*/,            // Matches alphanumeric references like ABCD1234 or ABCD-1234
    transactionType: /(?:debit|credit|refund)/i,         // Matches transaction types like debit, credit, refund (case insensitive)
    merchant: /(?:at|from)\s+([\w\s]+)/i               // Matches merchants preceded by 'at' or 'from' in transaction descriptions
};

module.exports = regexPatterns;
