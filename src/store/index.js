import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import { Person, Adult, Child, User, Profile, Post, Comment } from './classes/_ClassList'


Vue.use(Vuex)
const database = new VuexORM.Database()
database.register(Person)
database.register(Adult)
database.register(Child)
database.register(User)
database.register(Profile)
database.register(Post)
database.register(Comment)
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
