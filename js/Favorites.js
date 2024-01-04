// classe qu vai conter logica dos dados 
//como os dados serao estruturados

export class Favorites{
    constructor(root){
        this.root = document.querySelector(root)
        this.load()

    }

    load() {
        this.entries = [
            {
                login: 'jessica-Pires' , 
                name: 'Jessica Pires', 
                public_repos: '34' , 
                followers: '3'
            },
            {
                login: 'maykbrito' , 
                name: 'Mayk Brito', 
                public_repos: '76' , 
                followers: '14.544'
            }
        ]
    }


}

//classe que vai criar a visualixzação e eventos do html

export class FavoritesView extends Favorites{
    constructor(root){
        super(root)

        this.tbody = this.root.querySelector('table tbody')


        this.update()
    }

    update(){
        this.removeAllTr()

        this.entries.forEach(user => {
            const row = this.createRow()

            row.querySelector('.user img').src = `https://github.com/${user.login}.png`
            row.querySelector('.user img').alt = `Imagem de ${user.name}`
            row.querySelector('.user p').textContent = user.name
            row.querySelector('.user span').textContent = user.login
            row.querySelector('.repositories').textContent = user.public_repos
            row.querySelector('.followers').textContent = user.followers
            



            this.tbody.append(row)
        })
    }

    createRow(){
        const tr = document.createElement('tr')

        tr.innerHTML = `
        
                <td class="user">
                    <img src="https://github.com/jessica-pires.png" alt="Imagem de jessica">
                    <a href="https://github.com/jessica-pires" target="_blank">
                        <p>Jéssica Pires</p>
                        <span>jp</span>
                    </a>
                </td>
                <td class="repositories">34</td>
                <td class="followers">3</td>
                <td class="remove"><button>&times;</button></td>

        
        `
        return tr

    }


    removeAllTr(){
        

        this.tbody.querySelectorAll('tr').forEach((tr) =>{
            tr.remove()
        })

    }
}