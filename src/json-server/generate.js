// na ovaj način mogu kreirati sve što mi je potrebno na json-serveru...
// možda lodash i nije toliko neophodan...
// htio bih ono napisati onako po kmečko...

module.exports = function () {
    var faker = require('faker')
    var _ = require('lodash')
    return {
        people: _.times(100, function (n) {
            return {
                id: n,
                name: faker.name.findName(),
                avatar: faker.internet.avatar()
            }
        })
    }
}
