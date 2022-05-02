module.exports = {
  components: {
    categories: [
      {
        name: 'SAP Components',
        include: [
          'src/components/SAPButton/SAPButton.js',
          'src/components/SAPCalendar/SAPCalendar.js',
          'src/components/SAPCheckBox/SAPCheckBox.js',
          'src/components/SAPSegmentedButton/SAPSegmentedButton.js',
        ]
      },
      
    ],
    wrapper: 'src/components/UXPinWrapper/UXPinWrapper.js',
    webpackConfig: 'uxpin.webpack.config.js',
  },
  name: 'SAP-ui5-webcomponents-react'
};