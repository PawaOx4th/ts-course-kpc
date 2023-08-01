// NOTE: Disable "strict" rule in tsconfig.json to avoid error.

let message = "1hello"

// // message = null
console.log("🐳 MESSAGE[0].TOUPPERCASE() :", message[0].toUpperCase())

/**
 *
 * EX. upperCaseFirstLetter()
 */
function upperCaseFirstLetter(str: string | null) {
  // Solve 1
  // return str?.[0].toUpperCase() + str?.substr(1)

  // Solve 2
  if (str && typeof str === "string") {
    return str[0].toUpperCase() + str.substr(1)
  }
  return str
}
