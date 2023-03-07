import { makeAutoObservable } from "mobx"

class PreLoader {
  loading = false

  constructor() {
      makeAutoObservable(this)
  }

  setLoading() {
    this.loading = true
  }
  
  loaded() {
    this.loading = false
  }
}

export default new PreLoader();