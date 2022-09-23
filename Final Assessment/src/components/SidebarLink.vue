<script>
//Imports to allow vue and vue router to run.
import { computed } from "vue";
import { useRoute } from "vue-router";
import { collapsed } from "./state";

//Will navigate users to a link, and has an icon also
export default {
  props: {
    to: { type: String, required: true },
  },
  setup(props) {
    //Determine if the path we are trying to access is active
    const route = useRoute();
    const isActive = computed(() => route.path === props.to);
    return { isActive, collapsed };
  },
};
</script>

<!-- Router link allows for users to navigate around -->
<template>
<!--Information gets passed from Sidebar.vue directly here which makes a new slot for every item -->
  <router-link :to="to" class="link" :class="{ active: isActive }">
    <span v-if="!collapsed">
      <slot />
    </span>
    <!-- If the sidebar is closed, an image will replace the words instead-->
    <span v-else>
      <img v-if="to == '/'" src="../assets/home.png" />
      <img v-else-if="to == '/Tasks'" src="../assets/tasks.png" />
      <img v-else-if="to == '/About'" src="../assets/about.png" />
      <img v-else-if="to == '/Contact'" src="../assets/contact.png" />
    </span>
  </router-link>
</template>

