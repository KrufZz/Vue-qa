<template>
    <div id="poster">
        <div class="time-select">
            {{currentTime}}
        </div>

        <div v-if="openCard" class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6
                relative ">
            <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" src="~@/assets/QQ.jpg" alt="Woman's Face">
            <div class="text-center space-y-2 sm:text-left">
                <div class="space-y-0.5">
                    <p class="text-lg text-black font-semibold">
                        Kruf
                    </p>
                    <p class="text-gray-500 font-medium">
                        烟雨路发电站
                    </p>
                </div>
                <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
            </div>
            <div>
                <p class="absolute top-3 right-5 text-pink-600 text-xl" @click="close">x</p>
            </div>
        </div>


        <input  type="text" id="input0" name="word" size="30" placeholder="Search" autocomplete="off">


        <div class="bottom-div">
            © 2021
            <span @click="openData">Kruf</span>
            <span class="bottom-span">  |  </span>
            烟雨路43号
            <span class="bottom-span">  |  </span>
            关于
        </div>





        <PhotoCard class="photo"/>

    </div>
</template>

<script>
    import PhotoCard from "../common/PhotoCard";
    export default {
        components:{PhotoCard},
        name: "Index",
        data() {
            return {
                currentTime: '',
                openCard:true,
            }

        },

        created() {
            this.getTime();
        },
        mounted() {
          setInterval(() =>{
              setTimeout(this.getTime,0)
          },1000)
        },

        methods: {
            getTime() {
                var date = new Date();
                var hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
                var minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
                this.currentTime = hour + ":" + minute

            },
            openData(){
                this.openCard = true;
            },
            close(){
              this.openCard = false;
            },
        },



    }


</script>

<style scoped>

    #poster {
        background-image: url(https://retiehe.com/backend/bing/1080p);
        background-position: center;
        height: 100%;
        width: 100%;
        background-size: cover;
        position: fixed;
        top: 0px;
        left: 0px;
    }

    body {
        margin: 0px;
    }

    .time-select {
        font-weight: bold;
        font-size: 30px;
        color: white;
        position: absolute;
        left: 50%;
        top: 20%;
        margin: -50px 0 0 -50px;
    }

    .bottom-div {
        position: fixed;
        bottom: 10px;
        left: 8px;
        width: 100%;
        font-size: 12px;
        color: rgba(255,255,255,0.6);
        text-align: center;
        text-shadow: 0 0 20px rgb(0 0 0 / 80%);
        animation-name: fadeIn;
        animation-duration: 1s;
        animation-iteration-count: 1;
        animation-delay: 0s;
    }

    .bottom-span{
        padding: 5px;
    }

    input{
        position: absolute;
        top: 200px;
        left: 49.5%;
        transform: translateX(-50%);
        width: 230px;
        max-width: 80%;
        outline: none;
        /* border: 1px solid rgba(255,255,255,0.3); */
        border: none;
        padding: 13px 15px;
        border-radius: 30px;
        color: rgba(255,255,255,0.8);
        font-size: small;
        font-weight: normal;
        font-family: "Microsoft Yahei",sans-serif;
        text-align: center;
        background-color: rgba(255,255,255,.25);
        box-shadow: rgb(0 0 0 / 20%) 0 0 10px;
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
        transition: color 0.25s, background-color 0.25s, box-shadow 0.25s, left 0.25s, opacity 0.25s, top 0.25s, width 0.25s;
    }

    .photo{
        position: absolute;
    }

</style>
