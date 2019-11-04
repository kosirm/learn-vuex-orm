// File 1: Person.js

import { Model } from '@vuex-orm/core'
import { Adult } from './_ClassList'

// We export directly the named class.
export class Person extends Model {
    static entity = 'person'

    static types() {
        return {
            PERSON: Person,
            ADULT: Adult
        }
    }

    iAmPerson() {
        console.log('Iam a PERSON!')
    }
    static fields() {
        return {
            id: this.attr(''),
            name: this.attr(''),
            email: this.attr(''),
            type: this.attr('PERSON')
        }
    }
}

// We also export a default.
export default Person
