<script setup>
const props=defineProps(
    {
        label:{
            type:String
        },
        value:{
            type:[String, Number]
        }
    }
)
</script>

<template>
   <div class="row">
    <span class="col-3">{{ label }}</span>
    <span class="col-auto">{{ value }}</span>
   </div> 
</template>