<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    var app = new Vue({
        el: '#app',
        data{
            message: 'this is parent component',
        },
    })

    Vue.component('todo-footer', {
        template: {'todo-footer': '<p><This is another golobal child component/p>'},
    })
</script>