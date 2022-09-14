import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="list-extension"
export default class extends Controller {
  static targets = ["rating", "description", "poster"]
  connect() {
    console.log("connected")
  }

  expand() {
    this.descriptionTarget.classList.toggle("hidden");
    this.ratingTarget.classList.toggle("hidden");
    this.posterTarget.classList.toggle("img-shrunk");
    this.posterTarget.classList.toggle("img-movie")
  }
}
