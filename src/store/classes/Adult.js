// File 2: Adult.js

import { Person } from './_ClassList'

// We export directly the named class.
export class Adult extends Person {
    static entity = 'adult'

    static baseEntity = 'person'

    iAmAdult() {
        console.log('Iam ADULT PERSON')
    }
    static fields() {
        return {
            ...super.fields(),
            job: this.attr(''),
            salary: this.attr(null)
        }
    }
}

// We also export a default.
export default Adult
