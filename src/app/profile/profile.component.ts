import { Component, OnInit } from "@angular/core";
import { ProfileService } from "../services/profile-service.service";
import { UserProfile } from "../user-profile";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  profile: UserProfile;

  constructor(private service: ProfileService) {}

  ngOnInit() {
    this.profile = this.service.getUserProfile();
  }
}
