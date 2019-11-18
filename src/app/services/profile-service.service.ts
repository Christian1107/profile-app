import { Injectable } from "@angular/core";
import { UserProfile } from "../user-profile";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class ProfileService {
  profile: UserProfile = {
    name: "Christian",
    contact: "Christianchristian1107@gmail.com",
    bio: "I'm christian"
  };

  constructor(private router: Router) {}

  getUserProfile() {
    return this.profile;
  }

  setUserProfile(newInfo): void {
    this.profile = newInfo;
  }
}
