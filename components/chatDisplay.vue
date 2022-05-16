<template>
<div class="font">
    <div class="">
        <!-- active chat -->
        <div class="d-flex align-items-center rounded-3 p-1 bgwhite">
            <span>
                <img src="../assets/icon/woman 1.png" alt="">
            </span>
            <div class="p-2  ms-4">
                <span class="fw-bold">Bella</span>
            </div>
        </div>
        <div class="rounded-border bgwhite mt-2 h-100 backdrop"> 
            <div   v-for="chatDisplay in chatDisplays" :key="chatDisplay.chatD">
                <div class="p-2"  >
                    <div class="d-flex align-items-center">
                        <div>
                            <div>
                                <img :src="require(`@/assets/icon/${chatDisplay.image}`)" alt="">
                            </div>
                            <div class="text-center">
                                <span class="fs-130 fw-bold ">{{chatDisplay.time}}</span>
                            </div>
                        </div>
                        <div class="p-2 bggrey2 rounded-3 ms-4">
                            <span class="fs-200">{{chatDisplay.chats}}</span>
                        </div>
                    </div>
                    <div class="w-100">
                        <div class=" text-end">
                            <span class="p-2 bgpurple1 rounded-3 ms-4 fs-200">{{chatDisplay.chats1}}</span>
                        </div>
                    </div>
                </div>
            </div>
            <!--type your message space  -->
            <div class="d-flex align-items-center m-2">
                <!-- emoji -->
                <div class="m-2">
                    <img src="../assets/icon/happyy.png" alt="" class="w-80">
                </div>
                <!-- type here -->
                <div class="w-100 m-1">
                    <input type="text" placeholder="Type a message" class="rounded-pill border-line  py-2 px-3 w-100 fs-150 shadow">
                </div>
                <!-- attach -->
                <div class="m-2 ">
                    <img src="../assets/icon/attachments.png" alt="" class="w-70">
                </div>
                <!-- send message -->
                <div class="m-2">
                    <img src="../assets/icon/send.png" alt="">
                </div>
            </div>

        </div>    
    </div>      

</div>
  
</template>

<script>
export default {
    data(){
        return{
            chatDisplays:[
                {
                    user:'Bella',
                    image:'woman 1.png',
                    time:'11:00',
                    chats:'watsup dear',
                    chats1:'i am good'
                },
                {
                    user:'Bella',
                    image:'woman 1.png',
                    time:'11:03',
                    chats:'how was work today',
                    chats1:'cool'
                },
                {
                    user:'Bella',
                    image:'woman 1.png',
                    time:'11:05',
                    chats:'whjat time are you leaving the office',
                    chats1:'6'
                },
                {
                    user:'Bella',
                    image:'woman 1.png',
                    time:'11:20',
                    chats:'ok',
                    chats1:'yeah'
                }
            ]
        }
    }

}
</script>

<style>
/* .backdrop{
    background-image: url(../assets/images/what.jpg);
    object-fit: fill;
} */
/* border colr*/
.border-line{
    border: 1.3px solid var(--clr-purple1) !important;
}
textarea:focus, input:focus{
outline: none;
}

</style>