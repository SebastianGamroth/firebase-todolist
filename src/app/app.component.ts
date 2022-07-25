import { Component } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // variable todos$ = $ damit wir wissen, dass die Variable sich immer updated
  // variable todos$ bekommt eine variable Observable (die sich imer updated)
  // any = json
  todos$: Observable<any>;
  // importieren Firestore und weisen der Variable firestore: zu
  constructor(firestore: Firestore) {
    // die collection aus firesotre die todos
    const coll = collection(firestore, 'todos');
    // mit collectionData hollen wir die Daten aus coll
    this.todos$ = collectionData(coll);

    /**
     * Die Funktion wird jedes aufgerufen wenn sich die Daten in der Datenbank ändern 
     */
    this.todos$.subscribe((newTodos) => {
      console.log(newTodos);
    });

  }
}
