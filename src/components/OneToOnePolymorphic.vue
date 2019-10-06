<template>
  <div>
    <!-- <h2>{{user.name}}</h2> -->
    <!-- <img v-for="image in images" :src="image.url" :key="image.id" /> -->
    <div v-for="image in images" :key="image.id">{{image.image_able.type}}</div>
  </div>
</template>

<script>
import User from '../store/classes/User'
import Image from '../store/classes/Image'
// import Image from '../store/classes/Image'
import Post from '../store/classes/Post'

export default {
  // name: 'ComponentName',
  data() {
    return {}
  },
  created() {
    User.insert({
      data: [
        {
          id: 28,
          name: 'Milan',
          email: 'testuser2@example.com',
          image: {
            id: 32,
            url: 'https://miro.medium.com/max/3150/1*WBGKsIFaSGBjrikqFc9SNA.png'
          }
        },
        {
          id: 27,
          name: 'Lidija',
          email: 'testuser1@example.com',
          image: {
            id: 33,
            url: 'https://pbs.twimg.com/profile_images/658714855889883136/kSCSvpCy_400x400.jpg'
          }
        }
      ]
    })
    Post.insert({
      data: [
        {
          id: 29,
          title: 'Post 1',
          image: {
            id: 37,
            url: 'https://r2.packagetrackr.com/a/images/c/30.png'
          }
        },
        {
          id: 30,
          name: 'Post 2',
          image: {
            id: 38,
            url: 'https://cdn2.tychesoftwares.com/wp-content/uploads/2017/07/14065812/Post-Delivery-Product-Reviews.png'
          }
        }
      ]
    })
  },
  computed: {
    user() {
      return User.query()
        .with('image')
        .find(27)
    },
    images() {
      return Image.query()
        .with('image_able')
        .get()
    }
  }
}
</script>
