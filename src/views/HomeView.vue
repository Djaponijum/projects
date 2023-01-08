<template>
  <div class="container mt-5 ">
    <v-form class="item" @submit.prevent="getCustomers">
      <v-text-field v-model="pib" label="PIB" type="number" />
      <v-btn type="submit" color="primary" class="btn">Submit</v-btn>
    </v-form>
  </div>

 
  <v-data-table :headers="headers" :items="customers" item-key="pib">
    <template v-slot:item="{ item }">
      <td>{{ item.full_name }}</td>
      <td>{{ item.address }}</td>
      <td>{{ item.contact }}</td>
      <td>{{ item.phone_number }}</td>
    </template>
  </v-data-table>


  </template>
  
  <script>

  import axios from 'axios';
  

  export default {
    data() {
      return {
        pib: '',
        headers: [
        { text: 'Full Name', value: 'full_name' },
        { text: 'Address', value: 'address' },
        { text: 'Contact', value: 'contact' },
        { text: 'Phone Number', value: 'phone_number' }
      ],
      customers: [],
      };
    },

    methods: {
    async getCustomers() {
      try {
        const response = await axios.get('/customers', { params: { pib: this.pib } });
        this.customers = response.data;
      } catch (error) {
        console.error(error);
      }
    }
  }

  };

  </script>

<style>

.container {
  display: flex;
  margin-left: 750px;
  width: 250px;
 
}

.item{
 
 text-align: center;
}


</style>