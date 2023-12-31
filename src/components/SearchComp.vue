<template>
   <div>
      <h3>Searching members area</h3>

      <div>
        <input @keyup="searchFun" type="text" />
      </div>

      <div>
        <ul>
          <li v-for="(item, idx) in searchingList" :key="idx">
            {{ item?.name }}
          </li>
        </ul>
      </div>
    </div>
</template>

<script setup>
const props = defineProps({
membersList:Array
})
import { ref } from "vue";

const searchInput = ref("");
const searchingList = ref([]);



const searchFun = (e) => {
  console.log(e.target.value);
  const searchOutput = props.membersList.filter((member) => {
    if (e.target.value) {
      return member.name?.toLowerCase().includes(e.target.value?.toLowerCase());
    } else {
      return;
    }
  });
  searchingList.value = searchOutput;
  console.log("searchOutput", searchOutput);
  // searchingList.value /
};

</script>

<style>

</style>