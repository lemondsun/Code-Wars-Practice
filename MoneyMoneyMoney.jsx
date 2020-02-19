// Mr. Scrooge has a sum of money 'P' that wants to invest, and he wants to know how many years 'Y' this sum has to be kept in the bank in order for this sum of money to amount to 'D'.

// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly, and the new sum is re-invested yearly after paying tax 'T'

// Note that the principal is not taxed but only the year's accrued interest


function calculateYears(principal, interest, tax, desired) {
  // create variables that will keep track of the years and the principal increasing
  const yearValue = []
  // let instead of const because in need the value to change
  let newPrincipal = principal
// base case principal not the same as desired then...
  if (principal != desired) {
    // Add the taxed increment to the principal value and save it as newPrincipal 
    // also create a new index in the yearValue
    do {
      newPrincipal = newPrincipal + ((newPrincipal * interest) - (newPrincipal * interest * tax))
      yearValue.push(newPrincipal)
      console.log(newPrincipal)
    }
    // keep doing the above code while newPrincipal is less than the desired amount
    while (newPrincipal < desired)
    // once that number is met save the yearValue length to the years
    const years = yearValue.length
    console.log(years) 
  } else {
    // if the principal is the same as the desired amount return 0 as there will be no wait.
    console.log(0)
  }
  
}
calculateYears(1000.00,0.05,0.18,1100.00)