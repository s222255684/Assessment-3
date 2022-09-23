import {ref, computed} from 'vue'
//collapsed here is its default state, it will always start as collapsed. 
export const collapsed = ref(true)
export const toggleSidebar = () => (collapsed.value = !collapsed.value)

//Desides how big and small the sidebar is when it is opened and closed. 
export const SIDEBAR_WIDTH = 300
export const SIDEBAR_WIDTH_COLLAPSED = 38
export const sidebarWidth = computed( () => `${collapsed.value ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH}px`
)