<template>
  <div>
    <p>
      <b>Relationship playground:</b>
    </p>
    <p>
      Da li mogu koristiti _ClassList u "normalnim" relationship klasama? Oh, Yes!
      <br />Otkrio sam i da se može razvijati na dva ekrana... cooooool!
    </p>
    <div>
      <h5>User Posts</h5>
      <pre>{{posts}}</pre>
      <!-- <div v-for="post in posts" :key="post.id">{{post.title}}, {{post.body}}</div> -->
    </div>
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
      <!-- {{users.profile.age}} -->
      <div v-for="user in users" :key="user.id">{{user}}</div>
    </div>
    <div>
      <h5>Profiles</h5>
      <div v-for="profile in profiles" :key="profile.id">Id:{{profile.id}} -> Age:{{profile.age}}</div>
    </div>
  </div>
</template>

<script>
import { Person, Adult, Child, User, Profile, Post, Comment } from '../store/classes/_ClassList'
export default {
  data() {
    return {}
  },
  computed: {
    posts() {
      return (
        User.query()
          .with('profile')
          .with('posts.comments')
          // .where('id', 9)
          // .withAllRecursive(5)
          .get()
      )
    },
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
      // evo nešto sam naučio od kiakinga direktno :)
      // ovo je jako važno, kako uroniti u relationship i onda filtrirati rezultat
      return User.query()
        .with('profile')
        .whereHas('profile', query => {
          query.where('age', 56)
        })
        .get()
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
        { id: 8, name: 'Milan', profile: { id: 8, age: 56, sex: 'Male' } },
        { id: 9, name: 'Lidija', profile: { id: 9, age: 49, sex: 'Female' } },
        { id: 5, name: 'First User', profile: { id: 4, age: 56, sex: 'Male' } },
        { id: 6, name: 'Second User', profile: { id: 5, age: 44, sex: 'Female' } },
        { id: 7, name: 'Third User', profile: { id: 6, age: 22, sex: 'Male' } }
      ]
    })
    Post.insert({
      data: [
        { title: 'Moj prvi post', body: 'Nešto zanimljivo', user_id: 8 },
        { title: 'Moj drugi post', body: 'Nešto zanimljivo ponovno', user_id: 8 },
        { title: 'Moj treči post', body: 'Nešto zanimljivo po treči put', user_id: 8 },
        { title: 'Lidijin prvi post', body: 'Nešto zanimljivo za Lidiju', user_id: 9 }
      ]
    })
    Comment.insert({
      data: [
        { post_id: 1, body: 'Dobro si to reko...', user_id: 9 },
        { post_id: 1, body: 'Ma nije baš tako...', user_id: 5 },
        { post_id: 2, body: 'Ajde nemoj...', user_id: 6 },
        { post_id: 4, body: 'Ajde Lidija...', user_id: 8 },
        { post_id: 4, body: 'Samo odvali kako ti znaš...', user_id: 8 },
        { post_id: 3, body: 'Kako ti kažeš...', user_id: 7 }
      ]
    })
  },
  mounted() {}
}
</script>
