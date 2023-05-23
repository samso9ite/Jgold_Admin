<template>
        <div id="rs-crypto" class="rs-services style4 pt-95 pb-100 md-pt-65 md-pb-70">
                <div class="container">
                    <div class="sec-title text-center mb-60 md-mb-40">
                        <!-- <span class="sub-text small">Testimonials </span> -->
                        <h2 class="title title3">Testimonials</h2>                           
                    </div>
                 
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-sm-6" v-for="testimony in testimonials" :key="testimony">
                            <div class="services-item">
                               
                                <div class="services-content">
                                    <h3 class="title"><a href="services-style1.html">{{ testimony.name }}</a></h3>
                                    <p class="margin-0" style="font-weight: 500; font-size: 14px;">{{ testimony.testimony }} </p>
                                </div>
                            
                                <button class="btn btn-success mt-2" @click="updateTestimonial(testimony.id, testimony.approval_status)" v-if="testimony.approval_status != true">Approve</button>
                                <button class="btn btn-danger mt-2" @click="updateTestimonial(testimony.id, testimony.approval_status)" v-if="testimony.approval_status != false">Disapprove</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
</template>

<script>
import Api from './Api'

    export default{
        name: "Testimonial",
        data() {
            return {
                testimonials: [],
            }
        },

        methods: {
            getTestimonials(){
                Api.axios_instance.get(Api.baseUrl+'testimonial'+'/')
                .then(res => {
                    this.testimonials = res.data
                })
            },
            updateTestimonial(id, status){
                if(status == true){
                    status = false
                } else if(status == false){
                    status = true
                }
                Api.axios_instance.patch(Api.baseUrl+'testimonial/'+id+'/', {'approval_status':status} )
                .then(res => {
                    this.getTestimonials()
                    alert("Testimonial Updated")
                })
            }
        },
        mounted() {
            this.getTestimonials()
        },
    }
</script>