<template> 
<v-main>

    <v-card>
        <v-tabs
          v-model="tab"
          bg-color="primary"
        >
         <v-tab value="one"><router-link to="/">HOME</router-link></v-tab>
  
       <v-tab value="two"><router-link to="/AboutUs">ABOUT US</router-link><br /></v-tab>
        
          <v-tab value="three"><router-link to="/Login">LOGIN FORM</router-link><br /></v-tab>
          <v-tab value="three"><router-link to="/Registration">Registartion FORM</router-link><br /></v-tab>
           <router-view></router-view>
        </v-tabs>
    
        <v-card-text>
          <v-window v-model="tab">
            <v-window-item value="one">
            TOURSIM WEBSITE
            </v-window-item>
    
            <v-window-item value="two">
              ABOUT US PAGE
            </v-window-item>
    
            <v-window-item value="three">
              LOGIN FORM
            </v-window-item>
            <v-window-item value="three">
              REGISTRATION FORM
            </v-window-item>
          </v-window>
        </v-card-text>
      </v-card>
      
      
    

          <BodyComponent />
        
      
  
 
  <FooterComponent />
  
  </v-main>
  </template>
  
  <script>
  
  
  import FooterComponent from './components/FooterComponent';
  import BodyComponent from './components/BodyComponent';
  export default {
     name: 'App',

  components: {
    FooterComponent,BodyComponent,
  },
    
  }
</script>
