<template>
  <nav>
    <a href="#"></a>
    <a href="#" class="active"></a>
    <a href="#"></a>
    <a href="#"></a>
  </nav>
</template>

<style lang="stylus" scoped>
nav {
  display: flex;
  flex-direction: column;
  background-color: #5b3256;
  border-radius: 40px;
  padding: 18px 10px;
  position: fixed;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
}

a {
  display: block;
  background: #f58f84;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 12px solid transparent;
  margin: -7px -18px;
  transition: all .4s cubic-bezier(.3, 0, 0, 1.3);
  transform: scale(.35);
  backface-visibility: hidden;
  will-change: transform;
}

.active {
  background: #c93756;
  transform: scale(1);
  border-color: #5b3256;
}
</style>
