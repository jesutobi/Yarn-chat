<template >
<div class="bgpurple1 mob-bg chat-padding ">
  <div >
    <div class="w-85 m-auto chat-padding mob-width ">
      <!-- searchbar ,clear chat, active users-->
      <div class="">
        <div class="d-flex align-items-center justify-content-between p-2">
          <!-- searchbar -->
          <div class="w-30 position-relative icon-non">
            <input type="text" class="rounded-pill border-0 py-2 px-3 w-100 " placeholder="search">
            <div class="search">
              <img src="../assets/icon/magnifying-glass.png" alt="" class="w-60">
            </div>
          </div>
          <!-- clearchat and active users -->
          <div class="d-flex align-items-center icon-non">
            <!-- active users -->
            <div class="bgpurple2 rounded-pill p-2 white mx-2">
              <span class="px-2 fw-bold">Active users </span>
            </div> 
            <!-- clear chat -->
            <div class="bgwhite rounded-pill p-1 mx-2 d-flex justify-content-between align-items-center icon-non">
              <div>
                <span class="px-2 ">clear chat </span>
              </div>
              <div>
                <img src="../assets/icon/cancel.png" alt="" class="w-30">
              </div>
            </div> 
          </div>

        </div>
      </div>
      <!-- chat and chat display -->
      <div class="row ">
        <!-- chat -->
        <div class="col-sm-4">
          <oldChats/>
        </div>
        <!-- chat display -->
        <div class="col-sm-8 icon-non ">
          <chatDisplay/>
        </div>

      </div>

  
    </div>

  </div>
</div>  
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style scoped>
/* search icon */
.search{
  position: absolute;
  right: 0;
  top: 0.4rem;
  bottom: 0;
  
}
@media (max-width: 414px) {

    .icon-non{
      display: none !important;
    }
    .chat-padding{
      padding: 0rem !important;
      margin: 0rem !important;
    }
    .mob-bg{
      background: white !important;
    }
    .mob-width{
      width: 100%;
    }
    
}


</style>
