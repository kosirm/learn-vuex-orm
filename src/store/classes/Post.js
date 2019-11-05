import { Model } from '@vuex-orm/core'
// if not extending, import as normal
import { Comment } from './_ClassList'

export class Post extends Model {
    static entity = 'posts'
    static fields() {
        return {
            id: this.increment(),
            title: this.attr(''),
            body: this.attr(''),
            user_id: this.attr(null),
            comments: this.hasMany(Comment, 'post_id')
        }
    }
}

export default Post
