export default {
  editor: {
    label: {
      en: "Dropdown",
    },
    icon: "navigator-dropdown",
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
