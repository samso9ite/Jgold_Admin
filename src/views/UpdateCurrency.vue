<template>
        <div id="rs-contact" class="rs-contact home3-contact-style bg18 pt-100 pb-100 md-pt-70 md-pb-70">
            <div class="container">
                <div class="row margin-0">
                    <div class="col-lg-3"></div>
                    <div class="col-lg-6 col-sm-12 col-md-12 padding-0 md-mb-50">
                        <div class="contact-wrap">
                            <div class="sec-title mb-55 md-mb-35">
                                <div class="row">
                                     <span class="sub-text small">Update {{ currency }}  <button class="btn btn-danger" style="float:right" @click="deleteCard">Delete Currency</button></span>
                                </div>
                               
                            </div>
                            <div id="form-messages"></div>
                                <fieldset>
                                    <div class="row">
                                        <div class="services-item mb-4">
                                        <div class="services-icon" >
                                            <img class="dance_hover" :src="img" alt="Services" width="20%">
                                        </div>
                                        </div>
                                        <!-- <img  height="100px" max-width="200px" /> -->
                                        <div class="col-lg-12 col-md-12 col-sm-12 mb-30">
                                            <input class="from-control" type="text" placeholder="Name" required="" v-model="currency">
                                        </div> 
                                        <div class="col-lg-6 col-md-6 col-sm-6 mb-30">
                                            <input class="from-control" type="text"  placeholder="Buy Rate" required="" v-model="currency_buy_rate">
                                        </div>   
                                        <div class="col-lg-6 col-md-6 col-sm-6 mb-30">
                                            <input class="from-control" type="text" placeholder="Sell Rate" required="" v-model="currency_sell_rate">
                                        </div> 
                                        
                                        <div class="form-check col-lg-6 mb-35">
                                            <input class="form-check-input" type="checkbox" v-model="currency_sell_status">
                                            <label class="form-check-label">Sell Active</label>
                                        </div>
                                
                                        <div class="form-check col-lg-6 mb-35">
                                            <input class="form-check-input" type="checkbox" checked v-model="currency_buy_status">
                                            <label class="form-check-label">Buy Active</label>
                                        </div>
                                        <div class="form-check col-lg-6 mb-35">
                                            <input class="form-check-input" type="checkbox"  v-model="first_page">
                                            <label class="form-check-label">First Page</label>
                                        </div>
                                    
                                        <div class="col-lg-12 mb-35">
                                            <input type="file" class="from-control" ref="img" @change="handleFile">
                                        </div>
                                        
                                    </div>
                                    <div class="btn-part">                                            
                                        <div class="form-group mb-0">
                                            <button class="readon submit blue-small" @click="updateCard">Submit Now </button>
                                        </div>
                                    </div> 
                                </fieldset>
                        </div>
                    </div>

                  
                </div>
            </div>
        </div>
  </template>

<script>
import Api from './Api'
    export default{
        name: "UpdateCurrency",
        data() {
            return {
                currency: '',
                currency_buy_rate: '',
                currency_sell_rate: '',
                currency_buy_status: true,
                currency_sell_status: true,
                img: '',
                id: '',
                img_changed: false,
                first_page: false
            }
        },
        methods:{
            handleFile(){
                this.img = this.$refs.img.files[0]
                this.img_changed = true
            },
           
            updateCard(){
                let formData = new FormData()
                formData.append("currency", this.currency)
                formData.append("buy_rate", this.currency_buy_rate)
                formData.append("sell_rate", this.currency_sell_rate)
                formData.append("buy_active", this.currency_buy_status)
                formData.append("sell_active", this.currency_sell_status)
                formData.append("first_page", this.first_page)
                if(this.img_changed){
                    formData.append('logo', this.img)
                }

                Api.axios_instance.put(Api.baseUrl+'crypto/'+this.id+'/', formData)
                .then(res => {
                    window.location.replace('/')
                    alert("Currency Updated Successfully")
                  
                })
            },
            getCard(){
                Api.axios_instance.get(Api.baseUrl+'crypto/'+this.id+'/')
                .then(res => {
                    let data = res.data
                    console.log(data);
                    this.currency = data.currency
                    this.currency_buy_rate = data.buy_rate
                    this.currency_sell_rate = data.sell_rate
                    this.currency_sell_status = data.sell_active
                    this.currency_buy_status = data.buy_active 
                    this.img = data.logo
                    this.first_page = data.first_page
                })
            },
            deleteCard(){
                Api.axios_instance.delete(Api.baseUrl+'crypto/'+this.id+'/')
                .then(res => {
                    window.location.replace('/')
                    alert("Currency Deleted Successfully")
                }
                )
            }
        },

        mounted(){
            this.id = this.$route.params.id 
            this.getCard()
        }
    }
</script>