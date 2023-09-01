


//Opgave 1: objekt
const person = {
    navn: 'Alice',
    alder: '37',
    job: 'Massør',
    beskrivelse: function() {
        return this.navn + " er " + this.alder + " år gammel og arbejder som " + this.job;
    }
}
console.log(person.navn, person.alder, person.job);


//Opgave 2: Objektfelter
const person2 = {
    navn: 'Alice',
    alder: '37',
    job: 'Massør',
    beskrivelse: function() {
        return this.navn + " er " + this.alder + " år gammel og arbejder som " + this.job;
    }
}
console.log(person2.beskrivelse());


//Opgave 3: Flere objekter
const personer = [
    { navn: 'Alice', alder: 37, job: 'massør' },
    { navn: 'Peter', alder: 30, job: 'Ingeniør' },
    { navn: 'Rikke', alder: 35, job: 'Lærer' }
  ];

  const navne = personer.map(personen => {
    return { navn: personen.navn}
});
console.log(navne);


//Opgave 4: Indlejrede objekter
const bil = [
    {mærke: 'BMW', model: 'X5', år: '2020'},
    {navn: 'Peter', alder: '30', bil: 'BMW'}
];

console.log(bil[1].bil);


//Opgave 5: Objektkopiering
const copyPerson = Object.assign({}, person, { alder: 38 });

console.log( " alder er ændret fra " + copyPerson.alder + " til " + person.alder + " år. ");