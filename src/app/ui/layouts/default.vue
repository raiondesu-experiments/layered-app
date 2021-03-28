<template lang="pug">
header
  nav
    router-link(:to="{ name: 'Home' }") Home
    router-link(:to="{ name: 'Users' }") Users
router-view
</template>

<style lang="stylus" scoped>
nav
  display flex
  padding 1rem 0

  & > a:not(:last-child)
    margin-right 1rem
</style>
