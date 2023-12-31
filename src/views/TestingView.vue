<template>
  <div>
    <div>
      <h3>adding members area</h3>

      <form @submit.prevent="addMember">
        <input type="text" v-model="memberInput" />
        <input type="submit" value="add member" />
      </form>

      <div>
        <ul>
          <li v-for="(item, idx) in membersList" :key="idx">
            {{ item?.name }}
          </li>
        </ul>
      </div>
    </div>
    <hr />
   <SearchInput :membersList="membersList" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import SearchInput from "../components/SearchComp.vue"

const memberInput = ref(null);

const membersList = ref([
  {
    id: 1,
    name: "Ahmed Mohammed",
  },
]);

const addMember = () => {
  const id = Date.now();
  if (memberInput.value) {
    membersList.value = [...membersList.value, { id, name: memberInput.value }];
  }
  memberInput.value = "";
};


</script>

<style>
</style>