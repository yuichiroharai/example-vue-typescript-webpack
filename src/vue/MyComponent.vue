<template>
    <div class="component">
        <div>{{ obj.title }}</div>
        <p>{{ obj.description }}</p>
    </div>
</template>

<script lang="ts">

    import {Example} from "../ts/Example";

    export default {
        props: ['obj'],

        mounted: function () {
            new Example();
        }
    }

</script>