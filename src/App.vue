<template>
  <div id="app" class="container">
    <header>
      <router-view></router-view>
    </header>
  </div>
</template>

<style lang="stylus">
@-webkit-keyframes cheesy-colors-bg {
    0%, to {
        background-color: #1b9db4
    }

    20% {
        background-color: #f06060
    }

    40% {
        background-color: #2ac56c
    }

    60% {
        background-color: #feaf10
    }

    80% {
        background-color: #2ecc71
    }
}

@keyframes cheesy-colors-bg {
    0%, to {
        background-color: #1b9db4
    }

    20% {
        background-color: #f06060
    }

    40% {
        background-color: #2ac56c
    }

    60% {
        background-color: #feaf10
    }

    80% {
        background-color: #2ecc71
    }
}

body, html {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    background-color: #1b9db4;
    color: #111
}

body {
    font-family: "Brandon Grotesque", sans-serif;
    font-size: 40px;
    overflow: hidden;
    -webkit-animation: cheesy-colors-bg 200s linear infinite;
    animation: cheesy-colors-bg 200s linear infinite;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    background-attachment: fixed;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")
}

.container, header {
    text-align: center;
    height: 100%;
    width: 100%
}

header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-line-pack: start;
    align-content: flex-start;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-font-kerning: normal;
    font-kerning: normal;
    margin: 0 auto;
    color: #111;
    overflow: hidden
}

::-moz-selection {
    background-color: rgba(0, 0, 0, .2)
}

::selection {
    background-color: rgba(0, 0, 0, .2)
}

:focus {
    outline: 0
}
</style>
