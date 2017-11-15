<template>
    <div class="app">
        <my-component :obj="obj"/>
    </div>
</template>

<script>
    import MyComponent from './MyComponent.vue';

    export default {
        components: {
            "my-component": MyComponent,
        },
        props: ['obj']
    }
</script>