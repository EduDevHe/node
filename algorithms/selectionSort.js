function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (i !== minIndex) {
      let aux = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = aux;
    }
  }
  return arr;
}

const arr = [5, 0, 3, 8, 1, 23, 4234, 5435];
const order = selectionSort(arr);

/**========================================================================
 **                                Table test
 *
 *  ----------------------
 *  ? FUNCTION selectionSort
 *   * @param arr number[]
 *   * @return number[]
 *  ------------------------
 *   ----------------------------------------------
 *  todo                  Step i == 0
 *
 *  todo external for loop
 *    * i = 0;
 *    * minIndex = i == 0;
 *    todo internal for loop
 *    * j = 1 + i => j == 1;
 *       =======================
 *       !      TEST
 *
 *todo      comparison
 *       * i == 0; minIndex = i == 0; e j = i + 1 = 1 => arr[j] == 0 < arr[minIndex] == 5 => true => minIndex  =  j == 1 ;
 *       ! i<->j
 *       ![5, 0, 3, 8, 1, 23, 4234, 5435]
 *       ========================
 *       ========================
 *       !      TEST
 *
 *todo      comparison
 *       * i == 0; minIndex == 1; e j = 2 => arr[j] == 3 < arr[minIndex] == 0 => false => minIndex;
 *       ! i <-> j
 *       ![5, 0, 3, 8, 1, 23, 4234, 5435]
 *       ========================
 *
 *       ========================
 *       !      TEST
 *
 *todo      comparison
 *       * i == 0; minIndex == 1; e j = 3 => arr[j] == 8 < arr[minIndex] == 0 => false => minIndex;
 *       ! i <----> j
 *       ![5, 0, 3, 8, 1, 23, 4234, 5435]
 *       ========================
 *       !      TEST
 *
 *todo       comparison
 *       * i == 0; minIndex == 1; e j = 4 => arr[j] == 1 < arr[minIndex] == 0 => false => minIndex;
 *       ! i <-------> j
 *       ![5, 0, 3, 8, 1, 23, 4234, 5435]
 *       =======================
 *
 *       !      TEST
 *
 *todo       comparison
 *       * i == 0; minIndex == 1; e j = 5 => arr[j] == 23 < arr[minIndex] == 0 => false => minIndex;
 *       ! i <-----------> j
 *       ![5, 0, 3, 8, 1, 23, 4234, 5435]
 *       =======================
 *       !      TEST
 *
 *todo       comparison
 *       * i == 0; minIndex == 1 ; e j = 6 => arr[j] == 4234 < arr[minIndex] == 0 => false => minIndex;
 *       ! i <---------------> j
 *       ![5, 0, 3, 8, 1, 23, 4234, 5435]
 *       =======================
 *
 *       =======================
 *       !      TEST
 *
 *todo       comparison
 *       * i == 0; minIndex == 1; e j = 7 => arr[j] == 5435 < arr[minIndex] == 0 => false => minIndex;
 *       ! i <--------------------> j
 *       ![5, 0, 3, 8, 1, 23, 4234, 5435]
 *       =======================
 *
 *  todo verify i is !== minIndex ?
 *      *  aux = arr[i] == 5; aux == 5;
 *      *  arr[i] = arr[minIndex] == 0 ;
 *      *  arr[minIndex] = aux;
 *      ![0, 5, 3, 8, 1, 23, 4234, 5435]
 *  ---------------------------------------------
 *
 *  ----------------------------------------------
 *  todo                  Step 1
 *
 *  todo external for loop
 *    *  i = 1;
 *    *  minIndex = i == 1;
 *    todo internal for loop
 *      * j = 1 + i => j == 2;
 *    =======================
 *       !      TEST
 *
 *todo       comparison
 *       * i == 1; minIndex = i == 1; e j = 2 => arr[j] == 3 < arr[minIndex] == 5 => true => minIndex = j == 2;
 *       !    i<->j
 *       ![0, 5, 3, 8, 1, 23, 4234, 5435]
 *   =======================
 *   =======================
 *
 *       !      TEST
 *
 *todo       comparison
 *       * i == 1; minIndex == 2; e j = 3 => arr[j] == 8 < arr[minIndex] == 3 => false => minIndex ;
 *       !    i<--->j
 *       ![0, 5, 3, 8, 1, 23, 4234, 5435]
 *   =======================
 *   =======================
 *
 *       !      TEST
 *
 *todo       comparison
 *       * i == 1; minIndex == 2; e j = 4 => arr[j] == 1 < arr[minIndex] == 3 => true => minIndex = j == 4 ;
 *       !    i<------>j
 *       ![0, 5, 3, 8, 1, 23, 4234, 5435]
 *   =======================
 *   =======================
 *
 *       !      TEST
 *
 *todo       comparison
 *       * i == 1; minIndex == 4; e j = 5 => arr[j] == 23 < arr[minIndex] == 1 => false => minIndex;
 *       !    i<--------->j
 *       ![0, 5, 3, 8, 1, 23, 4234, 5435]
 *   =======================
 *  todo verify i is !== minIndex ?
          aux = arr[i] == 5; aux == 5;
          arr[i] = arr[minIndex] == 1 ;
          arr[minIndex] == 1 = aux;
 *  ---------------------------------------------
 *
 *========================================================================**/

console.log(order);
