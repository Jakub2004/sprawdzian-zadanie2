function oblicz(){
    let liczba=document.getElementById("Cyfra1").value;
    wynik=""
    binarna=""
    while(liczba>0){
        modulo=liczba%2
        wynik=wynik+modulo
        liczba=Math.floor(liczba/2)
    }
    document.getElementById("wynik").value=wynik;
}