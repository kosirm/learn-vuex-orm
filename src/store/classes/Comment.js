import { Model } from '@vuex-orm/core'

export default class Comment extends Model {
    static entity = 'comments'
    static fields() {
        return {
            id: this.increment(),
            body: this.attr(''),
            type: this.attr('Comment'),
            comment_able_id: this.attr(null),
            comment_able_type: this.attr(null),
            // relationships
            comment_able: this.morphTo('comment_able_id', 'comment_able_type')
        }
    }
}
