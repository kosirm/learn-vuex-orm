<template>
  <div>
    <h5>{{list.title}}</h5>
    <input v-model="formItem.title" type="text" />
    <button @click="addItem">Add Item</button>
    <ul>
      <li v-for="item in filledList.items" :key="item.id">
        {{item.title}}
        <button @click="deleteItem(item)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
import List from '../store/classes/List'
import Item from '../store/classes/Item'
export default {
  // name: 'ComponentName',
  props: {
    // how cool is that? list is passed as reactive property!!!
    list: {
      required: true,
      type: List
    }
  },
  computed: {
    filledList() {
      // console.log('list id from list component:' + this.list.id)
      return List.query()
        .with('items')
        .find(this.list.id)
    }
  },
  data() {
    return {
      formItem: {
        title: '',
        list_id: this.list.id
      }
    }
  },
  methods: {
    addItem() {
      // console.log(this.formItem)
      Item.insert({ data: this.formItem })
    },
    deleteItem(item) {
      // console.log(item.id)
      Item.delete(item.id)
    }
  }
}
</script>
