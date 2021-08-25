<template>
    <div>
        <Row
            v-for="contact in contacts"
            :key="contact.id"
            :title="contact.title"
            :img="contact.img"
            :color="contact.color"
            :link="contact.link"
        />
    <!-- com -->
    </div>
</template>

<script>
import Row from '@/components/Card/ContactRow.vue'
import {mapState} from 'vuex'
export default {
    components: {
        Row
    },
    computed: mapState(['contacts'])
}
</script>

<style>

</style>