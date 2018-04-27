import _ from 'lodash'
import faker from 'faker'

import blocked from 'blocked-at'

Test.remove({})

console.log(_.sample(['page1', 'page2']))

const data = _.times(2000, n => ({
  type: _.sample(['page1', 'page2']),
  text: faker.lorem.sentence(),
}))

_.each(data, datum => {
  Test.insert(datum)
})

Meteor.publish('page1', function () {
  return Test.find({ type: 'page1' })
})

Meteor.publish('page2', function () {
  return Test.find({ type: 'page2' })
})

// blocked(
//   (time, stack) => {
//     console.log(
//       `[BLOCKED] Blocked for ${time}ms, operation started here:\n${stack}`
//     );
//   },
//   {threshold: 100}
// )

// setInterval(() => {
//   console.log((new Date()).getTime());
// }, 100)
