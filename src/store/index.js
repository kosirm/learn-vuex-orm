import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import Item from './classes/Item.js'
import User from './classes/User.js'
import Profile from './classes/Profile.js'
import List from './classes/List.js'

Vue.use(Vuex)
const database = new VuexORM.Database()
database.register(Item)
database.register(User)
database.register(Profile)
database.register(List)
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
