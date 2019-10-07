<template>
  <div>
    <p>
      <b>One To Many Polymorphic relationship:</b>
    </p>
    <p>
      <b>videos</b> can have comments,
      <b>posts</b> can have comments (both are comment-able)
      <br />So we can see (query) all comments, all videos or posts comments, or comments for
      <b>particular</b> video or post
      <br />We can also query all comments and see what comment-able type these comments belong to
    </p>
    <h2>Comments:</h2>
    <div v-for="comment in comments" :key="comment.id">
      {{comment.body}} -
      <!-- <b>{{comment.comment_able.type}}</b> -->
      <b>{{comment.comment_able.constructor.entity}}</b>
    </div>
    <!-- <h2>Videos</h2>
    <div v-for="video in videos" :key="video.id">
      {{video.url}}
      <li v-for="comment in video.comments" :key="comment.id">{{comment.body}}</li>
    </div>
    <h2>Posts</h2>
    <div v-for="post in posts" :key="post.id">
      {{post.title}}
      <li v-for="comment in post.comments" :key="comment.id">{{comment.body}}</li>
    </div>-->
  </div>
</template>

<script>
import Video from '../store/classes/Video'
import Post from '../store/classes/Post'
import Comment from '../store/classes/Comment'
export default {
  // name: 'ComponentName',
  data() {
    return {}
  },
  computed: {
    videos() {
      return Video.query()
        .with('comments')
        .get()
    },
    posts() {
      return Post.query()
        .with('comments')
        .get()
    },
    comments() {
      return Comment.query()
        .with('comment_able')
        .get()
    }
  },
  mounted() {
    Video.insert({
      data: [
        {
          id: 62345,
          url: 'https://youtu.be/KpwTPlzHn7U',
          comments: [
            {
              id: 23,
              body: 'Man vuex-orm is sooooo powerful'
            },
            {
              id: 26,
              body: 'This tutorial is coooool also!'
            }
          ]
        },
        {
          id: 223,
          url: 'https://youtu.be/KpwTPlzHn7U',
          comments: [
            {
              id: 33,
              body: 'Man what a video!'
            },
            {
              id: 36,
              body: 'This is funny!'
            }
          ]
        }
      ]
    })
    Post.insert({
      data: [
        {
          id: 13,
          title: 'My first post',
          comments: [
            {
              id: 27,
              body: 'This post is cooool!'
            },
            {
              id: 28,
              body: 'I like your style of writing...'
            }
          ]
        }
      ]
    })
  }
}
</script>
