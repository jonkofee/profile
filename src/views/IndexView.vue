<template>
  <div itemscope="" itemtype="https://schema.org/Person">
    <div hidden>
      <meta itemprop="familyName" content="Прищенко"/>
      <meta itemprop="name" content="Сергей"/>
      <meta itemprop="additionalName" content="Витальевич"/>
      <meta itemprop="birthDate" content="1995-15-04"/>
      <meta itemprop="gender" content="male"/>
      <meta itemprop="nationality" content="Украина"/>
      <span itemprop="birthPlace">Амвросиевка, Украина</span>
      <meta itemprop="email" content="jonkofee@icloud.com"/>
    </div>
    <h1 itemprop="alternateName">{{ login }}</h1>
    <div class="logo_wrapper">
      <div class="logo">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 98 104">
        <defs>
          <path id="sub_logo" d="M0.3,16.7 c01,0,0.4,7.7,24,31.3 l-7.8,17 l20.9-6.1 l11.1,29.2 l12.1-30.7 h27.9 c0,0-11.2-14.7-36.9-20.9 C25.9,30.4,11.9,26.7,0.3,16.7" />

          <path id="header" d="M55,0 H6 c7,7,14,15,46,25" />
        </defs>

        <g class="header" transform="translate(-3, 2)">
          <use xlink:href="#header" />
          <use xlink:href="#header" transform="scale(-1, 1)" x="-104" />
        </g>

        <g class="head">
          <use xlink:href="#sub_logo" />
          <use xlink:href="#sub_logo" transform="scale(-1, 1)" x="-97.2" />
        </g>

        <path class="clothing" d="M6.1,102 v-13.5 l26.4,-18 l15.5,30 l15.5,-30 l26.4,18 v13.5"></path>
      </svg>
      </div>
    </div>
    <p class="job-title" itemprop="jobTitle" ref="jobTitle">
      {{ resumeHeadline }}
    </p>
    <ul class="social-list" ref="socialList">
      <li class="social-list__item">
        <a itemprop="sameAs" href="https://github.com/jonkofee/" target="_blank" rel="me noopener noreferrer" class="social-list__link">
          <svg class="social-list__icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"
            clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414">
            <path d="M8 0a8 8 0 0 0-8 8 8 8 0 0 0 5.47 7.59c.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.09-.202-.36-1.015.07-2.117 0 0 .67-.215 2.2.82a7.67 7.67 0 0 1 2-.27 7.67 7.67 0 0 1 2 .27c1.52-1.035 2.19-.82 2.19-.82.43 1.102.16 1.915.08 2.117a3.1 3.1 0 0 1 .82 2.147c0 3.073-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38A7.972 7.972 0 0 0 16 8a8 8 0 0 0-8-8" /></svg>
        </a>
      </li>
      <li class="social-list__item">
        <a itemprop="sameAs" href="tg://resolve?domain=jonkofee" target="_blank" rel="me noopener noreferrer" class="social-list__link">
          <svg class="social-list__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M 20.572266 3.0117188 C 20.239891 2.9764687 19.878625 3.028375 19.515625 3.171875 C 19.065625 3.348875 12.014406 6.3150313 5.4414062 9.0820312 L 3.2695312 9.9960938 C 2.4285313 10.337094 2.0039062 10.891672 2.0039062 11.638672 C 2.0039062 12.161672 2.22525 12.871063 3.28125 13.289062 L 6.9472656 14.757812 C 7.2642656 15.708813 8.0005469 17.916906 8.1855469 18.503906 C 8.2955469 18.851906 8.5733906 19.728594 9.2753906 19.933594 C 9.4193906 19.982594 9.5696563 20.007813 9.7226562 20.007812 C 10.165656 20.007812 10.484625 19.801641 10.640625 19.681641 L 12.970703 17.710938 L 15.800781 20.328125 C 15.909781 20.439125 16.486719 21 17.261719 21 C 18.228719 21 18.962234 20.195016 19.115234 19.416016 C 19.198234 18.989016 21.927734 5.2870625 21.927734 5.2890625 C 22.172734 4.1900625 21.732219 3.6199531 21.449219 3.3769531 C 21.206719 3.1694531 20.904641 3.0469688 20.572266 3.0117188 z M 19.910156 5.171875 C 19.533156 7.061875 17.478016 17.378234 17.166016 18.865234 L 13.029297 15.039062 L 10.222656 17.416016 L 11 14.375 C 11 14.375 16.362547 8.9468594 16.685547 8.6308594 C 16.945547 8.3778594 17 8.2891719 17 8.2011719 C 17 8.0841719 16.939781 8 16.800781 8 C 16.675781 8 16.506016 8.1197812 16.416016 8.1757812 C 15.272669 8.8885973 10.404094 11.662239 8.0078125 13.025391 L 4.53125 11.636719 L 6.21875 10.927734 C 10.51775 9.1177344 18.174156 5.893875 19.910156 5.171875 z"></path>
          </svg>
        </a>
      </li>
      <li class="social-list__item">
        <a itemprop="sameAs" href="https://instagram.com/jonkofee/" target="_blank" rel="me noopener noreferrer" class="social-list__link">
          <svg class="social-list__icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"
            clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414">
            <path d="M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42a3.908 3.908 0 0 0-1.417.923c-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.72 1.417.923.51.198 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.852-.04 1.433-.174 1.942-.372a3.908 3.908 0 0 0 1.417-.923c.445-.444.72-.89.923-1.417.198-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942a3.908 3.908 0 0 0-.923-1.417A3.886 3.886 0 0 0 13.24.42c-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.05 3.233c-.04.78-.17 1.203-.28 1.485-.15.374-.32.64-.6.92-.28.28-.55.453-.92.598-.28.11-.71.24-1.49.276-.85.038-1.1.047-3.24.047s-2.39-.01-3.24-.05c-.78-.04-1.21-.17-1.49-.28a2.49 2.49 0 0 1-.92-.6c-.28-.28-.46-.55-.6-.92-.11-.28-.24-.71-.28-1.49-.03-.84-.04-1.1-.04-3.23s.01-2.39.04-3.24c.04-.78.17-1.21.28-1.49.14-.38.32-.64.6-.92.28-.28.54-.46.92-.6.28-.11.7-.24 1.48-.28.85-.03 1.1-.04 3.24-.04zm0 2.452a4.108 4.108 0 1 0 0 8.215 4.108 4.108 0 0 0 0-8.215zm0 6.775a2.667 2.667 0 1 1 0-5.334 2.667 2.667 0 0 1 0 5.334zm5.23-6.937a.96.96 0 1 1-1.92 0 .96.96 0 0 1 1.92 0z" /></svg>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import { TimelineLite } from 'gsap'
  import CSSRulePlugin from 'gsap/src/uncompressed/plugins/CSSRulePlugin'

  export default {
    title: "Home",
    data() {
      return {}
    },
    asyncData ({ store }) {
      return store.dispatch('FETCH_DATA')
    },
    computed: {
      login() {
        return this.$store.state.data.login
      },
      resumeHeadline() {
        return this.$store.state.data.resume_headline
      }
    },
    mounted() {
      this.animate()
    },
    methods: {
      animate() { 
        new TimelineLite()
          .fromTo(this.$refs.jobTitle, .5, {
            transform: "translateY(50%)",
            opacity: 0
          }, 
          {
            delay: 1.2,
            ease: Power2.easeOut,
            transform: "translateY(0)",
            opacity: 1
          })
          .fromTo(this.$refs.socialList, .5, {
            transform: "translateY(50%)",
            opacity: 0
          },
          {
            ease: Power2.easeOut,
            transform: "translateY(0)",
            opacity: 1
          })
      }
    }
  }
</script>

<style lang="stylus">
  h1
    letter-spacing: 10px
    font-size: 1.5em
    text-transform: uppercase
    margin: 0 0 10px
    font-weight: 700
    text-shadow: 3px 3px 0 rgba(0,0,0,.4)

  @-webkit-keyframes widen {
    0% {
      -webkit-transform: scaleX(0);
      transform: scaleX(0)
    }

    to {
      -webkit-transform: scaleX(.72);
      transform: scaleX(.72)
    }
  }

  @keyframes widen {
    0% {
      -webkit-transform: scaleX(0);
      transform: scaleX(0)
    }

    to {
      -webkit-transform: scaleX(.72);
      transform: scaleX(.72)
    }
  }

  .job-title {
    font-size: 28px;
    letter-spacing: 1px;
    font-weight: 700;
    color: rgba(0, 0, 0, .8);
    margin-bottom: 20px
  }

  .social-list {
    list-style: none;
    margin: 0;
    -webkit-box-ordinal-group: 1;
    -ms-flex-order: 0;
    order: 0;
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    -ms-flex-item-align: auto;
    align-self: auto;
    padding: 30px
  }

  .social-list__item,
  .social-list__link {
    display: inline-block
  }

  .social-list__link {
    background-color: transparent;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    line-height: 44px;
    vertical-align: middle;
    -webkit-transition: background-color .25s ease;
    transition: background-color .25s ease;
    will-change: transform;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0)
    margin: 5px
  }

  .social-list__link:focus, .social-list__link:hover {
    background-color: rgba(0, 0, 0, .4);
    outline: 0;
    text-decoration: none
}

  .social-list__icon {
    width: 25px
  }

  .social-list:hover .social-list__link:focus:after,
  .social-list:hover .social-list__link:focus:before {
    display: none
  }

  .social-list:hover .social-list__link:hover:after,
  .social-list:hover .social-list__link:hover:before {
    display: inherit
  }

.logo
    height: 50px
    width: 50px
    margin: 0 auto 35px
    -webkit-user-select: none
    -moz-user-select: none
    -ms-user-select: none
    user-select: none
    position: relative

.logo:after,
  .logo:before {
    content: "";
    width: 7em;
    border-top: 5px solid #111;
    height: 5px;
    position: absolute;
    top: 20px;
    -webkit-animation: widen 2s cubic-bezier(.22, .61, .36, 1) .5s both;
    animation: widen 2s cubic-bezier(.22, .61, .36, 1) .5s both
  }
  .logo:before {
    -webkit-transform-origin: 100% 0;
    transform-origin: 100% 0;
    right: 60px
  }
  .logo:after {
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    left: 60px
  }

</style>