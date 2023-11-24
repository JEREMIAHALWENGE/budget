<template>
  <div>
    <home />
  </div>
  


</template>

<script>
import login from "@/components/login.vue";
import home from "@/components/home.vue";
import register from "@/components/register.vue";
import about from "@/components/about.vue";

export default {
  name: "authenticated",
  components: [
    home
  ],
};
</script> 
   
<style>

</style>