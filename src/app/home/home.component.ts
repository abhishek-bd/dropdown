import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  data: any;
  rows: any = [];

  incomingData = [
    {
      text: "Baby Care",
      value: "babyCare",
      selected: false,
      children: [
        { text: "Baby Skin", value: "babySkin", selected: false },
        { text: "Baby Hygeine", value: "babyHygiene", selected: false },
        { text: "Baby Oral Care", value: "babyOralCare", selected: false }
      ]
    },
    {
      text: "Baby Gear",
      value: "babyGear",
      selected: false,
      children: [
        { text: "Gears", value: "gears", selected: false },
        { text: "Feeding", value: "feeding", selected: false },
        { text: "Baby Sleep", value: "babySleep", selected: false }
      ]
    },
    {
      text: "Women's Lifestyle",
      value: "womensLifestyle",
      selected: false,
      children: [
        { text: "Women Hygiene", value: "womenHygiene", selected: false },
        {
          text: "Women Skin & Beauty",
          value: "womenSkinBeauty",
          selected: false
        },
        {
          text: "Women Health Issues",
          value: "womenHealthIssues",
          selected: false
        },
        { text: "Women Nutrition", value: "womenNutrition", selected: false },
        { text: "Women Hair", value: "womenHair", selected: false },
        { text: "Women Fashion", value: "womenFashion", selected: false },
        { text: "Women Fitness", value: "womenFitness", selected: false }
      ]
    },
    {
      text: "Nutrition",
      value: "nutrition",
      selected: false,
      children: [
        { text: "Infant Nutrition", value: "infantNutrition", selected: false },
        {
          text: "Toddler nutrition",
          value: "toddlerNutrition",
          selected: false
        }
      ]
    },
    {
      text: "Diapering",
      value: "daipering",
      selected: false,
      children: [
        { text: "Diapers", value: "diapers", selected: false },
        {
          text: "Wipes",
          value: "wipes",
          selected: false
        }
      ]
    },
    {
      text: "Feeding",
      value: "feeding",
      selected: false,
      children: [
        { text: "Infant Non Solid Nutrition", value: "infantNonSolidNutrition", selected: false },
        {
          text: "Breastfeeding",
          value: "breastfeeding",
          selected: false
        },
        {
          text: "DHA",
          value: "dha",
          selected: false
        }
      ]
    },
    {
      text: "Pregnancy",
      value: "pregnancy",
      selected: false,
      children: [
        {
          text: "Pregnancy",
          value: "regnancy",
          selected: false
        }
      ]
    },
    {
      text: "Development",
      value: "development",
      selected: false,
      children: [
        { text: "Toys", value: "toys", selected: false },
        {
          text: "Books",
          value: "books",
          selected: false
        },
        {
          text: "Training",
          value: "training",
          selected: false
        }
      ]
    },
    {
      text: "Sleep",
      value: "sleep",
      selected: false,
      children: [
        {
          text: "Baby Sleep",
          value: "babySleep",
          selected: false
        }
      ]
    },
    {
      text: "Immunity",
      value: "immunity",
      selected: false,
      children: [
        {
          text: "Immunity",
          value: "immunity",
          selected: false
        },
        {
          text: "Cold & Cough",
          value: "coldCough",
          selected: false
        }
      ]
    },
    {
      text: "Digestion",
      value: "digestion",
      selected: false,
      children: [
        {
          text: "Digestion",
          value: "digestion",
          selected: false
        }
      ]
    },
    {
      text: "Others",
      value: "others",
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
