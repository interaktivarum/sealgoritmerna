<template>
  <div class="FeedScript">

    <div>

      <feed-script-item v-if="showTest(0)">
        <p>
          I sociala medier så påverkas innehållet av hur du själv, dina vänner och andra användare interagerar.
        </p>
        <p>
          När du klickar på, gillar, kommenterar eller delar olika inlägg så lägger verktyget det på minnet.
        </p>
        <p>
          När du har använt verktyget tillräckligt länge har verktygets algoritmer skapat sig en förståelse av vilken typ av inlägg du gillar, och kommer att ge dig mer av den typen av inlägg.
        </p>
        <p>
          Detta kallas för filterbubblor.
        </p>
      </feed-script-item>

      <feed-script-item v-if="showTest(1)">
        <p>
          Från alla första början, exempelvis när du precis har registrerat en ny profil, vet algoritmerna inte vad du gillar.
        </p>
        <p>
          Här nedanför ser du att de runda bubblorna är lika stora. Det innebär att det är <u>lika stor chans</u> att nya inlägg i flödet till höger tillhör vilken som helst av dessa kategorier.
        </p>
        <p>
          <button @click.self="loadPosts(100,true); allowNext()">Ladda 100 nya inlägg</button> till ditt flöde och lägg märke till hur grafen längst ned, som visar fördelningen av flödets inlägg, ändras.
        </p>
      </feed-script-item>

      <feed-script-item v-if="showTest(2)">
        <p>
          I grafen nedan ser du att ditt flöde nu består av ungefär lika många inlägg från varje kategori.
        </p>
        <p>
          Ditt flöde innehåller blandad information från flera olika perspektiv. Bra!
        </p>
        <p>
          Du ska nu få <button @click.self="resetFeed(); allowNext()">börja om med ett nytt flöde</button> för att lära algoritmerna vad du gillar för typ av inlägg.
        </p>
      </feed-script-item>

      <feed-script-item v-if="showTest(3)">
        <p>
          Här kommer instruktionerna att fortsätta...
        </p>
      </feed-script-item>

    </div>

    <div>
      <button @click="next" :disabled="!nextAllowed">
        Gå vidare
      </button>
    </div>

  </div>
</template>

<script>

import { store } from '@/store';
import FeedScriptItem from './FeedScriptItem'

export default {
  name: 'FeedScript',
  components: {
    FeedScriptItem
  },
  data () {
    return {
      scriptPosition: 0,
      nextAllowed: true
    }
  },
  props: {
  },
  computed: {
  },
  methods: {
    loadPosts: function (n,scroll) {
      if(scroll){
        store.commit('setScroll',{scroll: true});
      }
      store.commit('finishLoadPosts',{nPosts: n, scroll: true});
    },
    resetFeed: function () {
      store.commit('resetFeed',{});
    },
    showTest: function(i) {
      return i == this.scriptPosition
    },
    next: function () {
      this.scriptPosition++;
      this.nextAllowed = false;
    },
    allowNext: function () {
      this.nextAllowed = true;
    },
    disableButton: function (e) {
      //e.srcElement.setAttribute("disabled", "disabled")
    }
  },
  mounted: function () {
  }
}
</script>

<style scoped>

.FeedScript{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

</style>
