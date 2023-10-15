<template>
<v-main>
    <v-card>
        <v-tabs
          v-model="tab"
          bg-color="primary"
        >
          <div id="app"><router-link to="/">HOME</router-link>
  <br />
          <router-link to="/AboutUs">about FORM</router-link><br />
          <router-view></router-view></div>
          <v-tab value="three">Item Three</v-tab>
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
      
      </v-main>
     
</template>

<script>
     
    export default {
      name: 'HeaderComponent',
    
    
    }
</script>
  