<template>
  <header class="mn-container flex-center">
    <div class="container flex-between">
      <div class="align-center">
        <eleIcon
          :img-url="require('~/assets/images/Logo.png')"
          img-class="ic-logo"
        />
        <eleNav />
      </div>
      <menuUnlogin />
    </div>
  </header>
</template>