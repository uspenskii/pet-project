<template>
  <div class="map">
    <GMap
      ref="gMap"
      language="ru"
      :center="{ lat: Number(lat1), lng: Number(lng1) }"
      :options="{ fullscreenControl: false }"
      :zoom="17"
    >
      <GMapMarker
        v-for="location in locations"
        :key="location.id"
        :position="{ lat: location.lat, lng: location.lng }"
        :options="{
          icon: location === currentLocation ? pins.selected : pins.notSelected,
        }"
        @click="currentLocation = location"
      >
        <GMapInfoWindow :options="{ maxWidth: 300 }">
          <code
            ><div
              style="
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
              "
            >
              <h2 style="font-weight: 600; font-size: 20px; color: #0a2f87;font-family: Golos;">
                СанГарант
              </h2>
              <p style="font-size: 15px; font-family: Golos; font-weight: 600;">{{content}}</p>
            </div>
          </code>
        </GMapInfoWindow>
      </GMapMarker>
      <GMapCircle />
    </GMap>
  </div>
</template>



<script>
export default {
  props: ['data', 'content'],
  data() {
    return {
      lat1: this.data.coords[0],
      lng1: this.data.coords[1],
      currentLocation: {
        lat: this.data.coords[0],
        lng: this.data.coords[1],
      },
      locations: [
        {
          lat: this.data.coords[0],
          lng: this.data.coords[1],
        },
      ],
      pins: {
        selected: 'img/i-location.svg',
        notSelected: 'img/i-location.svg',
      },
    }
  },
}
</script>

<style lang='scss' src='./map.scss'></style>