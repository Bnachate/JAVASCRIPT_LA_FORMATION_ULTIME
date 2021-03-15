/* let monMap = new Map([
    ['prenom', 'Luffy'],
    ['nom', 'Monkey .D']
]);

monMap.set('poste', 'capitaine d\'équipage')
monMap.delete('poste');
console.log(monMap) */

let utilisateurs = new Map();

utilisateurs.set('Monkey D. Luffy', {
    email: 'luffy@gmail.com',
    poste: 'Capitaine'
});

utilisateurs.set('Roronoa Zorro', {
    email: 'zorro@gmail.com',
    poste: 'bras droit'
})

console.log(utilisateurs)