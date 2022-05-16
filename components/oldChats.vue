<template>
<div class=" font mob-width chat-padding">
    <!-- container -->
    <div class="bgwhite rounded-border h-105 ">
        <div v-for="oldChat in oldChats" :key="oldChat.chat" class="my-1 pt-1 mx-3 " >
            <!-- chat -->
            <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                    <div>
                        <img :src="require(`@/assets/icon/${oldChat.image}`)" alt="">
                    </div>
                    <!-- user name -->
                    <div class="px-3">
                        <div class="">
                            <span class="fw-bold">{{oldChat.user}}</span>
                        </div>
                        <div>
                            <span class="fs-150">{{oldChat.lastChat}}</span>
                        </div>
                    </div>
                </div>    
                <!-- last time of chat -->
                <div>
                    <span class="fw-bold fs-150">{{oldChat.time}}</span>
                </div>
            </div>
            <div class="border-bottom">
                <span ></span>
            </div>

        </div>
    </div>    


</div>
</template>

<script>
export default {
    data(){
        return{
            oldChats:[
                {
                    image:'man.png',
                    user:'Jesutobi',
                    lastChat:'how are you bro',
                    time:'09:00'
                },
                {
                    image:'woman.png',
                    user:'Sewa',
                    lastChat:'how are you bro',
                    time:'09:00'
                },
                {
                    image:'man 3.png',
                    user:'Ay',
                    lastChat:'how are you bro',
                    time:'09:00'
                },
                {
                    image:'woman 1.png',
                    user:'Bella',
                    lastChat:'Trouble maker watsup',
                    time:'09:00'
                },
                {
                    image:'man 4.png',
                    user:'Dee',
                    lastChat:'how are about pops',
                    time:'20/05/22'
                },
                {
                    image:'woman 4.png',
                    user:'Esther',
                    lastChat:'Egbon how work',
                    time:'02:00'
                },
                {
                    image:'boy.png',
                    user:'bola',
                    lastChat:'how are you bro',
                    time:'1:00'
                },
                {
                    image:'man 6.png',
                    user:'Clement',
                    lastChat:'Ogbeni',
                    time:'11:00'
                },
                {
                    image:'man 5.png',
                    user:'Boss',
                    lastChat:'Have you met your target',
                    time:'09:30'
                }
            ]
        }
    }

}
</script>

<style scoped>
@media (max-width: 414px) {
    .mob-padding{
        padding: 3rem 0rem !important;
    }
    .mob-text{
        font-size: 2rem !important;
    }
    .icon-non{
        display: none !important;
    }
    .chat-padding{
        padding: 0rem !important;
        margin: 0rem !important;
    }
    .mob-width{
        width: 100%;
    }
    
}
</style>