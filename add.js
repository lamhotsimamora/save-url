new Vue({
    el : '#app',
    data : {
        msg_success :false,
        url : null
    },
    methods: {
        save: function(){
            if (this.url==null){
                this.$refs.url.focus()
                return;
            }
            
            var data_old;
            if (STORAGE.check()){
                data_old = STORAGE.get();
                STORAGE.save(this.url+','+data_old)
            }
            else{
                data_old = '';
                STORAGE.save(this.url)
            }
           
            this.msg_success=true;
            this.url = null;
            this.$refs.url.focus()
        }
    },
})