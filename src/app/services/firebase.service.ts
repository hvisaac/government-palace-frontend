import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  public uploadPercent: Observable<number>

  constructor(
    private storage: AngularFireStorage
  ) { }

  async uploadImage(path: string, data: string, name: string) {
    try {

      return await new Promise(resolve => {

        const filepath = `${path}/${name}`
        const ref = this.storage.ref(filepath)
        const task = ref.put(data)
        this.uploadPercent = task.percentageChanges();

        task.snapshotChanges().pipe(
          finalize(() => {
            ref.getDownloadURL().subscribe(res => {
              const downloadURL = res
              resolve(downloadURL)
            })
          }
          )).subscribe();

      })

    } catch (error) {
      console.log(error)
    }
  }
}
