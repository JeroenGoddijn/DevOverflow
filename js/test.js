$(function () {



  let companies = ['mf', 'apple', 'somethingelse']
  let jqueryStuff = []
  for (let i = 0; i < companies.length; i++) {
    jqueryStuff.push($('#' + companies[i]))
  }
  console.log(jqueryStuff)
})
