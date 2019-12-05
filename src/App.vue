<template>
  <div id="app">
    <div class="max-w-sm mx-auto m-5 pt-5 pl-5 pr-2 pb-2 bg-white rounded-lg shadow-xl">
        <img class="max-w-full"
             src="./assets/marvel.png" alt="Marvel Comics">
    </div>
    <transition name="slide" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>
