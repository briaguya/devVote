<template>
  <div id="app">
    <Ballot
      v-bind:options="[
        'Joe Biden',
        'Bernie Sanders',
        'Tulsi Gabbard',
        'Elizabeth Warren',
        'Michael Bloomberg',
        'Amy Klobuchar',
        'Pete Buttigieg',
        'Tom Steyer',
        'Deval Patrick',
        'Michael Bennet'
      ]"
    />
  </div>
</template>

<script>
import Ballot from './components/Ballot.vue';

export default {
  name: 'App',
  components: {
    Ballot
  }
};
</script>
