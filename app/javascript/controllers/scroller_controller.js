import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="scroller"
export default class extends Controller {
  connect() {
  }

  scroll() {
    window.scrollBy(0, window.innerHeight)
  }
}
