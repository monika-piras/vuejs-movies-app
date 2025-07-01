<template>
  <div @click="change($event)" style="cursor: pointer">
    <i v-if="value" class="material-icons">star</i>
    <i v-if="!value" class="material-icons">star_border</i>
  </div>
</template>

<script>
export default {
  name: "Star",
  props: {
    value: Boolean,
  },
  methods: {
    change(event) {
      event.stopPropagation();
      this.$emit("input", !this.value);
    }
  }
};
</script>