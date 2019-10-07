import { Model } from '@vuex-orm/core'
import Comment from './Comment'

export default class Video extends Model {
    static entity = 'videos'
    static fields() {
        return {
            id: this.increment(),
            url: this.attr(''),
            type: this.attr('Video'),
            // relationships
            comments: this.morphMany(Comment, 'comment_able_id', 'comment_able_type')
        }
    }
}
