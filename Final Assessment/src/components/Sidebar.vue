<script>
//Imports from states and sidebar link which allow functionality
import { collapsed, toggleSidebar, sidebarWidth } from "./state";
import SidebarLink from "./SidebarLink";

export default {
  props: {},
  components: { SidebarLink },
  setup() {
    return {
      collapsed,
      toggleSidebar,
      sidebarWidth,
    };
  },
};
</script>
<!--Sidebar implementation and basis of design can be credited to 'Coding with Justin' on Youtube, @="https://www.youtube.com/watch?v=CfTvye31Ad0"-->
<template>
  <!--Creates the sidebar object-->
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <span class="collapse-icon" @click="toggleSidebar">
      <!--Uses an image for the hamburger button-->
      <img
        src="../assets/menu.png"
        alt="Hamburger Button"
        class="hamburger"
        :class="{ rotate: collapsed }"
      />
    </span>
    <br />
    <h1>
      <!--When closed the Sidebar will display the initals of the site name-->
      <span v-if="collapsed">
        <div>H</div>
        <div>P</div>
      </span>
      <!--Otherwise it will display its name-->
      <span v-else>Helpful Planner</span>
    </h1>
    <!--Creates links to go to other pages, when clicked the sidebar goes back to collapsed, its "default" state-->
    <SidebarLink to="/" @click="collapsed = true">Home</SidebarLink>
    <SidebarLink to="/Tasks" @click="collapsed = true">Tasks</SidebarLink>
    <SidebarLink to="/About" @click="collapsed = true">About</SidebarLink>
    <SidebarLink to="/Contact" @click="collapsed = true">Contact</SidebarLink>
    <!--When it is not closed the sidebar will display the sites logo-->
    <span v-if="!collapsed">
      <img src="@/assets/logo.png" alt="logo for website" class="logo" />
    </span>
  </div>
</template>
