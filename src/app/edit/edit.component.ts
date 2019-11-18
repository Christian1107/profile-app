import { Component, OnInit } from "@angular/core";
import { ProfileService } from "../services/profile-service.service";
import { Router } from "@angular/router";
import { UserProfile } from "../user-profile";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  profile: UserProfile = {
    name: "",
    contact: "",
    bio: ""
  };

  constructor(private service: ProfileService, private router: Router) {}

  onSubmit(): void {
    this.service.setUserProfile(this.profile);
    this.router.navigate(["profile"]);
  }

  ngOnInit() {}
}
