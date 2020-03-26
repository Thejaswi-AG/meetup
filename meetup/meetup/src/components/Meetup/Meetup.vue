<template>
    <v-container>
        <v-row>
            <v-col cols=12>
                <div class="d-flex flex-column justify-start">
                <v-card>
                    <v-card-title>
                        <h6>{{meetup.title}}</h6>
                    </v-card-title>
                    <v-img :src="meetup.imageurl"></v-img>
                    <v-card-text>
                        <div>
                            <p>{{meetup.date}} - where it takes place</p>
                        </div>
                        <div>New York City (NYC), often called the City of New York or simply New York (NY), is the most populous city in the United States. With an estimated 2018 population of 8,398,748 distributed over about 302.6 square miles (784 km2), New York is also the most densely populated major city in the United States</div>
                    </v-card-text>
                    <v-card-action>
                        <v-btn block class="primary">Register</v-btn>
                    </v-card-action>
                </v-card>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
  props: ['id'],
  computed: {
    meetup () {
      console.log(this.id)
      return this.$store.getters.loadedMeetup(this.id)
    }
  }
}
</script>
