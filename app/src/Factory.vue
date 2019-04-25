
<script>

  export default {
    Feed: function (size) {
      return {
        posts: new Array(),
      }
    },
    FeedPost: function (data) {
      return {
        header: "",
        body: data.body,
        author: "Avsändare",
        created: Date.now(),
        bubbleId: data.bubbleId,
        buttons: data.buttons ? data.buttons : [],
        images: data.images ? data.images : [],
        notification: data.notification ? data.notification : false
      }
    },
    Bubbles: function () {
      return new Array();
    },
    Bubble: function (data) {
      return {
        score: 1,
        temp: 1,
        color: data.color,
        colorBorder: data.colorBorder,
        name: data.name,
        image: data.image,
        posts: data.posts ? data.posts : [],
        risks: data.risks ? data.risks : [],
        mandatory: data.mandatory ? data.mandatory : false,
        following: data.following ? data.following : false,
        postCount: 0,
        calc: function () {
          return (this.score + this.following*10) * this.temp*10;
        }
      }
    }
  }

</script>
