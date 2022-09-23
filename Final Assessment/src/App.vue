<script>
import Sidebar from "@/components/Sidebar";
import { sidebarWidth } from "@/components/state";

export default {
  components: { Sidebar },
  setup() {
    return { sidebarWidth };
  },
};
</script>

<template>
  <Sidebar />
  <div :style="{ 'margin-left': sidebarWidth }">
    <router-view />
  </div>
</template>

<style></style>
