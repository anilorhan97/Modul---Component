import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceholdersRoutingModule } from './placeholders-routing.module';
import { PlaceholdersHomeComponent } from './placeholders-home/placeholders-home.component';
import { PlaceholdersComponent } from './placeholders/placeholders.component'; 
import { SharedModule } from '../shared/shared.module';
import { SegmentComponent } from './segment/segment.component';
 //ÜST TARAF
@NgModule({
  declarations: [
    PlaceholdersHomeComponent,
    PlaceholdersComponent,
    SegmentComponent
  ],
  imports: [
    CommonModule,
    PlaceholdersRoutingModule,
    SharedModule
  ],
  exports: [ //exports eklenir. Yukarıdaki importlu hazır PlaceholdersHomeComponent eklenir export içine..
    //PlaceholdersHomeComponent //placeholdershomecomponent BU ŞEKİLDE DIŞARIYA AÇILIR.
  ]
})
export class PlaceholdersModule { }
