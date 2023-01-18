new Vue({
    el: '#app',
    data: {
        data_url :null
    },
    methods: {
        viewLink: function(a){
            return a;
        },
        loadData: function () {

            if (STORAGE.check()) {

                const $data = STORAGE.get();

                var obj = $data.split(",");

                var obj = JSON.stringify(obj);
                obj = JSON.parse(obj);
                this.data_url = obj;
            }else{
                console.log('NOTHING');
            }
        },
        deleteData: function(data){
            var data_old = STORAGE.get();
           
            var remove = data_old.replace(data+',','');
            var remove = remove.replace(','+data+',','');
            var remove = remove.replace(data,'');

            STORAGE.save(remove);

            this.loadData()
        }
    },
    mounted() {
        this.loadData();
    },
})