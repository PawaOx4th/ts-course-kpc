// "as" or "(<type>variable)"

let num: unknown
num = 10
;(num as number).toFixed(2)
// or
;(<number>num).toFixed(2)
