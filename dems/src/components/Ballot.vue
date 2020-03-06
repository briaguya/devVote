<template>
  <form class="ballot">
    <div v-for="option in options" class="option" v-bind:key="option">
      <input
        type="checkbox"
        v-bind:id="option"
        v-bind:value="option"
        v-model="selected"
      />
      <label v-bind:for="option">{{ option }}</label>
    </div>

    <span>Selected: {{ selected }}</span>
  </form>
</template>

<script>
export default {
  name: 'Ballot',
  props: {
    options: Array
  },
  data: function() {
    return {
      selected: []
    };
  }
};
</script>
