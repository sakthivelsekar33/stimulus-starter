import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = [ "name" ]
  static classes = [ "supported" ]

  connect() {
    console.log('hello controller connected', this)
  }

  greet() {
    console.log(`hello ${this.name}`)
  }

  get name() {
    return this.nameTarget.value
  }
}
