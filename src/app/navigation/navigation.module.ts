import { environment } from './../../environments/environment';
import { NavigationComponent } from './navigation.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavigationRoutingModule } from './navigation-routing.module';
import { HeaderComponent } from './components-navigation/header/header.component';
import { LeftMenuComponent } from './components-navigation/left-menu/left-menu.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficosComponent } from './graficos/graficos.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';
import { FormsModule }   from '@angular/forms';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { SocketService } from './socket.service';

const config: SocketIoConfig = { url: environment.SOCKET_ENDPOINT, options: {} };

@NgModule({
  declarations: [
    LeftMenuComponent,
    HeaderComponent,
    NavigationComponent,
    DashboardComponent,
    GraficosComponent
  ],
  imports: [
    CommonModule,
    NavigationRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SocketIoModule.forRoot(config),
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  exports: [
    NavigationComponent
  ],
  providers: [
    SocketService
  ]
})
export class NavigationModule { }
