<template>
     <div>
        <!-- <header /> -->

        <div id="rs-crypto" class="rs-services style4 pt-95 pb-100 md-pt-65 md-pb-70">
                <div class="container">
                    <div class="btn-part">                                            
                        <div class="form-group mb-0">
                            <a href="/create-asset"><button class="readon submit blue-small" >Create Asset </button> </a>
                        </div>
                    </div> 
                    <div class="sec-title text-center mb-60 md-mb-40">
                        <span class="sub-text small">Crypto </span>
                        <h2 class="title title3">Crypto /  Digital Currencies</h2>                           
                    </div>
                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-6" v-for="currency in currencies" :key="currency">
                            <router-link :to="'/update-currency'+currency.id">
                            <div class="services-item">
                                <div class="services-icon">
                                    <img class="dance_hover" :src='currency.logo' alt="Services" v-if="currency.logo">
                                    <img class="dance_hover" src='https://image.cnbcfm.com/api/v1/image/106962967-1634709558798-gettyimages-1235570383-porzycki-cryptocu210928_npbUe.jpeg?v=1638893580' alt="Services" v-else>
                                </div>
                                <div class="services-content">
                                    <h3 class="title"><a href="services-style1.html">{{ currency.currency }}</a></h3>
                                    <p class="margin-0" style="font-weight: 500; font-size: 16px;" ><span v-if="currency.buy_active">Buy: {{ currency.buy_rate }} / $ </span> <span v-else>Buy: 0</span> <span style="float: right;" v-if="currency.sell_active">Sell: {{ currency.sell_rate }} / $</span> <span v-else>Sell: 0</span></p>
                                 </div>
                            </div>
                            </router-link>
                        </div>
                    </div>
                </div>
        </div>
        
        <div id="rs-crypto" class="rs-services style4 pt-95 pb-100 md-pt-65 md-pb-70">
                <div class="container">
                    <div class="sec-title text-center mb-60 md-mb-40">
                        <span class="sub-text small">GiftCard </span>
                        <h2 class="title title3">GiftCard Rate </h2>                           
                    </div>
                    <div class="row">
                        <div class="col-lg-3 col-md-6" v-for="giftcard in giftcards" :key="giftcard">
                            <router-link :to="'/update-card'+giftcard.id">
                            <div class="services-item">
                                <div class="services-icon">
                                    <img class="dance_hover" :src='giftcard.logo' alt="Services" v-if="giftcard.logo">
                                    <img class="dance_hover" src='https://www.dignited.com/wp-content/uploads/2021/02/gift-card-scaled.jpg' alt="Services" v-else>
                                </div>
                                <div class="services-content">
                                    <h3 class="title"><a href="services-style1.html">{{ giftcard.card_name }}</a></h3>
                                    <p class="margin-0" style="font-weight: 500; font-size: 18px;"> <span v-if="giftcard.buy_active">Buy: {{ giftcard.buy_rate }} / $</span> <span v-else> Buy: 0</span> <span style="float: right;" v-if="giftcard.sell_active">Sell: {{ giftcard.sell_rate }} / $</span> <span v-else>Sell: 0</span> </p>
                                 </div>
                            </div>
                            </router-link>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
import Api from './Api'
import header from '@/components/header.vue'
    export default{
        name: "Asset",
        // components: {header},
        data() {
            return {
                currencies : [],
                giftcards: []
            }
        },

        methods: {
            getAssets(){
                Api.axios_instance.get(Api.baseUrl+'giftcard/')
                .then(res => {
                    console.log(res);
                    this.giftcards = res.data
                })
                Api.axios_instance.get(Api.baseUrl+'crypto/')
                .then(res => {
                    console.log(res);
                    this.currencies = res.data
                })
            }
        },
        mounted(){
            this.getAssets()
        }
    }
</script>