import { NgModule } from "@angular/core";

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreacrumbsComponent } from './breacrumbs/breacrumbs.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@NgModule({

    imports: [
        RouterModule,
        CommonModule
    ],

    declarations: [
        HeaderComponent,
        SidebarComponent,
        BreacrumbsComponent,
        NoPageFoundComponent

    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        BreacrumbsComponent,
        NoPageFoundComponent
    ]

})

export class SharedModule{ }