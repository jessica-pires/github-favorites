export class GithubUser{
    static search(username){
    const endpoint = `api.github.com/users/${username}`

    return fetch(endpoint)
    .then(data => data.json())
    .then(data =>{
        return {
            login: data.login,
            name: data.name,
            public_repos : data.public_repos,
            followers: data.followers
        }
    } )
    }
}






// classe qu vai conter logica dos dados 
//como os dados serao estruturados

export class Favorites{
    constructor(root){
        this.root = document.querySelector(root)
        this.load()

        GithubUser.search('')
        .then(user => )

    }

    load() {
        this.entries = JSON.parse(localStorage.getItem('github-favorites:')) || []
    }

    delete(user){
        const filteredEntries = this.entries
        .filter(entry => entry.login !==user.login) 

        this.entries = filteredEntries
        this.update()
    }


}

//classe que vai criar a visualização e eventos do html

export class FavoritesView extends Favorites{
    constructor(root){
        super(root)

        this.tbody = this.root.querySelector('table tbody')


        this.update()
    }



    onadd(){
        const addButton = this.root.querySelector('.search button')
        addButton.onclick = () =>{
            
        }
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
            row.querySelector('.remove').onclick = () => {
                const isOk = confirm('Tem certeza que deseja deletar essa linha?')
                if(isOk == true){
                    this.delete(user)
                }
            }
            



            this.tbody.append(row)
        })
    }


    //criando html 
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