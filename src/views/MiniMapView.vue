<template>
  <div class="minimap">
    <h1>Mini Map</h1>
    <p>不想要透過css或是計算位置和元件長寬的做法</p>
    <ol>
      <li>在figma或是繪圖軟體把全部的元件選取變成“群組”</li>
      <li>匯出成SVG檔</li>
      <li>在瀏覽器開啟SVG並檢查是否可以選取各個組件，這時可以回去軟體調整id或是整理圖層(像這個地圖高度過高)</li>
      <li>將完成的SVG丟到一個vue組件中</li>
      <li>將SVG裡面的元件用class標示，就可以用css去控制一些hover變色等</li>
    </ol>

    <div>
      <Button type="error" @click="red = !red">{{red? '隱藏': '顯示'}}紅色Pin</Button> | 
      <Button type="info" @click="blue = !blue">{{blue? '隱藏': '顯示'}}藍色Pin</Button> | 
    </div>

    <div class="minimap_svg" :class="{redShow: red, blueShow: blue}">
      <MiniMap />
    </div>

    <hr>
    <h6>注意事項</h6>
    <ol>
      <li>如果要RWD需要再依據其他裝置尺寸，輸出一個新的SVG流程如上述，在透過v-if去控制要顯示哪個組件</li>
      <li>檔案如果很大影響到效能的話，要想辦法壓縮</li>
    </ol>
  </div>
</template>

<script>
import MiniMap from '@/components/MiniMap.vue'
export default {
  components:{
    MiniMap
  },
  data () {
      return {
          red: true,
          blue: true,
      }
  },
  methods: {
    handleRed() {
      console.log(1);
    },
    handleBlue(){

    }
  },
};
</script>

<style lang="scss">
.minimap{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  &_svg{
    width: 100%;
    max-width: 50rem;
    margin: auto;
    .redpin,
    .bluepin{
        display: none;
    }
    &.redShow{
      .redpin{
        display: block;
      }
    }
    &.blueShow{
      .bluepin{
        display: block;
      }
    }
    svg{
      width: 100%;
      g{
        cursor: pointer;
        .pin.red{
          fill: #FF0000;
        }
        .pin.blue{
          fill: #2196f3;

        }
        &:hover{
          .pin.red{
            fill: #f44336;
          }
          .pin.blue{
            fill: #3f51b5;
          }
        }
      }
    }
  }
}
</style>
