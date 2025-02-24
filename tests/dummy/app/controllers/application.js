import Controller from '@ember/controller';
import { set } from '@ember/object';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  @tracked message = 'Click on a day';

  @tracked myWeek = {
    sunday: false,
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: true,
  };

  @action
  onClick(day) {
    this.message = `You clicked on ${day}`;
    set(this.myWeek, day, !this.myWeek[day]);
  }
}
