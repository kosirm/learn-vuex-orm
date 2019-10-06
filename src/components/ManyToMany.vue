<template>
  <div>
    <button @click="changeName">Change Name</button>
    <button @click="changeRole">Change Role</button>
    <ul v-for="user in users" :key="user.id">
      <h1>{{user.name}}</h1>
      <li v-for="role in user.roles" :key="role.id">{{role.title}}</li>
    </ul>
    <hr />
    <ul v-for="role in roles" :key="role.id">
      <h1>{{role.title}}</h1>
      <li v-for="user in role.users" :key="user.id">{{user.name}}</li>
    </ul>
  </div>
</template>

<script>
import User from '../store/classes/User'
import Role from '../store/classes/Role'
export default {
  // name: 'ComponentName',
  data() {
    return {}
  },
  mounted() {
    User.insert({
      data: [
        {
          id: 28,
          name: 'Milan',
          email: 'testuser2@example.com',
          roles: [
            {
              id: 43,
              title: 'admin'
            },
            {
              id: 47,
              title: 'designer'
            }
          ]
        },
        {
          id: 27,
          name: 'Lidija',
          email: 'testuser1@example.com',
          roles: [
            {
              id: 43,
              title: 'admin'
            },
            {
              id: 49,
              title: 'therapyst'
            }
          ]
        }
      ]
    })
  },
  computed: {
    roles() {
      return Role.query()
        .with('users')
        .get()
    },
    users() {
      return User.query()
        .with('roles')
        .get()
    }
  },
  methods: {
    changeRole() {
      Role.update({
        where: 43,
        data: { title: 'Administrator' }
      })
    },
    changeName() {
      User.update({
        where: 28,
        data: { name: 'Milanko' }
      })
    }
  }
}
</script>
