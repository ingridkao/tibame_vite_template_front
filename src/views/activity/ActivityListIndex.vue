<template>
    <div class="activity_list">
        <div v-if="loading">loading...</div>
        <div v-else-if="nodata">nodata...</div>
        <div v-else class="activity_container ">
            <div v-for="item in displayData" :key="item.s_id" class="activity_list_card">
                <RouterLink :to="{
                    name: 'activity-info',
                    params: {
                        id: item.s_id
                    }
                }">
                    <div class="activity_card_img">
                        <img :src="`https://tibamef2e.com/chd103/g2/dataimage/song/${item.s_img}`" :alt="item.title">
                    </div>
                    <h6>{{ item.s_name  }}</h6>
                    <p>{{ item.mem_name  }}</p>
                    <p>播放次數{{ item.play_num }}次</p>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            responseData: [],
            displayData: []
        }
    },
    created() {
        this.axiosGetData()
    },
    computed: {
        dataCount() {
            return this.displayData.length
        },
        loading() {
            return this.responseData.length === 0
        },
        nodata() {
            return this.displayData.length === 0
        }
    },
    methods: {
        axiosGetData() {
            //使用axios
            axios.get('https://tibamef2e.com/chd103/g2/api/getRankSong.php')
                .then(res => {
                    if (res && res.data) {
                        this.responseData = res.data
                        this.displayData = res.data
                    }
                })
        }
    }
}

</script>