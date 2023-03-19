<script setup lang="ts"></script>

<template>
  <div class="wrapper">
    <FormKit
      input-class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      type="text"
      label="Email address"
      label-class="block mb-2 text-sm font-medium text-white"
      help="Enter a full email address"
      validation="required|email"
      validation-visibility="live"
    />
    <!-- {{ same same, but different }} -->
    <div class="mb-6">
      <label for="default-input" class="block mb-2 text-sm font-medium text-white"
        >Default input</label
      >
      <input
        type="text"
        id="default-input"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
    </div>
  </div>
</template>
<style>
.wrapper {
  width: 203px;
}
[data-invalid] .formkit-inner {
  border-color: theme('colors.tangerine');
  box-shadow: 0 0 0 1px theme('colors.tangerine');
  border-radius: 8px;
}

[data-complete] .formkit-inner {
  border-color: green;
  box-shadow: 0 0 0 1px green;
}
[data-complete] .formkit-inner::after {
  content: '✅';
  display: block;
  padding: 0.5em;
}
</style>
