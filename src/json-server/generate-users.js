const faker = require('faker')
const fs = require('fs')

// umjesto u fs ču ja sve to staviti u IDB i problem riješen !!!
// a generiranje vuex-orm klasa (dokumenata) - to je slijedeča generacija (vscode extension)
// raditi to sa neke stranice mi izgleda potpuno besmisleno
// workarround bi bio preko githuba (nešto kao netlify cms)... ali to je udaljena budučnost...

function generateUsers() {
    let users = []

    for (let id = 1; id <= 100; id++) {
        let firstName = faker.name.firstName()
        let lastName = faker.name.lastName()
        let email = faker.internet.email(
            firstName,
            lastName,
            faker.random.arrayElement(['gmail.com', 'hotmail.com', 'yahoo.com', 'zoho.eu']) // Let Faker.js choose
        )

        users.push({
            'id': id,
            'first_name': firstName,
            'last_name': lastName,
            'email': email
        })
    }

    return { 'people': users }
}

let dataObj = generateUsers()

// ovdje treba zaposliti localforage
fs.writeFileSync('data.json', JSON.stringify(dataObj, null, '\t'))
