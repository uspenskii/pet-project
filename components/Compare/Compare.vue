<template lang='pug'>
.compare
  .container
    .compare__none(v-if='compare.products.length < 1')
      h2.compare__headline В сравнении пока ничего нет
      nuxt-link.compare__button(to='/') На главную
    div(v-else) 
      .compare__tabs 
        button.compare__tab(
          :class='{ "is-active": id == 0 }',
          @click='toggleGroup(0)'
        ) Все
        button.compare__tab(
          :class='{ "is-active": id == item.id }',
          v-for='(item, index) in compare.groups',
          :key='index',
          @click='toggleGroup(item.id)'
        ) {{ item.title }}
      .compare__header
        .compare__sorting
          .compare__sort
            Radio(label='Все характеристики', value='all', v-model='type')
          .compare__sort
            Radio(label='Только различия', value='diff', v-model='type')
        button.compare__clear(@click='clearAll') Очистить список
      .compare__body(ref='compare')
        .compare__wrapper
          .compare__item(v-for='(item, j) in products', :key='j')
            ProductCompare(:data='item', :characteristics='characteristics')
        .compare__characteristics
          Characteristics(:data='filteredCharacteristics')
</template>

<script>
import Swiper from 'swiper'
export default {
  data() {
    return {
      groupId: 0,
      type: 'all',
      swiper: null,
    }
  },
  methods: {
    handleStickyChange() {
      this.sticky = !this.sticky
    },
    toggleGroup(id) {
      this.groupId = id
    },
    clearAll() {
      this.$store.dispatch('compare/clear')
    },
    toggleCompare() {
      this.$store.dispatch('compare/differing').then(() => {
        this.swiper.update()
      })
    },
    showAll() {
      this.$store.dispatch('compare/get').then(() => {
        this.swiper.update()
      })
    },
  },

  computed: {
    id() {
      let group = this.compare.groups.find((group) => group.id == this.groupId)

      if (group) {
        return group.id
      }

      return 0
    },
    compare() {
      return this.$store.state.compare
    },
    products() {
      if (!this.id) {
        return this.compare.products
      }
      return this.compare.products.filter((product) => {
        return product.groupId == this.id
      })
    },
    characteristics() {
      let characteristics = {}
      this.products.forEach((product, index, array) => {
        product.characteristics.forEach((characteristic) => {
          characteristics[characteristic.id] = {
            label: characteristic.label,
            id: characteristic.id,
          }
        })
      })

      return characteristics
    },
    productCharacteristics() {
      let data = {}
      for (const [key, characteristic] of Object.entries(
        this.characteristics
      )) {
        data[characteristic.id] = {
          label: characteristic.label,
          id: characteristic.id,
          isDifferent: false,
          values: [],
        }
        this.products.forEach((product) => {
          let productCharacteristic = product.characteristics.find(
            (productChar) => productChar.id == characteristic.id
          )

          let value = productCharacteristic ? productCharacteristic.title : '-'

          data[characteristic.id].values.push(value)
        })
      }

      for (const [key, row] of Object.entries(data)) {
        if (row.values.length <= 1) {
          row.isDifferent = true
        } else {
          const firstValue = row.values[0]
          row.values.forEach((value) => {
            if (firstValue !== value) {
              row.isDifferent = true
            }
          })
        }
      }

      return data
    },

    filteredCharacteristics() {
      if (this.type == 'all') {
        return this.productCharacteristics
      }

      let characteristics = {}

      for (const [key, row] of Object.entries(this.productCharacteristics)) {
        if (row.isDifferent) {
          characteristics[key] = row
        }
      }

      return characteristics
    },
  },
}
</script>

<style lang='scss' src='./compare.scss'></style>