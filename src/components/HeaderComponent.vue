<template>
<div id="app">
    <v-card>
        <v-tabs
          v-model="tab"
          bg-color="primary"
        >
          <v-tab value="one">HOME</v-tab>
          <v-tab value="two">ABOUT US</v-tab>
          
         <br> <v-tab value="three">LOGIN FORM</v-tab>
          <v-tab value="four">REGISTRATION  FORM</v-tab>
        </v-tabs>
    
        <v-card-text>
          <v-window v-model="tab">
            <v-window-item value="one">
              One
            </v-window-item>
    
            <v-window-item value="two">
              Two
            </v-window-item>
    
            <v-window-item value="three">
              Three
            </v-window-item>
          </v-window>
        </v-card-text>
      </v-card>
      </div>
</template>

<script>
    export default {
      name: 'HeaderComponent',
    }
</script>
 
<style>
#app {
  background: url('https://ohlaladani.com.br/wp-content/uploads/wallpaper-OHLALADANI_DESKTOP_WALLPAPERS_AVENTURA-2.jpg')
    no-repeat center center fixed !important;
  background-size: cover;
}
</style>
  