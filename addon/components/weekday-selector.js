import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class WeekdaySelector extends Component {
  lop(str, length) {
    let s = str + '';
    if (!s) return '';

    let shortened = s.slice(0, parseInt(length)); // Trim the string to n length
    return shortened.charAt(0).toUpperCase() + shortened.slice(1); // Capitalize
  }

  @tracked days = [];

  initDays() {
    if (this.startOfWeek === 'monday') {
      this.days = [
        { label: 'monday', value: true },
        { label: 'tuesday', value: true },
        { label: 'wednesday', value: true },
        { label: 'thursday', value: true },
        { label: 'friday', value: true },
        { label: 'saturday', value: true },
        { label: 'sunday', value: true },
      ];
    } else {
      this.days = [
        { label: 'sunday', value: true },
        { label: 'monday', value: true },
        { label: 'tuesday', value: true },
        { label: 'wednesday', value: true },
        { label: 'thursday', value: true },
        { label: 'friday', value: true },
        { label: 'saturday', value: true },
      ];
    }
  }

  constructor() {
    super(...arguments);
    // view options
    this.readOnly = this.args.readOnly || false;
    this.maxChars = this.args.maxChars || 3;
    this.startOfWeek = this.args.startOfWeek || 'monday';
    this.initDays();
    // svg options
    this.viewBox = this.args.viewBox || '0 0 40 40';
    this.svgHeight = this.args.svgHeight || 40;
    this.svgWidth = this.args.svgWidth || 40;

    if (this.args.week) {
      let week = this.args.week;
      this.days.map((day) => {
        day.value = week[day.label];
      });
    }
  }

  _toggleDays(day) {
    this.days.map((d) => {
      if (d.label === day.label) {
        d.value = !d.value;
      }
    });
  }

  @action
  onClick(day, event) {
    if (this.readOnly) {
      return;
    }
    let element = event.target;
    let parent = element.parentElement;
    this._toggleDays(day);
    if (day.value) {
      parent.querySelector('circle').classList.add('ws-selected');
      parent.querySelector('circle').classList.remove('ws-unselected');
      parent.querySelector('text').classList.add('ws-selected-text');
      parent.querySelector('text').classList.remove('ws-unselected-text');
    } else {
      parent.querySelector('circle').classList.add('ws-unselected');
      parent.querySelector('circle').classList.remove('ws-selected');
      parent.querySelector('text').classList.add('ws-unselected-text');
      parent.querySelector('text').classList.remove('ws-selected-text');
    }
    if (this.args.onClick) {
      this.args.onClick(day.label);
    } else {
      console.log(this.days);
    }
  }
}
