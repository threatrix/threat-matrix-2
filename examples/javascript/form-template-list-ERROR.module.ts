import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';

import { ExpansionPanelModule, LoadingSpinnerModule } from '@curve/curve-ui';
import { FormTemplateListComponent } from '@aberlour/forms/components/form-template-list/form-template-list.component';

@NgModule({
  declarations: [
    FormTemplateListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule.forChild(),
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    ExpansionPanelModule,
    LoadingSpinnerModule,
  ],
  exports: [
    FormTemplateListComponent,
  ]
})

export class FormTemplateListModule { }
