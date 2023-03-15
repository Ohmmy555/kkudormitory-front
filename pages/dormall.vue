<template>

  <v-container >
    <v-select
  clearable
  label="g];;"
  :items="['น้อยไปมาก', 'มากไปน้อย']"
  variant="solo"
></v-select>
    <v-row  no-gutters>
      <v-col cols="8">
        <v-sheet class="pa-2 ma-2 mr-6">
         <v-col cols="12">    <!-- //ก็อปตรงนี้ -->
          <v-card
            color="white"
          >
          <v-card-actions>
          
            <div class="d-flex flex-no-wrap justify-space-between">
              <v-avatar
                class="ma-3"
                size="auto"
                rounded="0"
                cover
                
              >
                <v-img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"></v-img>
              </v-avatar>
              <div>
                <div class="d-flex flex-no-wrap justify-space-between">
                  <v-col cols="9" >
                     <span class="text-h6 " style="color: #eb6e44;">
                          Supermodel kklkllllllllllllllllllllllllll
                     </span>
                  </v-col>
                  <v-col cols="4"  >
                    <span class="namezone" >
                      โซนหลังมอ
                    </span>
                </v-col>
                
                </div>
                <v-col>ที่อยู่</v-col>
                <v-col class="text-h6 textbg">ราคา</v-col>
                <v-col class="pb-0">สิ่งอำนวยความสะดวก</v-col>
                <div class="d-flex">
                  
                <v-col cols="3">
                  <v-icon icon="fa-solid fa-circle-check"  /><v-subtitle>Foster the People </v-subtitle>
                
                </v-col>
                <v-col cols="3">
                  <v-icon icon="fa-solid fa-circle-check"  /><v-subtitle>Foster the People </v-subtitle>
                </v-col>
                <v-col cols="3">
                  <v-icon icon="fa-solid fa-circle-check"  /><v-subtitle>Foster the People </v-subtitle>
                  
                </v-col>
                <v-col cols="3">
                  <v-icon icon="fa-solid fa-circle-check"  /><v-subtitle>Foster the People </v-subtitle>
                  
                </v-col>
              </div>
            </div>
            

          
            </div>
          </v-card-actions>
          </v-card>
        </v-col>
        
        </v-sheet>
        <v-pagination :length="10"></v-pagination>
        
      </v-col>
      <v-col cols="4">
        <v-sheet class="pa-2 mt-5 mr-6">
  <v-card color="white"> 
    <v-card-title style="font-weight: bold;">หอพักใหม่ล่าสุด</v-card-title>
    <v-card-text>
      <v-card color="white" class="mb-3"> <!--ก็อปตรงนี้-->
        <v-card-actions>
          <div class="d-flex flex-no-wrap justify-space-between">
            <v-avatar class="ma-2" size="100px" rounded="0" cover>
              <v-img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"></v-img>
            </v-avatar>
            <div>
              <v-col cols="12">
                <v-text class="text" style="color: black; font-size: 18px;">หอพักหญิงธัญญณัฐ</v-text> <br>
                <v-text class="text" >ที่อยู่ 680/46 หน้าเมือง ในเมือง</v-text> <br>
                <v-text  class="text " style="font-weight: bold;">ราคา 4,500-5,500 บาท</v-text> 
              </v-col>
              
            </div>
          </div>
        </v-card-actions>
      </v-card>
      <v-card color="white"> <!--ก็อปตรงนี้-->
        <v-card-actions>
          <div class="d-flex flex-no-wrap justify-space-between">
            <v-avatar class="ma-2" size="100px" rounded="0" cover>
              <v-img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"></v-img>
            </v-avatar>
            <div>
              <v-col cols="12">
                <v-text class="text" style="color: black; font-size: 18px;">หอพักหญิงธัญญณัฐ</v-text> <br>
                <v-text class="text" >ที่อยู่ 680/46 หน้าเมือง ในเมือง</v-text> <br>
                <v-text  class="text " style="font-weight: bold;">ราคา 4,500-5,500 บาท</v-text> 
              </v-col>
              
            </div>
          </div>
        </v-card-actions>
      </v-card>
      
    </v-card-text>
  </v-card>
</v-sheet>
</v-col>

    
      
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
.namezone{
  border: 2px solid #f9d21d;
  border-radius: 20px;
  text-align: center;
  color: #f9d21d;
  padding: 10px;
 align-content:  flex-end;
}
.textbg{
  color: rgb(97, 53, 53);
  background-color: #fff3cd;
  border-radius: 5px;
}


</style>
