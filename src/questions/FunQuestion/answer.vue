<template lang="">
  <div class="text-left">
    <n-card>
      <n-divider title-placement="left"> Answer </n-divider>
      <p>
        <b>1) Law of inertia</b>: Newton's first law, also called the "law of
        inertia", states that an object at rest remains at rest, and an object
        that is moving will continue to move straight and with constant
        velocity, if and only if there is no net force acting on that object.
      </p>
      <p>
        Formula:
        <Equation
          formula="$$ \vec{F}_{\textrm{sum}} = 0 \, \Leftrightarrow \, \frac{\textrm{d} \vec{v}}{\textrm{d}t} = 0 \, .$$"
        ></Equation>
      </p>
      <p>
        <b>2) Relation between acceleration and force</b>: Newton's second law
        describes a simple relationship between the acceleration of an object
        with mass m, and the net force Fnet acting on that object.
      </p>
      <p>
        Formula:
        <Equation
          formula="$$ \vec{F} = m \vec{a} = \frac{\textrm{d}\vec{p}}{\textrm{d}t} \, .$$"
        ></Equation>
      </p>
      <p>
        <b>3) Action-Reaction law</b>: The third law means that all forces are
        interactions between different bodies, or different regions within one
        body, and thus that there is no such thing as a force that is not
        accompanied by an equal and opposite force.
      </p>
      <p>
        Formula:
        <Equation
          formula="$$ \vec{F}_{\textrm{A}} = -\vec{F}_{\textrm{B}} \, .$$"
        ></Equation>
      </p>
      <n-divider title-placement="left"> Sources </n-divider>
      <a href="https://en.wikipedia.org/wiki/Newton%27s_laws_of_motion"
        >Wikipedia</a
      >
    </n-card>
  </div>
</template>

<script>
import { NCard, NDivider } from "naive-ui"
import Equation from "vue-mathjax-next"
import meta from "./meta.json"

export default {
  components: {
    NCard,
    Equation,
    NDivider,
  },
  data() {
    return {
      title: meta.title,
    }
  },
}
</script>

<style lang=""></style>
