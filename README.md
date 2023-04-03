
# Default component 

### Autocomplete

![image](https://user-images.githubusercontent.com/83542403/229031944-30e70405-21c2-4190-b2ca-3174fa3d8253.png)

```
<form class="example-form">
  <mat-form-field class="example-full-width" appearance="fill">
    <mat-label>Number</mat-label>
    <input type="text"
           placeholder="Pick one"
           aria-label="Number"
           matInput
           [formControl]="myControl"
           [matAutocomplete]="auto">
    <mat-autocomplete #auto="matAutocomplete">
      <mat-option *ngFor="let option of filteredOptions | async" [value]="option">
        {{option}}
      </mat-option>
    </mat-autocomplete>
  </mat-form-field>
</form>
```
**Reference** https://material.angular.io/components/autocomplete/overview#adding-a-custom-filter


### Basic Card
<img width="568" alt="Card" src="https://user-images.githubusercontent.com/117628227/229096113-f7a62837-33a3-4cc3-b963-b358dc1f7f48.png">

```
<mat-card>
  <mat-card-content>Simple card</mat-card-content>
</mat-card>

```
**Reference** https://material.angular.io/components/card/overview#card-overview


### Basic Buttons
<img width="557" alt="Button" src="https://user-images.githubusercontent.com/117628227/229097525-ce62418e-aa7c-435f-9f77-01ebaffd9b4d.png">

```
<section>
  <div class="example-label">Basic</div>
  <div class="example-button-row">
    <button mat-button>Basic</button>
    <button mat-button color="primary">Primary</button>
    <button mat-button color="accent">Accent</button>
    <button mat-button color="warn">Warn</button>
    <button mat-button disabled>Disabled</button>
    <a mat-button href="https://www.google.com/" target="_blank">Link</a>
  </div>
</section>
<mat-divider></mat-divider>
<section>
  <div class="example-label">Raised</div>
  <div class="example-button-row">
    <button mat-raised-button>Basic</button>
    <button mat-raised-button color="primary">Primary</button>
    <button mat-raised-button color="accent">Accent</button>
    <button mat-raised-button color="warn">Warn</button>
    <button mat-raised-button disabled>Disabled</button>
    <a mat-raised-button href="https://www.google.com/" target="_blank">Link</a>
  </div>
</section>
<mat-divider></mat-divider>
<section>
  <div class="example-label">Stroked</div>
  <div class="example-button-row">
    <button mat-stroked-button>Basic</button>
    <button mat-stroked-button color="primary">Primary</button>
    <button mat-stroked-button color="accent">Accent</button>
    <button mat-stroked-button color="warn">Warn</button>
    <button mat-stroked-button disabled>Disabled</button>
    <a mat-stroked-button href="https://www.google.com/" target="_blank">Link</a>
  </div>
</section>
<mat-divider></mat-divider>
<section>
  <div class="example-label">Flat</div>
  <div class="example-button-row">
    <button mat-flat-button>Basic</button>
    <button mat-flat-button color="primary">Primary</button>
    <button mat-flat-button color="accent">Accent</button>
    <button mat-flat-button color="warn">Warn</button>
    <button mat-flat-button disabled>Disabled</button>
    <a mat-flat-button href="https://www.google.com/" target="_blank">Link</a>
  </div>
</section>
<mat-divider></mat-divider>
<section>
  <div class="example-label">Icon</div>
  <div class="example-button-row">
    <div class="example-flex-container">
      <button mat-icon-button aria-label="Example icon button with a vertical three dot icon">
        <mat-icon>more_vert</mat-icon>
      </button>
      <button mat-icon-button color="primary" aria-label="Example icon button with a home icon">
        <mat-icon>home</mat-icon>
      </button>
      <button mat-icon-button color="accent" aria-label="Example icon button with a menu icon">
        <mat-icon>menu</mat-icon>
      </button>
      <button mat-icon-button color="warn" aria-label="Example icon button with a heart icon">
        <mat-icon>favorite</mat-icon>
      </button>
      <button mat-icon-button disabled aria-label="Example icon button with a open in new tab icon">
        <mat-icon>open_in_new</mat-icon>
      </button>
    </div>
  </div>
</section>
<mat-divider></mat-divider>
<section>
  <div class="example-label">FAB</div>
  <div class="example-button-row">
    <div class="example-flex-container">
      <div class="example-button-container">
        <button mat-fab color="primary" aria-label="Example icon button with a delete icon">
          <mat-icon>delete</mat-icon>
        </button>
      </div>
      <div class="example-button-container">
        <button mat-fab color="accent" aria-label="Example icon button with a bookmark icon">
          <mat-icon>bookmark</mat-icon>
        </button>
      </div>
      <div class="example-button-container">
        <button mat-fab color="warn" aria-label="Example icon button with a home icon">
          <mat-icon>home</mat-icon>
        </button>
      </div>
      <div class="example-button-container">
        <button mat-fab disabled aria-label="Example icon button with a heart icon">
          <mat-icon>favorite</mat-icon>
        </button>
      </div>
    </div>
  </div>
</section>
<mat-divider></mat-divider>
<section>
  <div class="example-label">Mini FAB</div>
  <div class="example-button-row">
    <div class="example-flex-container">
      <div class="example-button-container">
        <button mat-mini-fab color="primary" aria-label="Example icon button with a menu icon">
          <mat-icon>menu</mat-icon>
        </button>
      </div>
      <div class="example-button-container">
        <button mat-mini-fab color="accent" aria-label="Example icon button with a plus one icon">
          <mat-icon>plus_one</mat-icon>
        </button>
      </div>
      <div class="example-button-container">
        <button mat-mini-fab color="warn" aria-label="Example icon button with a filter list icon">
          <mat-icon>filter_list</mat-icon>
        </button>
      </div>
      <div class="example-button-container">
        <button mat-mini-fab disabled aria-label="Example icon button with a home icon">
          <mat-icon>home</mat-icon>
        </button>
      </div>
    </div>
  </div>
</section>

```
**Reference** https://material.angular.io/components/button/overview#button-overview


### Button Toggle 
<img width="566" alt="Button toggle" src="https://user-images.githubusercontent.com/117628227/229098061-25a16e88-4893-436f-80d4-33e1d72b77a6.png">

```
<p>
  Default appearance:
  <mat-button-toggle-group name="fontStyle" aria-label="Font Style">
    <mat-button-toggle value="bold">Bold</mat-button-toggle>
    <mat-button-toggle value="italic">Italic</mat-button-toggle>
    <mat-button-toggle value="underline">Underline</mat-button-toggle>
  </mat-button-toggle-group>
</p>

<p>
  Legacy appearance:
  <mat-button-toggle-group appearance="legacy" name="fontStyle" aria-label="Font Style">
    <mat-button-toggle value="bold">Bold</mat-button-toggle>
    <mat-button-toggle value="italic">Italic</mat-button-toggle>
    <mat-button-toggle value="underline">Underline</mat-button-toggle>
  </mat-button-toggle-group>
</p>
```
**Reference** https://material.angular.io/components/button-toggle/overview#button-toggle-appearance


### Check box
<img width="562" alt="Checkbox" src="https://user-images.githubusercontent.com/117628227/229098405-90b568aa-4024-44a5-a4cc-7a123a0a7ebd.png">

```
<section class="example-section">
  <mat-checkbox class="example-margin">Check me!</mat-checkbox>
  <mat-checkbox class="example-margin" [disabled]="true">Disabled</mat-checkbox>
</section>

<section class="example-section">
  <span class="example-list-section">
    <mat-checkbox class="example-margin"
                  [checked]="allComplete"
                  [color]="task.color"
                  [indeterminate]="someComplete()"
                  (change)="setAll($event.checked)">
      {{task.name}}
    </mat-checkbox>
  </span>
  <span class="example-list-section">
    <ul>
      <li *ngFor="let subtask of task.subtasks">
        <mat-checkbox [(ngModel)]="subtask.completed"
                      [color]="subtask.color"
                      (ngModelChange)="updateAllComplete()">
          {{subtask.name}}
        </mat-checkbox>
      </li>
    </ul>
  </span>
</section>
```
**Reference** https://material.angular.io/components/checkbox/overview#checkbox-overview


### Basic Chip
<img width="559" alt="Chip" src="https://user-images.githubusercontent.com/117628227/229098869-ab9c7158-57fe-4c00-b316-6895b43462e3.png">

```
<mat-chip-listbox aria-label="Fish selection">
  <mat-chip-option>One fish</mat-chip-option>
  <mat-chip-option>Two fish</mat-chip-option>
  <mat-chip-option color="accent" selected>Accent fish</mat-chip-option>
  <mat-chip-option color="warn">Warn fish</mat-chip-option>
</mat-chip-listbox>
```
**Reference** https://material.angular.io/components/chips/overview#chips-overview


### Chip With Input
<img width="561" alt="image" src="https://user-images.githubusercontent.com/117628227/229099130-c4e96b72-9efa-4d77-8521-2e8d6565d932.png">

```
<mat-form-field class="example-chip-list" appearance="fill">
  <mat-label>Favorite Fruits</mat-label>
  <mat-chip-grid #chipGrid aria-label="Enter fruits">
    <mat-chip-row *ngFor="let fruit of fruits"
                  (removed)="remove(fruit)"
                  [editable]="true"
                  (edited)="edit(fruit, $event)"
                  [aria-description]="'press enter to edit ' + fruit.name">
      {{fruit.name}}
      <button matChipRemove [attr.aria-label]="'remove ' + fruit.name">
        <mat-icon>cancel</mat-icon>
      </button>
    </mat-chip-row>
    <input placeholder="New fruit..."
           [matChipInputFor]="chipGrid"
           [matChipInputSeparatorKeyCodes]="separatorKeysCodes"
           [matChipInputAddOnBlur]="addOnBlur"
           (matChipInputTokenEnd)="add($event)"/>
  </mat-chip-grid>
</mat-form-field>
```
**Reference** https://material.angular.io/components/chips/overview#chips-input


### Chip Input With Autocomplete
<img width="583" alt="Chip with autocomplete" src="https://user-images.githubusercontent.com/117628227/229099508-8d140e9b-19d5-408d-91b6-67b65f22a126.png">

```
<form>
  <mat-form-field class="example-chip-list" appearance="fill">
    <mat-label>Favorite Fruits</mat-label>
    <mat-chip-grid #chipGrid aria-label="Fruit selection">
      <mat-chip-row *ngFor="let fruit of fruits" (removed)="remove(fruit)">
        {{fruit}}
        <button matChipRemove [attr.aria-label]="'remove ' + fruit">
          <mat-icon>cancel</mat-icon>
        </button>
      </mat-chip-row>
    </mat-chip-grid>
    <input placeholder="New Fruit..." #fruitInput [formControl]="fruitCtrl"
      [matChipInputFor]="chipGrid" [matAutocomplete]="auto"
      [matChipInputSeparatorKeyCodes]="separatorKeysCodes"
      (matChipInputTokenEnd)="add($event)"/>
    <mat-autocomplete #auto="matAutocomplete" (optionSelected)="selected($event)">
      <mat-option *ngFor="let fruit of filteredFruits | async" [value]="fruit">
        {{fruit}}
      </mat-option>
    </mat-autocomplete>
  </mat-form-field>
</form>
```
**Reference** https://material.angular.io/components/chips/overview#chips-autocomplete

### Stacked chips
<img width="562" alt="Stacked Chip" src="https://user-images.githubusercontent.com/117628227/229488603-b97ca78a-a413-4479-9418-cd4d5d8e6ded.png">

```
<mat-chip-listbox class="mat-mdc-chip-set-stacked" aria-label="Color selection">
  <mat-chip-option *ngFor="let chip of availableColors" selected [color]="chip.color">
    {{chip.name}}
  </mat-chip-option>
</mat-chip-listbox>
```
**Reference**  https://material.angular.io/components/chips/overview#chips-stacked


### Basic Datepicker
<img width="566" alt="Basic Datepicker" src="https://user-images.githubusercontent.com/117628227/229101288-0d8fee21-e161-4a8d-8ff6-3fa165feb823.png">

```
<mat-form-field class="example-full-width" appearance="fill">
  <mat-label>Choose a date</mat-label>
  <input matInput [matDatepicker]="picker">
  <mat-hint>MM/DD/YYYY</mat-hint>
  <mat-datepicker-toggle matIconSuffix [for]="picker">
    <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>
  </mat-datepicker-toggle>
  <mat-datepicker #picker></mat-datepicker>
</mat-form-field>
```

**Reference** https://material.angular.io/components/datepicker/overview#datepicker-overview


### Date Range
<img width="567" alt="Date range" src="https://user-images.githubusercontent.com/117628227/229101608-233f1fa3-85c7-41aa-8b6f-9cfdb42a34f4.png">

```
<mat-form-field appearance="fill">
  <mat-label>Enter a date range</mat-label>
  <mat-date-range-input [formGroup]="range" [rangePicker]="picker">
    <input matStartDate formControlName="start" placeholder="Start date">
    <input matEndDate formControlName="end" placeholder="End date">
  </mat-date-range-input>
  <mat-hint>MM/DD/YYYY – MM/DD/YYYY</mat-hint>
  <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
  <mat-date-range-picker #picker></mat-date-range-picker>

  <mat-error *ngIf="range.controls.start.hasError('matStartDateInvalid')">Invalid start date</mat-error>
  <mat-error *ngIf="range.controls.end.hasError('matEndDateInvalid')">Invalid end date</mat-error>
</mat-form-field>

<p>Selected range: {{range.value | json}}</p>
```
**Reference** https://material.angular.io/components/datepicker/overview#date-range-picker-forms


### Basic Dialog Box
<img width="554" alt="Basic Dialog box" src="https://user-images.githubusercontent.com/117628227/229102013-75edd5da-a0dd-4fa0-abcd-9febc60a431e.png">

```
<ol>
  <li>
    <mat-form-field appearance="fill">
      <mat-label>What's your name?</mat-label>
      <input matInput [(ngModel)]="name">
    </mat-form-field>
  </li>
  <li>
    <button mat-raised-button (click)="openDialog()">Pick one</button>
  </li>
  <li *ngIf="animal">
    You chose: <i>{{animal}}</i>
  </li>
</ol>
```
**Reference** https://material.angular.io/components/dialog/overview#dialog-overview


### Dialog box with extra condition
<img width="401" alt="Dialog with condition" src="https://user-images.githubusercontent.com/117628227/229485883-e4922050-d7d5-4afb-9008-4f07c2978af3.png">

```
{
  "title": "Remove contact",
  "message": "Are you sure you want to remove this contact permanently? <span class=\"font-medium\">This action cannot be undone!</span>",
  "icon": {
    "show": true,
    "name": "heroicons_outline:exclamation",
    "color": "primary"
  },
  "actions": {
    "confirm": {
      "show": true,
      "label": "Remove",
      "color": "warn"
    },
    "cancel": {
      "show": true,
      "label": "Cancel"
    }
  },
  "dismissible": true
}
```

### Basic Divider
<img width="568" alt="image" src="https://user-images.githubusercontent.com/117628227/229104579-c0809bca-2413-45f5-a2a5-3f4c2e1d5539.png">

```
<mat-list>
  <mat-list-item>Item 1</mat-list-item>
  <mat-divider></mat-divider>
  <mat-list-item>Item 2</mat-list-item>
  <mat-divider></mat-divider>
  <mat-list-item>Item 3</mat-list-item>
</mat-list>
```
**Reference** https://material.angular.io/components/divider/overview#divider-overview


### Basic Expansion Panel
<img width="563" alt="Basic expansion panel" src="https://user-images.githubusercontent.com/117628227/229105040-e7887b20-0743-4397-a4d8-5f3990157687.png">

```
<mat-accordion>
  <mat-expansion-panel hideToggle>
    <mat-expansion-panel-header>
      <mat-panel-title>
        This is the expansion title
      </mat-panel-title>
      <mat-panel-description>
        This is a summary of the content
      </mat-panel-description>
    </mat-expansion-panel-header>
    <p>This is the primary content of the panel.</p>
  </mat-expansion-panel>
  <mat-expansion-panel (opened)="panelOpenState = true"
                       (closed)="panelOpenState = false">
    <mat-expansion-panel-header>
      <mat-panel-title>
        Self aware panel
      </mat-panel-title>
      <mat-panel-description>
        Currently I am {{panelOpenState ? 'open' : 'closed'}}
      </mat-panel-description>
    </mat-expansion-panel-header>
    <p>I'm visible because I am open</p>
  </mat-expansion-panel>
</mat-accordion>
```
**Reference** https://material.angular.io/components/expansion/overview#expansion-overview


### Basic Form (Textbox)
<img width="564" alt="Basic Textbox" src="https://user-images.githubusercontent.com/117628227/229107582-52e0bc34-72e2-4736-8f33-1431bc7ed01d.png">

```
<mat-form-field appearance="fill">
  <mat-label>Input</mat-label>
  <input matInput>
</mat-form-field>
```
**Reference** https://material.angular.io/components/form-field/overview#form-field-overview

### Dropdown
<img width="231" alt="Basic dropdown" src="https://user-images.githubusercontent.com/117628227/229107926-0ec6a559-e0de-4fd1-aaf0-e3280dcd42b0.png">

```
<mat-form-field appearance="fill">
  <mat-label>Select</mat-label>
  <mat-select>
    <mat-option value="one">First option</mat-option>
    <mat-option value="two">Second option</mat-option>
  </mat-select>
</mat-form-field>
```
**Reference** https://material.angular.io/components/form-field/overview#form-field-overview


### Textarea
<img width="189" alt="Textarea" src="https://user-images.githubusercontent.com/117628227/229108194-7c7cc141-5847-4945-8a97-40a6b638729d.png">

```
<mat-form-field appearance="fill">
  <mat-label>Textarea</mat-label>
  <textarea matInput></textarea>
</mat-form-field>
```
### Text area from Fuse
```
<textarea matinput="" class="mat-mdc-input-element ng-tns-c32-693 mat-mdc-form-field-textarea-control mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored" placeholder="Textarea" id="mat-input-149" aria-invalid="false" aria-required="false" style="height: 15px;"></textarea>
```
**Reference** https://material.angular.io/components/form-field/overview#form-field-overview


### Grid List
<img width="568" alt="Grid list" src="https://user-images.githubusercontent.com/117628227/229109874-cccc1475-034c-436b-b586-315712049e20.png">

```
<mat-grid-list cols="2" rowHeight="2:1">
  <mat-grid-tile>1</mat-grid-tile>
  <mat-grid-tile>2</mat-grid-tile>
  <mat-grid-tile>3</mat-grid-tile>
  <mat-grid-tile>4</mat-grid-tile>
</mat-grid-list>
```
**Reference** https://material.angular.io/components/grid-list/overview#grid-list-overview


### List With Selection
<img width="566" alt="List with selection" src="https://user-images.githubusercontent.com/117628227/229110326-dda2de6d-cb2d-44b5-b96d-05131400990b.png">

```
<mat-selection-list #shoes>
  <mat-list-option>
  Boots
  </mat-list-option>
  <mat-list-option>
  Shoes
  </mat-list-option>
</mat-selection-list>

```
**Reference** https://material.angular.io/components/list/overview#list-selection


### Pagination
<img width="563" alt="Pagination" src="https://user-images.githubusercontent.com/117628227/229110771-6b5cef07-67c9-439c-a84e-b98f7c892022.png">

```
<mat-paginator [length]="100"
              [pageSize]="10"
              [pageSizeOptions]="[5, 10, 25, 100]"
              aria-label="Select page">
</mat-paginator>
```
**Reference** https://material.angular.io/components/paginator/overview#paginator-overview


### Progress bar
<img width="561" alt="Progress bar" src="https://user-images.githubusercontent.com/117628227/229111055-37a51a5e-a1e1-452e-97e8-ef58b82095c4.png">

```
<mat-progress-bar mode="indeterminate"></mat-progress-bar>
```
**Reference** https://material.angular.io/components/progress-bar/overview#progress-bar-indeterminate


### Horizontal stepper
<img width="596" alt="Horizontal stepper" src="https://user-images.githubusercontent.com/117628227/229482551-f3afd000-7299-467a-b5ae-22569392565a.png">

**Reference** https://angular-material.fusetheme.com/ui/forms/wizards

### Spinner
<img width="568" alt="Spinner" src="https://user-images.githubusercontent.com/117628227/229112477-aec7b9ea-8251-49cc-b59a-766f5d874d72.png">

```
<mat-spinner></mat-spinner>
```
**Reference** https://material.angular.io/components/progress-spinner/overview#progress-spinner-overview


### Radios
<img width="564" alt="Radio button" src="https://user-images.githubusercontent.com/117628227/229113060-d4c0b5b0-5b45-4a1e-a99e-31e667b12650.png">

```
<mat-radio-group aria-label="Select an option">
  <mat-radio-button value="1">Option 1</mat-radio-button>
  <mat-radio-button value="2">Option 2</mat-radio-button>
</mat-radio-group>
```
**Reference** https://material.angular.io/components/radio/overview#radio-overview


### Slider
<img width="563" alt="Slider" src="https://user-images.githubusercontent.com/117628227/229477417-d245177b-4f71-43be-9039-1f4d1c2df630.png">

```
<mat-slide-toggle>Slide me!</mat-slide-toggle>
```
**Reference** https://material.angular.io/components/slide-toggle/overview#slide-toggle-overview


### Alerts
<img width="430" alt="AlertsFuse" src="https://user-images.githubusercontent.com/117628227/229114107-cdfc3972-7236-48fb-8a7e-b9637baeeed5.png">

```
<fuse-alert [type]="'primary'">
    <span fuseAlertTitle>Primary alert</span>
    Thank you for joining our newsletter
</fuse-alert>

<fuse-alert [type]="'accent'">
    <span fuseAlertTitle>Accent alert</span>
    Your changes has been saved
</fuse-alert>

<fuse-alert [type]="'warn'">
    <span fuseAlertTitle>Warn alert</span>
    Fill all required fields to proceed next step
</fuse-alert>
```
**Reference** https://angular-material.fusetheme.com/ui/fuse-components/components/alert


### Stepper
<img width="568" alt="Stepper" src="https://user-images.githubusercontent.com/117628227/229114668-25dfbe60-e740-4c51-96b0-5636cd271130.png">

```
<mat-stepper [linear]="isLinear" #stepper>
  <mat-step [stepControl]="firstFormGroup">
    <form [formGroup]="firstFormGroup">
      <ng-template matStepLabel>Fill out your name</ng-template>
      <mat-form-field appearance="fill">
        <mat-label>Name</mat-label>
        <input matInput placeholder="Last name, First name" formControlName="firstCtrl" required>
      </mat-form-field>
      <div>
        <button mat-button matStepperNext>Next</button>
      </div>
    </form>
  </mat-step>
  <mat-step [stepControl]="secondFormGroup" label="Fill out your address">
    <form [formGroup]="secondFormGroup">
      <mat-form-field appearance="fill">
        <mat-label>Address</mat-label>
        <input matInput formControlName="secondCtrl" placeholder="Ex. 1 Main St, New York, NY"
               required>
      </mat-form-field>
      <div>
        <button mat-button matStepperPrevious>Back</button>
        <button mat-button matStepperNext>Next</button>
      </div>
    </form>
  </mat-step>
  <mat-step>
    <ng-template matStepLabel>Done</ng-template>
    <p>You are now done.</p>
    <div>
      <button mat-button matStepperPrevious>Back</button>
      <button mat-button (click)="stepper.reset()">Reset</button>
    </div>
  </mat-step>
</mat-stepper>
```
**Reference** https://material.angular.io/components/stepper/overview#stepper-overview


### Table
<img width="559" alt="Table" src="https://user-images.githubusercontent.com/117628227/229115062-30a7a49d-8935-4d1d-ac27-a5d73f32efa5.png">

```
<div class="mat-elevation-z8">
  <table mat-table [dataSource]="dataSource">

    <!-- Position Column -->
    <ng-container matColumnDef="position">
      <th mat-header-cell *matHeaderCellDef> No. </th>
      <td mat-cell *matCellDef="let element"> {{element.position}} </td>
    </ng-container>

    <!-- Name Column -->
    <ng-container matColumnDef="name">
      <th mat-header-cell *matHeaderCellDef> Name </th>
      <td mat-cell *matCellDef="let element"> {{element.name}} </td>
    </ng-container>

    <!-- Weight Column -->
    <ng-container matColumnDef="weight">
      <th mat-header-cell *matHeaderCellDef> Weight </th>
      <td mat-cell *matCellDef="let element"> {{element.weight}} </td>
    </ng-container>

    <!-- Symbol Column -->
    <ng-container matColumnDef="symbol">
      <th mat-header-cell *matHeaderCellDef> Symbol </th>
      <td mat-cell *matCellDef="let element"> {{element.symbol}} </td>
    </ng-container>

    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row></tr>
  </table>

  <mat-paginator [pageSizeOptions]="[5, 10, 20]">
  </mat-paginator>
</div>
```
**Reference** https://material.angular.io/components/table/overview#table-pagination


### Table with sorting
<img width="566" alt="Table with sort" src="https://user-images.githubusercontent.com/117628227/229473110-ab4ad865-80eb-4f67-a252-d9acc36d2c50.png">

```
<table mat-table [dataSource]="dataSource" matSort (matSortChange)="announceSortChange($event)"
       class="mat-elevation-z8">

  <!-- Position Column -->
  <ng-container matColumnDef="position">
    <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription="Sort by number">
      No.
    </th>
    <td mat-cell *matCellDef="let element"> {{element.position}} </td>
  </ng-container>

  <!-- Name Column -->
  <ng-container matColumnDef="name">
    <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription="Sort by name">
      Name
    </th>
    <td mat-cell *matCellDef="let element"> {{element.name}} </td>
  </ng-container>

  <!-- Weight Column -->
  <ng-container matColumnDef="weight">
    <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription="Sort by weight">
      Weight
    </th>
    <td mat-cell *matCellDef="let element"> {{element.weight}} </td>
  </ng-container>

  <!-- Symbol Column -->
  <ng-container matColumnDef="symbol">
    <th mat-header-cell *matHeaderCellDef mat-sort-header sortActionDescription="Sort by symbol">
      Symbol
    </th>
    <td mat-cell *matCellDef="let element"> {{element.symbol}} </td>
  </ng-container>

  <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
  <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
</table>
```
**Reference** https://material.angular.io/components/table/overview#table-sorting


### Basic Tabs
<img width="567" alt="Tabs" src="https://user-images.githubusercontent.com/117628227/229474581-b4cd3419-2d9b-4a59-9a49-2fa71cbdfd71.png">

```
<mat-tab-group>
  <mat-tab label="First"> Content 1 </mat-tab>
  <mat-tab label="Second"> Content 2 </mat-tab>
  <mat-tab label="Third"> Content 3 </mat-tab>
</mat-tab-group>
```
**Reference** https://material.angular.io/components/tabs/overview#tab-group-basic


### Tooltip
<img width="571" alt="ToolTip" src="https://user-images.githubusercontent.com/117628227/229475425-7ff17aba-6607-4a73-b50f-d543aef4aecf.png">

```
<button mat-raised-button
        matTooltip="Info about the action"
        aria-label="Button that displays a tooltip when focused or hovered over">
  Action
</button>
```
**Reference** https://material.angular.io/components/tooltip/overview#tooltip-overview


### Tooltip with a custom position
<img width="567" alt="Custom tooltip" src="https://user-images.githubusercontent.com/117628227/229480553-37d51365-a832-4896-a7f8-893053542b6c.png">

```
<mat-form-field class="example-user-input" appearance="fill">
  <mat-label>Tooltip position</mat-label>
  <mat-select [formControl]="position">
    <mat-option *ngFor="let positionOption of positionOptions" [value]="positionOption">
      {{positionOption}}
    </mat-option>
  </mat-select>
</mat-form-field>

<button mat-raised-button
        matTooltip="Info about the action"
        [matTooltipPosition]="position.value!"
        aria-label="Button that displays a tooltip in various positions">
  Action
</button>
```
**Reference** https://material.angular.io/components/tooltip/overview#tooltip-position


### Tooltip with a show and hide delay
<img width="566" alt="Tool tip with delay" src="https://user-images.githubusercontent.com/117628227/229480819-3aedef81-9c4d-4cd9-8c82-a2ad93ddc19f.png">

```
<mat-form-field class="example-user-input" appearance="fill">
  <mat-label>Show delay</mat-label>
  <input matInput type="number" [formControl]="showDelay"
         aria-label="Adds a delay between hovering over the button and displaying the tooltip">
  <mat-hint>milliseconds</mat-hint>
</mat-form-field>

<mat-form-field class="example-user-input" appearance="fill">
  <mat-label>Hide delay</mat-label>
  <input matInput type="number" [formControl]="hideDelay"
         aria-label="Adds a delay between hovering away from the button and hiding the tooltip">
  <mat-hint>milliseconds</mat-hint>
</mat-form-field>

<button mat-raised-button matTooltip="Info about the action"
        [matTooltipShowDelay]="showDelay.value"
        [matTooltipHideDelay]="hideDelay.value"
        aria-label="Button that displays a tooltip with a customized delay in showing and hiding">
  Action
</button>
```
**Reference** https://material.angular.io/components/tooltip/overview#tooltip-delay


### Tree with flat nodes
<img width="559" alt="Tree with flats" src="https://user-images.githubusercontent.com/117628227/229482942-5c4c80a5-18a3-4525-a188-6099f8ebda7c.png">

```
<mat-tree [dataSource]="dataSource" [treeControl]="treeControl">
  <!-- This is the tree node template for leaf nodes -->
  <mat-tree-node *matTreeNodeDef="let node" matTreeNodePadding>
    <!-- use a disabled button to provide padding for tree leaf -->
    <button mat-icon-button disabled></button>
    {{node.name}}
  </mat-tree-node>
  <!-- This is the tree node template for expandable nodes -->
  <mat-tree-node *matTreeNodeDef="let node;when: hasChild" matTreeNodePadding>
    <button mat-icon-button matTreeNodeToggle
            [attr.aria-label]="'Toggle ' + node.name">
      <mat-icon class="mat-icon-rtl-mirror">
        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}
      </mat-icon>
    </button>
    {{node.name}}
  </mat-tree-node>
</mat-tree>
```
**Reference** https://material.angular.io/components/tree/overview#tree-flat-overview


###
<img width="567" alt="Tree with nested nodes" src="https://user-images.githubusercontent.com/117628227/229483166-1e3b6488-e592-4510-b37e-082dd299e8d0.png">

```
<mat-tree [dataSource]="dataSource" [treeControl]="treeControl" class="example-tree">
  <!-- This is the tree node template for leaf nodes -->
  <!-- There is inline padding applied to this node using styles.
    This padding value depends on the mat-icon-button width. -->
  <mat-tree-node *matTreeNodeDef="let node" matTreeNodeToggle>
      {{node.name}}
  </mat-tree-node>
  <!-- This is the tree node template for expandable nodes -->
  <mat-nested-tree-node *matTreeNodeDef="let node; when: hasChild">
      <div class="mat-tree-node">
        <button mat-icon-button matTreeNodeToggle
                [attr.aria-label]="'Toggle ' + node.name">
          <mat-icon class="mat-icon-rtl-mirror">
            {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}
          </mat-icon>
        </button>
        {{node.name}}
      </div>
      <!-- There is inline padding applied to this div using styles.
          This padding value depends on the mat-icon-button width.  -->
      <div [class.example-tree-invisible]="!treeControl.isExpanded(node)"
          role="group">
        <ng-container matTreeNodeOutlet></ng-container>
    </div>
  </mat-nested-tree-node>
</mat-tree>
```
**Reference** https://material.angular.io/components/tree/overview#tree-nested-overview
