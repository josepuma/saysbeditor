<template lang="pug">
  div
    nuxt
    div(:class="{ active: isTriggerActive }").menu-wrapper
      a(@click="handleTriggerClick").trigger
        font-awesome-icon(prefix="far" :icon="isTriggerActive ? 'times' : 'caret-down'")
      menu.items-wrapper
        a.menu-item
          font-awesome-icon(prefix="far" icon="user")
        a.menu-item
          font-awesome-icon(prefix="far" icon="plus")
        a.menu-item
          font-awesome-icon(prefix="far" icon="folder-open")
        a.menu-item
          font-awesome-icon(prefix="far" icon="cog")
</template>

<script>
export default {
  data() {
    return { isTriggerActive: false }
  },
  methods: {
    handleTriggerClick() {
      this.isTriggerActive = !this.isTriggerActive
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/_variables.scss';

$local-trigger-size: 3.5em;
$local-color: $primary;

.menu-wrapper {
  position: fixed;
  top: 1em;
  right: 1em;

  &:after {
    display: block;
    content: ' ';
    width: 3.5em;
    height: 3.5em;
    border-radius: 50%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: -2;
    background-color: darken($color: $local-color, $amount: 2.5%);
    transition: all .3s ease;
  }

  &.active {
    &:after {
      transform: scale3d(5.5, 5.5, 1);
      transition-timing-function: cubic-bezier(.68, 1.55, .265, 1);
    }

    .trigger {
      box-shadow: inset 0 0 3px hsla(0, 0%, 0%, .3);
      &:active {
        box-shadow: 0 4px 8px 0 hsla(0, 0%, 0%, .4);
      }
    }

    .items-wrapper {
      .menu-item {
        transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);

        &:nth-child(1) {
          transform: translate3d(-7em, 0em, 0);
        }

        &:nth-child(2) {
          transform: translate3d(-6em, 3.5em, 0);
        }

        &:nth-child(3) {
          transform: translate3d(-3.5em, 6em, 0);
        }

        &:nth-child(4) {
          transform: translate3d(0em, 7em, 0);
        }
      }
    }
  }

  .trigger {
    display: block;
    width: $local-trigger-size;
    height: $local-trigger-size;
    border-radius: 50%;
    background-color: $local-color;
    box-shadow: 0 2px 5px 0 hsla(0, 0%, 0%, .26);  
    color: hsl(0, 0%, 100%);
    text-align: center;
    line-height: 3.9;
    cursor: pointer;
    outline: 0;
  }

  .items-wrapper {
    padding: 0;
    margin: 0;

    .menu-item {
      position: absolute;
      top: .2em;
      right: .2em;
      z-index: -1;
      display: block;
      text-decoration: none;
      color: hsl(0, 0%, 100%);
      font-size: 1em;
      width: 3em;
      height: 3em;
      border-radius: 50%;
      text-align: center;
      line-height: 3;
      background-color: hsla(0,0%,0%,.1);
      transition: transform .3s ease, background .2s ease;

      &:hover {
        background-color: hsla(0,0%,0%,.3);        
      }
    }
  }
}
</style>