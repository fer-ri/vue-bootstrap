import NotFound from '../components/errors/404.vue'
import Home from '../components/Home.vue'
import About from '../components/About.vue'

module.exports = {
  '/': {
    component: Home
  },
  '/about': {
    component: About
  },
  '*': {
    component: NotFound
  }
}
