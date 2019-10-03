<template>
  <q-page class="q-pa-xl">
    <div v-for="x in profiles" :key="x.id">
      <h5 style="color:orange;">{{x.user.name}}</h5>
      <p>
        Bio:
        <b>{{x.bio }}</b>
      </p>
      <p>
        Life Goal:
        <b>{{x.life_goal }}</b>
      </p>
    </div>
    <b>User lists:</b>
    <li v-for="list in userLists.lists" :key="list.id">
      {{list.title}}
      <ul v-for="item in list.items" v-text="item.title" :key="item.id"></ul>
    </li>
    <br />
  </q-page>
</template>

<script>
import Item from '../store/classes/Item'
import User from '../store/classes/User'
import Profile from '../store/classes/Profile'
export default {
  name: 'PageIndex',
  data() {
    return {
      form: {
        title: ''
      }
    }
  },
  computed: {
    allUsers() {
      return User.all()
    },
    user() {
      return User.query()
        .with('profile')
        .find(28)
    },
    userLists() {
      return User.query()
        .with('lists.items')
        .find(28)
    },
    profile() {
      return Profile.query()
        .with('user')
        .find(55)
    },
    profiles() {
      return Profile.query()
        .with('user')
        .get()
    },
    items() {
      return Item.all()
    }
  },
  methods: {
    addItem() {
      Item.insert({ data: this.form })
    }
  },
  beforeMount() {
    User.insert({
      data: [
        {
          id: 28,
          name: 'Milan',
          email: 'kosir.milan@gmail.com',
          profile: {
            id: 55,
            bio: 'Milan is a web designer.',
            life_goal: 'To finish products.'
          },
          lists: [
            {
              id: 123,
              title: 'Shopping',
              items: [
                { id: 444, title: 'Banana' },
                { id: 445, title: 'Jabuka' },
                { id: 446, title: 'Kruška' }
              ]
            },
            {
              id: 124,
              title: 'Development',
              items: [
                { id: 447, title: 'Vue' },
                { id: 448, title: 'Vuex-ORM' },
                { id: 449, title: 'Quasar' }
              ]
            },
            {
              id: 125,
              title: 'Projects',
              items: [
                { id: 450, title: 'Bible' },
                { id: 451, title: 'Backpack Site Builder' },
                { id: 452, title: 'Glass' }
              ]
            }
          ]
        },
        {
          id: 27,
          name: 'Lidija',
          email: 'kosir.lidija@gmail.com',
          profile: {
            id: 65,
            bio: 'Lidija is psychotherapyst.',
            life_goal: 'Help people to start thinking.'
          },
          lists: [
            {
              id: 126,
              title: 'Kaufland',
              items: [
                { id: 453, title: 'Krumpir' },
                { id: 454, title: 'Meso' },
                { id: 455, title: 'Nutella' }
              ]
            },
            {
              id: 127,
              title: 'Kave',
              items: [
                { id: 456, title: 'Luce' },
                { id: 457, title: 'Tonka' },
                { id: 458, title: 'Gracia' }
              ]
            },
            {
              id: 128,
              title: 'Terapije',
              items: [
                { id: 459, title: 'Antonia' },
                { id: 460, title: 'Boris' },
                { id: 461, title: 'Petar' }
              ]
            }
          ]
        }
      ]
    })
  }
}
</script>
