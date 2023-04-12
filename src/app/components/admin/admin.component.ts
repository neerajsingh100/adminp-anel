import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  selectedMenu: any;
  sidePanelEnabled: boolean = false;
  password: boolean;
  confirmpassword: boolean;
  oldpassword: boolean;
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  showoldPassword() {
    this.oldpassword = !this.oldpassword;
  }
  showPassword() {
    this.password = !this.password;
  }
  showConfirmPassword() {
    this.confirmpassword = !this.confirmpassword;
  }

  navigateTo(menu: any) {
    this.selectedMenu = menu
    this.router.navigate([menu.route]);
  }
  enableSidePanel() {
    this.sidePanelEnabled = !this.sidePanelEnabled;
  }

  goTo(route: string) {
    if (route) {
      this.router.navigate([route]);
    }
  }

  representativesCollapsed: boolean = true;

  toggleSubMenu(subMenu: "DataManagement") {
    if (this.sidePanelEnabled) {
      return;
    }
    switch (subMenu) {
      case "DataManagement":
        this.representativesCollapsed = !this.representativesCollapsed
        break;
    }
  }

  logout() {

  }
}
