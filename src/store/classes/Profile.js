import { Model } from '@vuex-orm/core'

export class Profile extends Model {
    static entity = 'profiles'
    static fields() {
        return {
            id: this.increment(),
            user_id: this.attr(null),
            age: this.attr(''),
            sex: this.attr('')
        }
    }
}

export default Profile
