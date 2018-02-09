<template>
  <v-snackbar
      :timeout="timeout"
      :color="currentSnack.context"
      v-model="enabled"

      :multi-line="$vuetify.breakpoint.xsOnly">
    {{currentSnack.text}}
    <v-btn flat class="yellow--text" @click.native="btnAction"><strong>{{currentSnack.btnText}}</strong></v-btn>
  </v-snackbar>
</template>

<script>
  /**
   * This module wraps the snackbar to queue them if there are multiple message to display at once.
   * the event listened to to display a snackbar is 'pushsnack' and expects an object with the following params:
   * SnackEvent:
   *  @param text the text to display in the snack
   *  @param btnText the text to display in the button
   *  @param context overides the color of the snack
   *  @param btnCallback Option function call back when button is pressed
   */
  export default {
    props: {
      maxTimeout: {
        type: Number,
        default: 15000
      }
    },
    data(){
      return {
        basic: {
          timeout: 6000,
          text: '',
          btnText: 'Ok',
          context: 'info',
          btnCallback: null,
        },
        currentSnack: {
          timeout: 6000,
          text: '',
          btnText: '',
          context: 'info',
          btnCallback: null,
        },
        enabled: false,
        snacks: [],
      }
    },
    computed: {
      timeout(){
        if (this.currentSnack && this.currentSnack.timeout) {
          return this.currentSnack.timeout < this.maxTimeout ? this.currentSnack.timeout : this.maxTimeout;
        }
        return 0;
      },
      numberOfSnacks(){
        return this.snacks.length;
      }
    },
    watch: {
      numberOfSnacks: {
        deep: true,
        handler(snacks, rottenSnacks){
          if (rottenSnacks == 0 && !this.enabled) {
            this.displayASnack ();
          }
        }
      },
      enabled(current, prev){
        if (prev && this.numberOfSnacks > 0) {
          setTimeout (this.displayASnack, 1000);
        }
      }
    },
    methods: {
      pushSnackMessage(snack){
        this.snacks.push (snack);
      },
      displayASnack(){
        let snack = this.snacks.shift ();
        this.resetSnack ();
        for (let prop in snack) {
          if (this.currentSnack.hasOwnProperty (prop)) {
            this.currentSnack[prop] = snack[prop];
          }
        }
        this.enabled = true;
      },
      resetSnack(){
        for (let prop in this.basic) {
          this.currentSnack[prop] = this.basic[prop];
        }
      },
      btnAction(){
        if(typeof this.currentSnack.btnCallback === 'function'){
          this.currentSnack.btnCallback();
        }
        this.enabled=false;
      }
    },
    mounted(){
      Event && Event.listen ('pushsnack', this.pushSnackMessage);
    }
  }
</script>