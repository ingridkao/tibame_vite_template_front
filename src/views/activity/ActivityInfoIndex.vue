<template>
    <div class="activity_info">
        <div v-if="loading">loading...</div>
        <div v-else-if="nodata">nodata...</div>
        <div v-else class="activity_container ">
            <div class="activity_card_img">
                <img :src="`https://tibamef2e.com/chd103/g2/dataimage/song/${responseData.songpic}`" :alt="responseData.songname">
            </div>
            <div>
                <h6>{{ responseData.songname  }}</h6>
                <p>{{ responseData.singer  }}</p>
                <p>播放次數{{ responseData.played }}次</p>
                <p>❤️ {{ responseData.liked }}</p>
                <p>share{{ responseData.shared }} </p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            responseData: {},
            loading: true
        }
    },
    mounted() {
        this.axiosGetData()
    },
    computed: {
        nodata() {
            return Object.keys(this.responseData).length === 0
        }
    },
    methods: {
        axiosGetData() {
            const pageId = this.$route.params.id
            axios.get(`https://tibamef2e.com/chd103/g2/api/getSingleMusic.php?sid=${pageId}`)
            .then(res => {
                if (res && res.data) {
                    this.loading = false
                    this.responseData = res.data[0]
                }
            })
        }
    }
}

</script>