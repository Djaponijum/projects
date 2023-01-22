<template>
  <div id="customer-modal" class="modal fade" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Informacije o korisniku</h5>
          <!-- <button type="button" class="btn-close" @click="MyCloseModal" aria-label="Close"></button> -->
        </div>
        <div class="modal-body">
          <p>PIB: {{ cust?.pib }}</p>
          <p>Full Name: {{ cust?.full_name }}</p>
          <p>Address: {{ cust?.address }}</p>
          <p>Contact: {{ cust?.contact }}</p>
          <p>Phone Number: {{ cust?.phone_number }}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click=hideModal()>Close</button>
        </div>
      </div>
    </div>
  </div>
</template> 


<script>

import { Modal } from "bootstrap";

export default {
  name: "CustomerDetails",
  data: () => ({
    modalInstance: null
  }),
  props: {
    showModal: {
      type: Boolean,
      default: false
    },
    cust: {
      type: Object,
      default: null
    },
  },
  watch: {
    showModal(newValue) {
      console.log(newValue);
      if (newValue === true) {
        this.modalActive();
      }
    }
  },
  methods: {
    modalActive: function () {
      this.modalInstance = new Modal(document.getElementById('customer-modal'));
      this.modalInstance.show()
    },
    hideModal: function () {
      console.log("closed");
      this.modalInstance.hide();
      this.$emit('closeModal');
    }
  }
};

</script>