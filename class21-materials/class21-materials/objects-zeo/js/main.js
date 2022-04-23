//Create a stopwatch object that has four properties and three methods

let stopwatch = {}

stopwatch.color = "black"
stopwatch.shape = "square"
stopwatch.company = "nokia"
stopwatch.owner="Kevin"

stopwatch.tellBrandName = function(company)
{
    console.log(`the brandname is ${company}`)
}
 
stopwatch.tellBrandName(stopwatch.company);