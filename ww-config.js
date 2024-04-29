export default {
  editor: {
    label: {
      en: "Iconify",
    },
    icon: "star",
    navigator: {
      groups: ["Trigger", "Dropdown"],
    },
  },
  actions: [{ label: 'Close dropdown', action: 'closeDropdown' },
  { label: 'Open dropdown', action: 'openDropdown' }],
  properties: {
    name: {
      type: 'Text',
      label: 'Name',
      settings: true,
      bindable: true,
      defaultValue: "mdi-light:home"
    },
  },
};
