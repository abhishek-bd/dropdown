import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: any;
  rows: any = [];

  incomingData = [
    {
      text: 'Baby Care',
      value: 'babyCare',
      selected: false,
      children: [
        { text: 'Baby Skin', value: 'babySkin', selected: false },
        { text: 'Baby Hygiene', value: 'babyHygiene', selected: false },
        { text: 'Baby Ciaper', value: 'babyDiaper', selected: false }
      ]
    },
    {
      text: 'Baby Gear',
      value: 'babyGear',
      selected: false,
      children: [
        { text: 'Baby Sleep', value: 'babyKnife', selected: false },
        { text: 'Baby pull', value: 'babyPull', selected: false },
        { text: 'Baby push', value: 'babyPush', selected: false }
      ]
    },
    {
      text: 'Sleep',
      value: 'babySleep',
      selected: false,
      children: [
        { text: 'Sleep', value: 'sleep', selected: false },
        { text: 'kill', value: 'kill', selected: false }
      ]
    },
    {
      text: 'Other',
      value: 'other',
      selected: false,
      children: []
    }
  ];

  filteredData = [];

  constructor() {
    console.log(this.incomingData);
    this.filteredData = this.incomingData;
  }

  ngOnInit() {}

  ToggleChips(value, i, j) {
    console.log(i, j, value);

    if (j === -1) {
      let status = this.incomingData[i].selected;
      this.incomingData[i].selected = !this.incomingData[i].selected;
      this.incomingData[i].children.map(
        v => (v.selected = this.incomingData[i].selected)
      );
    } else {
      if (!this.incomingData[i].selected === true) {
        this.incomingData[i].selected = !this.incomingData[i].selected;
        this.incomingData[i].children[j].selected = true;
      } else {
        this.incomingData[i].selected = false;
        this.incomingData[i].children[j].selected = false;
        this.incomingData[i].children.map(c => {
          if (c.selected === true) {
            this.incomingData[i].selected = true;
          }
        });
      }
    }

    this.modifyData();
  }

  modifyData() {
    this.rows = [];
    for (let i = 0; i < this.incomingData.length; i++) {
      if (this.incomingData[i].selected == true) {
        this.rows.push({ value: this.incomingData[i].text, i: i, j: -1 });

        for (let j = 0; j < this.incomingData[i].children.length; j++) {
          if (this.incomingData[i].children[j].selected == true) {
            this.rows.push({
              value: this.incomingData[i].children[j].text,
              i: i,
              j: j
            });
          }
        }
      }
    }
  }

  filterString(e) {
    this.filteredData = [];
    let searchString = String(e).toLowerCase();
    for (let i = 0; i < this.incomingData.length; i++) {
      let string = this.incomingData[i].text.toLowerCase();
      if (string.includes(searchString)) {
        this.filteredData.push(this.incomingData[i]);
      }
      if (!string.includes(searchString)) {
        let childFilterData = [];

        for (let j = 0; j < this.incomingData[i].children.length; j++) {
          let childString = this.incomingData[i].children[j].text.toLowerCase();
          if (childString.includes(searchString)) {
            let childIndex = this.incomingData[i].children.findIndex(
              x => x.text.toLowerCase() === childString
            );
            childFilterData.push(this.incomingData[i].children[childIndex]);
          }
        }
        if (childFilterData.length > 0) {
          this.filteredData.push({
            text: this.incomingData[i].text,
            value: this.incomingData[i].value,
            selected: this.incomingData[i].selected,
            children: childFilterData
          });
        }
      }
    }
  }
}
