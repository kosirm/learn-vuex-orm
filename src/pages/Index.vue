<template>
  <q-page class="q-pa-xl">
    <div style="float:left;">
      <h1>{{user.name}}</h1>
      <input type="text" v-model="form.title" />
      <button @click="addList">Add List</button>
      <List v-for="list in user.lists" :key="list.id" :list="list"></List>
    </div>
    <div style="float:right;">
      <p>
        <b>this.user.$toJson():</b>
      </p>
      <p style="width:500px;">{{toJson}}</p>
      <p>
        <b>this.$store.state:</b>
      </p>
      <p style="width:500px;">{{showStore}}</p>
      <ul>
        <li v-for="item in user.items" :key="item.id">{{item.title}}</li>
      </ul>
    </div>
  </q-page>
</template>

<script>
import User from '../store/classes/User'
import ListComponent from '../components/List'
import List from '../store/classes/List'
export default {
  name: 'PageIndex',
  components: {
    List: ListComponent
  },
  data() {
    return {
      form: {
        title: '',
        user_id: 28
      }
    }
  },
  computed: {
    user() {
      return User.query()
        .with('lists.items')
        .with('items')
        .find(28)
    },
    items() {
      return User.query()
        .with('items')
        .find(28)
    },
    toJson() {
      return this.user.$toJson()
    },
    showStore() {
      // const store = User.store()
      return this.$store.state
    }
  },
  methods: {
    addList() {
      // console.log(this.form)
      List.insert({ data: this.form })
    }
  },
  beforeMount() {
    User.insert({
      data: [
        {
          id: 28,
          name: 'Milan',
          email: 'testuser2@example.com'
        },
        {
          id: 27,
          name: 'Lidija',
          email: 'testuser1@example.com'
        }
      ]
    })
  }
}
</script>
