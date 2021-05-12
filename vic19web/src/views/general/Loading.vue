<template>
    <div class="main">
        <v-progress-circular 
            size="70"
            class="progress"
            indeterminate>
        </v-progress-circular>
        
        <div no-gutters class="label">
            {{label}}
        </div>
    </div>
</template>
<script>

export default ({
    props:{
        "label":{type:String,default:""}
    }
})
</script>

<style lang="sass" scoped>
.main
    background-color: rgba(0,0,0,0.6)
    width: 100vw
    height: 100vh
    text-align: center
    position: relative
.progress
    color:$color2 !important    
    top: 50% !important
    -ms-transform: translateY(-50%) !important
    transform: translateY(-50%) !important
.label
    color: $color2
    position: absolute
    width: 100%
    opacity: 0.9
    font-weight: 300
    font-size: 1.2vw
    top: 50% !important
    -ms-transform: translateY(-50%) !important
    transform: translateY(-50%) !important
    margin-top: 60px

</style>