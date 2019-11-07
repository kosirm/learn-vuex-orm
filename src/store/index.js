import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import { Person, Adult, Child, User, Profile, Post, Comment } from './classes/_ClassList'

// todo: sve ono što napravim važnoga, treba nadodati kao komentar ka tom commitu
// todo: na taj način dobivam pomoču gita barem malo preglednosti nad kodom
// git-lens je fenomenalan extension, ali ako ja ne unosim dobro podatke, mi ništa puno ne vrijedi...

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
