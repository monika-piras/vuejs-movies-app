<template>
  <div class="container">
    <div class="row">
      <div class="col-auto left">
        <b-button class="button-style" v-on:click="goBack()">
          <b-icon-chevron-left></b-icon-chevron-left>Back</b-button>
      </div>
    </div>
    <form-component />
  </div>
</template>

<script>
import FormComponent from "@/components/FormComponent.vue";

export default {
  name: "AddFilmPage",
  components: {
    FormComponent,
  },
  methods: {
    goBack() {
      this.$router.push("/movie");
    },
  },
};
</script>

<style scoped>
.button-style {
  margin-top: 30px;
  margin-bottom: 30px;
}
.container {
  min-height: 100%;
}
</style>