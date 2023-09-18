// zipListTheSimpleWay function

const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];

function zipList(firstList, secondList) {
  const combine = [];
  // combine the two lists without underscore
  for (let i = 0; i < firstList.length; i++) {
    combine.push(firstList[i], secondList[i]);
  }
  return combine;
}

console.log(zipList(list1, list2));

function zipListTheSimpleWay(firstList, secondList) {
  return _.flatten(_.zip(firstList, secondList));
}

console.log(zipListTheSimpleWay(list1, list2));
