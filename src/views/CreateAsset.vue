<template>
    <div>
        <div id="rs-contact" class="rs-contact home3-contact-style bg18 pt-100 pb-100 md-pt-70 md-pb-70">
            <div class="container">
                <div class="row margin-0">
                    <div class="col-lg-6 padding-0 md-mb-50">
                        <div class="contact-wrap">
                            <div class="sec-title mb-55 md-mb-35">
                                <span class="sub-text small">Create GiftCard</span>
                            </div>
                            <div id="form-messages"></div>
                                <fieldset>
                                    <div class="row">
                                        <div class="col-lg-12 col-md-12 col-sm-12 mb-30">
                                            <input class="from-control" type="text" placeholder="Name" required="" v-model="card_name">
                                        </div> 
                                        <div class="col-lg-6 col-md-6 col-sm-6 mb-30">
                                            <input class="from-control" type="text"  placeholder="Buy Rate" required="" v-model="card_buy_rate">
                                        </div>   
                                        <div class="col-lg-6 col-md-6 col-sm-6 mb-30">
                                            <input class="from-control" type="text" placeholder="Sell Rate" required="" v-model="card_sell_rate">
                                        </div> 
                                        
                                        <div class="form-check col-lg-6 mb-35">
                                            <input class="form-check-input" type="checkbox" v-model="card_sell_status">
                                            <label class="form-check-label">Sell Active</label>
                                        </div>
                                
                                        <div class="form-check col-lg-6 mb-35">
                                            <input class="form-check-input" type="checkbox" checked v-model="card_buy_status">
                                            <label class="form-check-label">Buy Active</label>
                                        </div>
                                        <div class="form-check col-lg-6 mb-35">
                                            <input class="form-check-input" type="checkbox"  v-model="first_page">
                                            <label class="form-check-label">First Page</label>
                                          </div>
                                    
                                        <div class="col-lg-12 mb-35">
                                            <input type="file" class="from-control" required="" ref="cardImg" @change="handleCardFile()">
                                        </div>
                                    </div>
                                    <div class="btn-part">                                            
                                        <div class="form-group mb-0">
                                            <button class="readon submit blue-small" @click="createCard()">Submit Now </button>
                                        </div>
                                    </div> 
                                </fieldset>
                        </div>
                    </div>

                    <div class="col-lg-6 md-mb-50">
                        <div class="contact-wrap">
                            <div class="sec-title mb-55 md-mb-35">
                                <span class="sub-text small">Create Crypto</span>
                            </div>
                            <div id="form-messages"></div>
                            <!-- <form id="contact-form" method="post" action=""> -->
                                <fieldset>
                                    <div class="row">
                                        <div class="col-lg-12 col-md-12 col-sm-12 mb-30">
                                            <input class="from-control" type="text" placeholder="Name" required="" v-model="currency">
                                        </div> 
                                        <div class="col-lg-6 col-md-6 col-sm-6 mb-30">
                                            <input class="from-control" type="text"  placeholder="Buy Rate" required="" v-model="crypto_buy_rate">
                                        </div>   
                                        <div class="col-lg-6 col-md-6 col-sm-6 mb-30">
                                            <input class="from-control" type="text" placeholder="Sell Rate" required="" v-model="crypto_sell_rate">
                                        </div> 
                                          
                                        <div class="form-check col-lg-6 mb-35">
                                            <input class="form-check-input" type="checkbox"  v-model="crypto_sell_status">
                                            <label class="form-check-label">Sell Active</label>
                                          </div>
                                  
                                        <div class="form-check col-lg-6 mb-35">
                                            <input class="form-check-input" type="checkbox"  v-model="crypto_buy_status">
                                            <label class="form-check-label">Buy Active</label>
                                          </div>
                                          <div class="form-check col-lg-6 mb-35">
                                            <input class="form-check-input" type="checkbox"  v-model="first_page_crypto">
                                            <label class="form-check-label">First Page</label>
                                          </div>
            
                                    
                                        <div class="col-lg-12 mb-35">
                                            <input type="file" class="from-control" id="message" name="message" required="" ref="cryptoImg" @change="handleCryptoFile()">
                                        </div>
                                    </div>
                                    <div class="btn-part">                                            
                                        <div class="form-group mb-0">
                                            <button class="readon submit blue-small" @click="createCurrency">Submit Now </button>
                                        </div>
                                    </div> 
                                </fieldset>
                            <!-- </form>  -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
</template>

<script>
import Api from './Api'
    export default{
        name: "CreateAsset",
        data() {
            return {
                card_name: '',
                cryto_buy_rate: '',
                crypto_sell_rate: '',
                crypto_buy_status: true,
                crypto_sell_status: true,
                currency: '',
                card_buy_rate: '',
                card_sell_rate: '',
                card_buy_status: true,
                card_sell_status: true,
                card_img: '',
                crypto_img: '',
                first_page: '',
                first_page_crypto: ''
            }
        },
        methods:{
            handleCardFile(){
                this.card_img = this.$refs.cardImg.files[0]
            },
            handleCryptoFile(){
                this.crypto_img = this.$refs.cryptoImg.files[0]
            },
            createCurrency(){
                const formData = new FormData()
                formData.append("currency", this.currency)
                formData.append("buy_rate", this.crypto_buy_rate)
                formData.append("sell_rate", this.crypto_sell_rate)
                formData.append("buy_active", this.crypto_buy_status)
                formData.append("sell_active", this.crypto_sell_status)
                formData.append("logo", this.crypto_img)
                formData.append("first_page", this.first_page_crypto)

                Api.axios_instance.post(Api.baseUrl+'crypto/', formData)
                .then(res => {
                    alert("Currency Created Successfully")
                    this.currency = ''
                    this.crypto_buy_rate = ''
                    this.crypto_sell_rate = ''
                    this.crypto_sell_status = ''
                    this.crypto_buy_status = ''
                  
                })  
            },
            createCard(){
                let formData = new FormData()
                formData.append("card_name", this.card_name)
                formData.append("buy_rate", this.card_buy_rate)
                formData.append("sell_rate", this.card_sell_rate)
                formData.append("buy_active", this.card_buy_status)
                formData.append("sell_active", this.card_sell_status)
                formData.append('logo', this.card_img)
                formData.append("first_page", this.first_page)

                Api.axios_instance.post(Api.baseUrl+'giftcard/', formData)
                .then(res => {
                    alert("Giftcard Created Successfully")
                    this.card_name = ''
                    this.card_buy_rate = ''
                    this.card_sell_rate = ''
                    this.card_sell_status = ''
                    this.card_buy_status = ''
                    this.card_img = ''
                    this.first_page = ''
                })
            }
           
        }
    }
</script>