//your code here
// Given array of band names
let bandNames = ['The Beatles', 'Pink Floyd', 'Led Zeppelin', 'The Rolling Stones'];

// Function to sort band names in lexicographic order excluding articles
function sortBandNames(bandNames) {
  const articles = ['a', 'an', 'the'];
  
  // Custom sorting function
  function compare(a, b) {
    const aName = a.replace(/^(a|an|the)\s+/i, '');
    const bName = b.replace(/^(a|an|the)\s+/i, '');
    return aName.localeCompare(bName);
  }
  
  return bandNames.sort(compare);
}

// Sort the band names
const sortedBandNames = sortBandNames(bandNames);

// Create the <ul> and add the sorted band names as <li> items
const ulElement = document.getElementById('band');
sortedBandNames.forEach(function(bandName) {
  const liElement = document.createElement('li');
  liElement.textContent = bandName;
  ulElement.appendChild(liElement);
});

