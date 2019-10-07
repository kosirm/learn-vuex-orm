import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import Item from './classes/Item.js'
import User from './classes/User.js'
import Profile from './classes/Profile.js'
import List from './classes/List.js'
import Role from './classes/Role.js'
import RoleUser from './classes/RoleUser.js'
import Image from './classes/Image.js'
import Post from './classes/Post.js'
import Comment from './classes/Comment.js'
import Video from './classes/Video.js'

Vue.use(Vuex)
const database = new VuexORM.Database()
database.register(Item)
database.register(User)
database.register(Profile)
database.register(List)
database.register(Role)
database.register(RoleUser)
database.register(Image)
database.register(Post)
database.register(Comment)
database.register(Video)
/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    plugins: [VuexORM.install(database)]
  })

  return Store
}
