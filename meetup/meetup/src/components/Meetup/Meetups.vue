<template>
    <v-container>
        <v-row v-for="meetup in meetups" :key="meetup.id" class="mb-2">
            <v-col cols='12' sm="10" md="8" offset-md="2" offset-sm="1">
                <v-card class="primary">
                    <div class="d-flex">
                        <v-avatar
                            class="ma-3"
                            size="125"
                            tile
                        >
                            <v-img :src="meetup.imageUrl"></v-img>
                        </v-avatar>
                        <v-container>
                            <v-row>
                                <div>
                                    <v-card-title class="headline white--text" v-text="meetup.title"></v-card-title>

                                    <v-card-subtitle v-text="meetup.date"></v-card-subtitle>
                                </div>
                            </v-row>
                            <v-row>
                                <v-card-actions>
                                <v-btn text :to="'/meetups/'+meetup.id">View Meetup</v-btn>
                                </v-card-actions>
                            </v-row>
                         </v-container>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
  computed: {
    meetups () {
      return this.$store.getters.loadedMeetups
    }
  }
}
</script>
