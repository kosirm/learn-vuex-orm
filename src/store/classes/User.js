import { Model } from '@vuex-orm/core'
import { Profile } from './_ClassList'

export class User extends Model {
    static entity = 'users'
    static fields() {
        return {
            id: this.increment(),
            name: this.attr(''),
            profile: this.hasOne(Profile, 'user_id')
        }
    }
}

export default User
