<template lang="pug">
    .view
        .house
</template>

<script>

export default {
  name: 'house'
}
</script>

<style lang="sass">
.view
    display: flex,
    justify-content: center

.house
    width: 0em,
    border: 5.5em solid transparent,
    border-bottom-color: red,
    border-top-width : 0

    &:before
        position: relative
        content: '',
        border: 4em solid red,
        border-bottom-width : 1em,
        top: 10.65em,
        right: 4em
</style>
