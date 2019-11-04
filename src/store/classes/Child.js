// File 2: Adult.js

import { Person } from './_ClassList'

// We export directly the named class.
export class Child extends Person {
    static entity = 'child'

    static baseEntity = 'person'

    iAmChild() {
        console.log('Iam A CHILD :)')
    }
    static fields() {
        return {
            ...super.fields(),
            toy: this.attr(''),
            fear: this.attr('')
        }
    }
}

// We also export a default.
export default Child
