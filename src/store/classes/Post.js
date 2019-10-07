import { Model } from '@vuex-orm/core'
import Image from './Image'
import Comment from './Comment'

export default class Post extends Model {
    static entity = 'posts'
    static fields() {
        return {
            id: this.increment(),
            title: this.attr(''),
            type: this.attr('Post'),
            // relationships
            image: this.morphOne(Image, 'image_able_id', 'image_able_type'),
            comments: this.morphMany(Comment, 'comment_able_id', 'comment_able_type')

        }
    }
}
