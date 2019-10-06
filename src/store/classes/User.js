import { Model } from '@vuex-orm/core'
import Profile from './Profile'
import List from './List'
import Item from './Item'
import Role from './Role'
import RoleUser from './RoleUser'
import Image from './Image'

export default class User extends Model {
    static entity = 'users'
    static fields() {
        return {
            id: this.increment(),
            name: this.attr(''),
            email: this.attr(''),
            type: this.attr('user'),
            // relationships
            profile: this.hasOne(Profile, 'user_id'),
            // a user has many lists
            lists: this.hasMany(List, 'user_id'),
            // ovo je vrlo jednostavno, ali izgleda jako korisno
            items: this.hasManyThrough(Item, List, 'user_id', 'list_id'),
            roles: this.belongsToMany(Role, RoleUser, 'user_id', 'role_id'),
            image: this.morphOne(Image, 'image_able_id', 'image_able_type')
        }
    }
}
