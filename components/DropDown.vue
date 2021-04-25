<template>
  <div :class="[$style.dropDownWrapper, { [$style.dropDownWrapperOpen]: isDropDownOpen}]">
    <transition :enter-active-class="$style.dropDownEnterActive"
                :leave-active-class="$style.dropDownLeaveActive">
      <div v-show="isDropDownOpen" :class="[$style.dropDown, dropDownClass]">
        <slot v-bind:closeDropDown="closeDropDown"></slot>
      </div>
    </transition>
    <button @click="toggleDropDown()"  v-click-outside="closeDropDown" :class="[$style.dropDownTrigger, { [$style.dropDownTriggerActive]: isDropDownOpen }, buttonClass]">
      <slot name="button"></slot>
      <Icon v-if="!isDropDownOpen" :icon="ChevronDown" size="s" :class="$style.chevron"></Icon>
      <Icon v-else :icon="ChevronUp" size="s" :class="$style.chevron"></Icon>
    </button>
  </div>
</template>

<script>
import { clickOutside } from '@/directives/clickOutside';
import ChevronDown from '@/assets/images/icons/chevron-down-solid.svg?raw';
import ChevronUp from '@/assets/images/icons/chevron-down-solid.svg?raw';
import Icon from '@/components/Icon';

export default {
  components: { Icon },
  data() {
    return {
      isDropDownOpen: false,
      ChevronDown,
      ChevronUp
    }
  },
  directives: {
    clickOutside
  },
  props: {
    dropDownClass: {
      type: String
    },
    buttonClass: {
      type: String
    }
  },
  methods: {
    toggleDropDown() {
      this.isDropDownOpen = !this.isDropDownOpen;
    },
    closeDropDown() {
      this.isDropDownOpen = false;
    }
  }
}
</script>

<style lang="scss" module>
@import '@/assets/css/variables.scss';
@import '@/assets/css/mixins.scss';

.dropDownWrapper {
  position: relative;
}

.dropDownWrapperOpen {
  z-index: 1;
}

.dropDown {
  background: white;
  position: absolute;
  margin-top: $clickable-item-size;
  padding-top: $space-m;
  padding-bottom: $space-m;
  border: 1px solid $color-brand-primary;;
  box-shadow: 4px 4px 0 0 rgba($color-brand-primary, 0.5);
}

.dropDownEnterActive {
  animation: bounce-in 0.2s ease-in-out;
}
.dropDownLeaveActive {
  animation: bounce-in 0.2s ease-in-out reverse;
}

@keyframes bounce-in {
  0% {
    padding-top: 0;
    padding-bottom: 0;
  }
  100% {
    padding-top: $space-m;
    padding-bottom: $space-m;
  }
}

.dropDownTrigger {
  border: 1px solid transparent;
  background: white;
  padding: (($clickable-item-size - $line-height-base * $font-size-base) / 2) $space-m;
  font-weight: bold;
  position: relative;
  outline: none !important;
  border-radius: 3px 3px 0 0;
  display: flex;
  align-items: center;

  &:hover,
  &:focus,
  &:active {
    color: $color-brand-primary;
  }

  .dropDownEnterActive + &,
  .dropDownLeaveActive + &,
  &.dropDownTriggerActive {
    border: 1px solid $color-brand-primary;
    border-bottom: 1px solid white;
  }

  .chevron {
    margin-left: 0.5em;
  }
}
</style>
