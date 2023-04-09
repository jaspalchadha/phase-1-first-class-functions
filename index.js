function receivesAFunction(ok) {
    ok()
  }
  
  function returnsANamedFunction() {
    return function named() {
      console.log("today is monday.")
    }
  }
  
  function returnsAnAnonymousFunction() {
    return function() {
      console.log('Today is tuesday.')
    }
  }