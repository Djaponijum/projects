<template>
  <div class="container">
    <div class="form-group">
      <label for="pib">PIB:</label>
      <input type="text" class="form-control" v-model="pib" @keyup.enter="getCustomers()" id="pib"
        placeholder="Enter PIB">
    </div>
    <button type="submit" class="btn btn-primary" @click="getCustomers()">Submit</button>
    <table class="table table-striped" v-if="connected">
      <thead>
        <tr>
          <th>PIB</th>
          <th>Full Name</th>
          <th>Address</th>
          <th>Contact</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>

        <tr v-for="customer in customers" :key="customer.pib" @click=showDetails(customer)>
          <td>{{ customer.pib }}</td>
          <td>{{ customer.full_name }}</td>
          <td>{{ customer.address }}</td>
          <td>{{ customer.contact }}</td>
          <td>{{ customer.phone_number }}</td>

        </tr>
      </tbody>
    </table>
    
    <Modal :cust="custData" @closeModal="dataModal = false" :showModal="dataModal"></Modal>
  
  </div>

</template>


<script>

import axios from 'axios';
import Modal from '../components/Modal.vue';

export default {

  components: {
    Modal,
  },
  data() {
    return {
      pib: '',
      connected: false,
      customers: [],
      dataModal: false,
      custData: null
    };
  },

  methods: {
    async getCustomers() {
      axios
        .get(`http://localhost:5000/customers?pib=${this.pib}`)
        .then((resp) => {
          console.log(resp);
          this.customers = resp.data;
          this.connected = true;
        })

    },
    
    showDetails(customer) {
      console.log(customer?.pib);
      this.custData = customer;
      this.dataModal=true;
      },
  }
};

</script>

<style>

.container {
  width: 50%;
}
</style>