import { Routes } from '@angular/router';
import { RulesEngineComponent } from './pages/rules-engine/rules-engine.component';
import { SidebarComponent } from './components/navigation/navigation.component';
import { NonExistingPageComponent } from './pages/non-existing-page/non-existing-page.component';

export const routes: Routes = [ 
    
    {'path': 'rules-engine', component:RulesEngineComponent},  
    {'path': 'TestComponent', component:SidebarComponent},
    {'path': '**', component:NonExistingPageComponent}
   
];
