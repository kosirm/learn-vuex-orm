<template>
  <div>
    <p>
      <b>Relationship playground:</b>
    </p>
    <p>Da li mogu koristiti _ClassList u "normalnim" relationship klasama? Oh, Yes!</p>
    <div>
      <h5>Persons</h5>
      <div v-for="person in persons" :key="person.id">{{person.name}}, {{person.email}}</div>
    </div>
    <div>
      <h5>Adults</h5>
      <div
        v-for="adult in adults"
        :key="adult.id"
        @click="adult.iAmAdult"
      >{{adult.name}}, {{adult.job}}</div>
    </div>
    <div>
      <h5>Children</h5>
      <div v-for="child in children" :key="child.id" @click="child.iAmChild">{{child.name}}</div>
    </div>
    <div>
      <h5>Users</h5>
      <!-- {{user.name}}: {{user.profile.age}} -->
      <div v-for="user in users" :key="user.id">{{user}}</div>
    </div>
    <div>
      <h5>Profiles</h5>
      <div v-for="profile in profiles" :key="profile.id">Id:{{profile.id}} -> Age:{{profile.age}}</div>
    </div>
  </div>
</template>

<script>
import Adult from '../store/classes/Adult'
import Person from '../store/classes/Person'
import Child from '../store/classes/Child'
import User from '../store/classes/User'
import Profile from '../store/classes/Profile'
export default {
  data() {
    return {}
  },
  computed: {
    adults() {
      return Adult.all()
    },
    persons() {
      return Person.all()
    },
    children() {
      return Child.all()
    },
    users() {
      const users = User.query()
        .with('profile', query => {
          query.where('sex', 'Male')
        })
        .get()
      return users
    },
    profiles() {
      return Profile.query()
        .where('sex', 'Male')
        .get()
    }
  },
  created() {
    Adult.insert({
      data: [
        { id: 1, name: 'Milan Košir', email: 'kosir.milan@gmail.com', job: 'Software Engineer' },
        { id: 2, name: 'Lidija Košir', email: 'kosir.lidija@gmail.com', job: 'Psychotherapyst' }
      ]
    })
    Child.insert({
      data: [
        { id: 3, name: 'Laura Košir', email: 'laura@gmail.com' },
        { id: 4, name: 'Hana Košir', email: 'hannah@gmail.com' }
      ]
    })
    User.insert({
      data: [
        { id: 5, name: 'First User', profile: { id: 4, age: 56, sex: 'Male' } },
        { id: 6, name: 'Second User', profile: { id: 5, age: 44, sex: 'Female' } },
        { id: 7, name: 'Third User', profile: { id: 6, age: 22, sex: 'Male' } }
      ]
    })
  },
  mounted() {}
}
</script>
