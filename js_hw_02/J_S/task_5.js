"use strict";

const checkForSpam = function (message) {
  const newString = message.toLowerCase();
  if (newString.includes("spam") || newString.includes("sale")) {
    return "true";
  } else {
    return "false";
  }
};

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get bestes sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true