<template>
<div class="bgpurple2 shadow bord">
    <div class="font w-85 m-auto mob-chat-padding">
        <div class="d-flex align-items-center justify-content-between py-2 mob-padding">
            <!-- logo -->
            <div class="mob-pad-logo">
                <img src="../assets/icon/logo.png" alt="" class="w-25 size">
            </div>
            <!--home, chat and Yo -->
            <div class="d-flex align-items-center justify-content-around">
                <!-- chat -->
                <div class="d-flex align-items-center w-15 me-4  white fw-bold icon-non">
                    <img src="../assets/icon/chat.png" alt="" class="w-70  px-2" />
                    <span class="">Chat</span>   
                </div>
                <!-- yo -->
                <div class="d-flex align-items-center w-15 me-4  white fw-bold icon-non">
                    <img src="../assets/icon/comment-user.png" alt="" class="w-80  px-2" />
                    <span class="">Yo</span>   
                </div>
                <!-- mobile search icon -->
                <div class="icon-none ">
                    <img src="../assets/icon/loupe.png" alt="" class="w-60">
                </div>
                <!-- notification bell -->
                <div class="w-10 me-2">
                    <img src="../assets/icon/notification.png" alt="w-5">
                </div>
                <!-- user icon -->
                <div class="man-spacing me-4">
                    <img src="../assets/icon/man.png" alt="">
                </div>
                <!-- more icon -->
                <div class="man-spacing ">
                    <img src="../assets/icon/more.png" alt="" class="w-50">
                </div>
            </div>
        </div>
        
         <!-- searchbar -->
          <div class="w-90 position-relative m-auto  m-1 icon-none">
            <input type="text" class="rounded-pill border-0 py-2 px-3 w-100 " placeholder="search">
            <div class="search">
              <img src="../assets/icon/magnifying-glass.png" alt="" class="w-60">
            </div>
          </div>
        <!-- chat and yo -->
        <div class="m-1 py-1 d-flex align-items-center icon-none">
            <!-- active users -->
            <div class=" bgwhite rounded-pill d-flex align-items-center py-1  px-2 m-2">
                <div>
                    <span class="grey fs-200 px-2 fw-bold">Active users</span>
                </div>
                <div>
                    <img src="../assets/icon/online-education.png" alt="" class="w-90">
                </div>

            </div>
            <!-- yo -->
            <div class=" bgwhite rounded-pill d-flex align-items-center py-1  px-2 m-2">
                <div>
                    <span class="grey fs-200 px-2 fw-bold">Yo</span>
                </div>
                <div>
                    <img src="../assets/icon/comment-user-black.png" alt="" class="w-90">
                </div>

            </div>

        </div>
    </div> 
</div>
</template>

<script>
export default {

}
</script>

<style scoped>

@media (max-width: 414px) {
    .mob-padding{
        padding: 1rem 0rem !important;
    }
    .mob-pad-logo{
        padding: 0rem 1rem !important;
    }
    .mob-text{
        font-size: 1rem !important;
    }
    .icon-non{
        display: none !important;
    }
    .bord{
        border-radius: 0rem 0rem 1rem 1rem  !important;
    }
    /* user icon */
    .man-spacing{
        padding: 0rem 0rem !important;
        margin: 0rem 0rem !important;
    }
    .mob-chat-padding{
        padding: 0rem !important;
        margin: 0rem !important;
        width: 100%;
    }
    /* mobile search */
    .search{
        position: absolute;
        right: 0;
        top: 0.4rem;
        bottom: 0;
        
    }
    
}
@media (min-width: 414.666666px) {
    .icon-none{
        display: none !important;
    }
    /* logo size */
    .size{
        width: 18% !important;
    }
    
    
}

</style>