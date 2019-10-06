import { Model } from '@vuex-orm/core'
import Image from './Image'

export default class Post extends Model {
    static entity = 'posts'
    static fields() {
        return {
            id: this.increment(),
            title: this.attr(''),
            type: this.attr('post'),
            image: this.morphOne(Image, 'image_able_id', 'image_able_type')
            // relationships
        }
    }
}
