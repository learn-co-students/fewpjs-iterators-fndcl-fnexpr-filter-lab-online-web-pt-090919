// Code your solution here

function findMatching(source, match) {
  return source.filter(possibleMatch =>
    possibleMatch.toLowerCase() === match.toLowerCase()
  )
}

function fuzzyMatch(source, match) {
  return source.filter(possibleMatch =>
    possibleMatch.toLowerCase().indexOf(match.toLowerCase()) === 0
  )
}

function matchName(source, match) {
  return source.filter(record => record.name === match)
}