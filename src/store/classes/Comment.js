import { Model } from '@vuex-orm/core'

export class Comment extends Model {
    static entity = 'comments'
    static fields() {
        return {
            id: this.increment(),
            post_id: this.attr(null),
            body: this.attr(''),
            user_id: this.attr(null)
        }
    }
}

export default Comment
