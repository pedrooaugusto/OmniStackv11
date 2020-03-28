const data = [{
    id: 1,
    name: 'Associação de Comedores de DOGÃO',
    title: 'Resgatar Cachorro',
    value: 345.45,
    city: 'Rio de Janeiro',
    uf: 'RJ',
    dueDate: new Date(2019, 4, 21, 14, 23)
}, {
    id: 2,
    name: 'B.W - Bird Wathcers',
    title: 'Procurar por passarinho',
    value: 135.45,
    city: 'City of London',
    uf: 'London',
    dueDate: new Date(2019, 6, 11, 11, 13)
}, {
    id: 3,
    name: 'YMFG - Ya Momma Fet and Gey',
    title: 'Encontrar a sua mãe',
    value: 12,
    city: 'New York',
    uf: 'NY',
    dueDate: new Date(2019, 4, 5, 3, 0)
},{
    id: 4,
    name: 'Greanpeace',
    title: 'Derrubar arvore que bloqueia minha vista',
    value: 1045,
    city: 'Los Angeles',
    uf: 'CA',
    dueDate: new Date(2019, 5, 12, 22, 34)
}, {
    id: 5,
    name: 'FLA Green',
    title: 'Capinar campo de futebol',
    value: 234.45,
    city: 'San Francisco',
    uf: 'CA',
    dueDate: new Date(2019, 8, 2, 0, 30)
}, {
    id: 6,
    name: 'GW - Garbage Watchers',
    title: 'Assistir a cats',
    value: -15.34,
    city: 'São Paulo',
    uf: 'SP',
    dueDate: new Date(2019, 4, 10, 10, 10)
}]


const api = {
    getIncidents: () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    headers: { 'x-total-count': 6 },
                    data
                })
            }, 1000)
        })
    }    
}

export default api
