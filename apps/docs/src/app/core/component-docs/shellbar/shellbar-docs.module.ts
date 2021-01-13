import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from '../../../documentation/core-helpers/api/api.component';
import { SharedDocumentationPageModule } from '../../../documentation/shared-documentation-page.module';
import { API_FILES } from '../../api-files';
import { ShellbarDocsHeaderComponent } from './shellbar-docs-header/shellbar-docs-header.component';
import { ShellbarDocsComponent } from './shellbar-docs.component';
import { ShellbarBasicExampleComponent } from './examples/shellbar-basic-example.component';
import { ShellbarSideNavExampleComponent } from './examples/shellbar-side-nav/shellbar-side-nav-example.component';
import { ShellbarCollapsibleExampleComponent } from './examples/shellbar-collapsible-example.component';
import { ShellbarUserActionsMenuExample } from './examples/shellbar-user-actions-menu-example.component';
import { ShellbarUserActionsMenuHeaderFooterExample } from './examples/shellbar-user-actions-menu-header-footer-example.component';
import { ShellbarUserActionsMenuSubmenuExample } from './examples/shellbar-user-actions-menu-submenu-example.component';
import { ShellbarUserActionsMenuCompactExample } from './examples/shellbar-user-actions-menu-compact-example.component';
import {
    AvatarModule,
    ComboboxModule,
    DialogModule,
    LayoutPanelModule,
    ProductSwitchModule,
    SegmentedButtonModule,
    ShellbarModule,
    SideNavigationModule,
    TileModule,
    ListModule
} from '@fundamental-ngx/core';

const routes: Routes = [
    {
        path: '',
        component: ShellbarDocsHeaderComponent,
        children: [
            { path: '', component: ShellbarDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.shellbar } }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedDocumentationPageModule,
        ShellbarModule,
        ComboboxModule,
        SideNavigationModule,
        ProductSwitchModule,
        TileModule,
        LayoutPanelModule,
        SegmentedButtonModule,
        DialogModule,
        RouterModule,
        AvatarModule,
        ListModule
    ],
    exports: [RouterModule],
    declarations: [
        ShellbarDocsComponent,
        ShellbarDocsHeaderComponent,
        ShellbarBasicExampleComponent,
        ShellbarSideNavExampleComponent,
        ShellbarCollapsibleExampleComponent,
        ShellbarUserActionsMenuExample,
        ShellbarUserActionsMenuHeaderFooterExample,
        ShellbarUserActionsMenuSubmenuExample,
        ShellbarUserActionsMenuCompactExample
    ]
})
export class ShellbarDocsModule {}
