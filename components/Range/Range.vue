<template lang='pug'>
.range
  .range__header
    p.range__cost {{ fixFrom }} ₽
    p.range__cost &nbsp;&nbsp;
    p.range__cost {{ fixTo }} ₽
  .range__label(ref='range')
</template>



<script>
import noUiSlider from 'nouislider'
let slider
export default {
  props: ['data'],
  data() {
    return {
      valueArray: [this.fixFrom, this.fixTo],
    }
  },

  computed: {
    fixFrom() {
      return Math.max(this.data.from, this.data.min)
    },

    fixTo() {
      return this.data.to
        ? Math.min(Math.max(this.fixFrom, this.data.to), this.data.max)
        : this.data.max
    },
  },

  mounted() {
    slider = this.$refs.range
    noUiSlider.create(slider, {
      start: [this.fixFrom, this.fixTo],
      connect: true,
      step: 10,
      behaviour: 'drag',

      range: {
        min: this.data.min,
        max: this.data.max,
      },
      format: {
        to: function (value) {
          return Math.round(value)
        },
        from: function (value) {
          return Math.round(value)
        },
      },
    })
    slider.noUiSlider.on('update', (values) => {
      this.$emit('update', values)
    })
    slider.noUiSlider.on('end', (values) => {
      this.$emit('change', values)
    })
  },
  watch: {
    data: function (newData, oldData) {
      slider.noUiSlider.set([this.fixFrom, this.fixTo])
    },
  },
}
</script>

<style lang='scss' src='./range.scss'></style>