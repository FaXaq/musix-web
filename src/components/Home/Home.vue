<template>
  <div id="home">
    <div class="jumbotron">
      <h1>Musix</h1>
    </div>
    <div id="presentation" class="flex column no-overflow">
      <h1 class="t-center">What is Musix ?</h1>
      <div class="flex row align-middle grow p-base-2">
        <div class="w-50 h-20 no-overflow">
          <carousel id="home-carousel" :loop="true" :autoplay="true" :autoplayTimeout="10000" :perPage="1" :navigationEnabled="true" :paginationEnabled="true">
            <slide>
              <div>
                <img src="/static/bg.jpg" class="i-block">
              </div>
            </slide><slide>
              <div>
                <img src="/static/bg.jpg" class="i-block">
              </div>
            </slide><slide>
              <div>
                <img src="/static/bg.jpg" class="i-block">
              </div>
            </slide><slide>
              <div>x
                <img src="/static/bg.jpg" class="i-block">
              </div>
            </slide><slide>
              <div>
                <img src="/static/bg.jpg" class="i-block">
              </div>
            </slide>
          </carousel>
        </div>
        <div class="f-grow f-basis w-50 p-base-1 p-left-base-3">
          <p class="text-presentation t-left">Musix is a website that teaches you Music Theory & Harmonization through games, lessons, blog posts and help you learn on an instrument.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./main.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="./main.scss" scoped></style>
