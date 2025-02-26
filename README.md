# ember-weekday-selector

The ember-weekday-selector is an Ember.js addon designed to provide a user interface component for selecting weekdays. It is compatible with Ember.js v6.1 or above, Ember CLI v6.1 or above, and Node.js v22 or above.

Key Features:
- Weekday Selection: Allows users to select one or more weekdays.
- Customizable: Can be customized to fit the design and functionality requirements of your application.
- Easy Installation: Can be easily installed using the Ember CLI.

## Installation

```
ember install ember-weekday-selector
```

## Usage

```
<WeekdaySelector />
```

### Options

| Option      | Type     | Default                                                                                                              | Info                                                                                          |
| ----------- | -------- | -------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| startOfWeek | String   | 'monday'                                                                                                             | First SVG element of the week Monday                                                          |
| week        | Object   | { sunday: false, monday: false, tuesday: false, wednesday: false, thursday: false, friday: false,  saturday: false } |
| readOnly    | Boolean  | false                                                                                                                | Whether the componect can be edited or not                                                    |
| onClick     | Function | NOOP                                                                                                                 | Called when the user selects a weekday. This is still invoked when `readOnly` is set to true. |
| svgWidth    | Number   | 26                                                                                                                   | Width of the SVG element                                                                      |
| svgHeight   | Number   | 26                                                                                                                   | Height of the SVG element                                                                     |
| viewBox     | String   | '0 0 26 26'                                                                                                          | ViewBox of the SVG element                                                                    |


## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).
