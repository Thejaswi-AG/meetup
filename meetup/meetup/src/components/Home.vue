<template>
    <v-container>
        <v-row wrap
        :justify="justify"
        class="mt-2">
            <v-col class="text-xs-center text-sm-right">
                <v-btn large router to="/meetups" class="primary">Explore Meetups</v-btn>
            </v-col>
            <v-col class="text-sm-left text-xs-center">
                <v-btn large router to="/meetups/new" class="primary">Organise Meetups</v-btn>
            </v-col>
        </v-row>
        <v-row class="mt-2">
          <v-carousel style="cursor: pointer;">
             <v-carousel-item
             v-for="(item,i) in meetups"
             :key="i"
             :src="item.imageUrl"
              reverse-transition="fade-transition"
              transition="fade-transition"
              @click="onLoadMeetup(item.id)"
              >
              <div class="title">
                  {{item.title}}
              </div>
              </v-carousel-item>
         </v-carousel> </v-row>
        <v-row wrap
        :justify="justify"
        class="mt-2">
            <p>Join our meetups</p></v-row>
    </v-container>
</template>

<script>
export default {
  data () {
    return {
      justify: 'center',
      meetups: [
        { imageUrl: 'https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260', id: 'sfsvwbnbnhmj', title: 'meetup in nerwyork' },
        { imageUrl: 'https://media.gettyimages.com/photos/eiffel-tower-in-paris-france-picture-id924894324?s=2048x2048', id: 'sdnavohvzvmk', title: 'meetup in Paris' }
      ]
    }
  },
  methods: {
    onLoadMeetup (id) {
      this.$router.push('/meetups/' + id)
    }
  }
}
</script>
