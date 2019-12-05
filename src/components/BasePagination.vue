<template>
  <div class="p-5 flex justify-center">
    <router-link :to="{name: 'list', params: {page: pageNumber-1}}">
    <BaseButton :disabled="disabledBack" :class="{'opacity-50': disabledBack, 'cursor-not-allowed': disabledBack}">
      Back
    </BaseButton>
    </router-link>
    <router-link :to="{name: 'list', params: {page: pageNumber+1}}">
    <BaseButton :disabled="disabledNext" :class="{'opacity-50': disabledNext, 'cursor-not-allowed': disabledNext}">
      Next
    </BaseButton>
    </router-link>
  </div>
</template>

<script>
    import BaseButton from "@/components/BaseButton";
    export default {
      name: "BasePagination",
      props: ['pageNumber', 'charactersOnPage'],
      components: {BaseButton},
      computed: {
        disabledBack() {
          return this.pageNumber == 1;
        },
        disabledNext() {
          return this.charactersOnPage < 12 && this.charactersOnPage > 1;
        }
      }
    }
</script>
