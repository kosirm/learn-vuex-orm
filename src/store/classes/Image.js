import { Model } from '@vuex-orm/core'

export default class Image extends Model {
    static entity = 'images'
    static fields() {
        return {
            id: this.increment(),
            url: this.attr(null),
            image_able_id: this.attr(null),
            image_able_type: this.attr(null),
            // relationships
            image_able: this.morphTo('image_able_id', 'image_able_type')
        }
    }
}
