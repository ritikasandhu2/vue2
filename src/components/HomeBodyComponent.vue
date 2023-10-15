<template>
<div id="app">
    <v-sheet width="300" class="mx-auto">
      <v-form ref="login" @submit.prevent="saveData()">
        <v-text-field
          v-model="FormData.firstName"
          label="First name"
          :rules="rules.firstNameRules"
        ></v-text-field>
  
        <v-text-field
          v-model="FormData.lastName"
          label="Last name"
          :rules="rules.lastNameRules"
        ></v-text-field>
  
        <v-btn type="submit" block class="mt-2">Submit</v-btn>
         <v-btn type="submit" block class="mt-2">Registartion </v-btn>
      </v-form>
    </v-sheet>
    </div>
  </template>
   
<script>
  export default {
    data: () => ({
      valid: false,
      FormData: {
      firstName: '',
      lastName: '123',
    },
      rules: {
      firstNameRules: [
        value => {
          if (value?.length > 3) return true

          return 'First name must be at least 3 characters.'
        },
      ],
      lastNameRules: [
        value => {
          if (/[^0-9]/.test(value)) return true

          return 'Last name can not contain digits.'
        },
      ],
    }}),
methods: {
 saveData(){
    const valid=this.$refs.login.validate();
    console.log('valid ',valid);

   
    if(valid)
    {
      console.log('this is true',this.formData);}
 }
},
  }
  
  

  </script>
  
<style>
#app {
  background: url('https://ohlaladani.com.br/wp-content/uploads/wallpaper-OHLALADANI_DESKTOP_WALLPAPERS_AVENTURA-2.jpg')
    no-repeat center center fixed !important;
  background-size: cover;
}
</style>