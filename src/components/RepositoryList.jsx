import { RepositoryItem } from "./RepositoryItem";
import { useState, useEffect } from 'react';

const api = 'https://api.github.com/orgs/rocketseat/repos';
import '../styles/repositories.scss';

export function RepositoryList() {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch(api)
            .then(response => response.json())
            .then(data => setRepos(data))
    }, []);

    return(
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>
            <ul>
            { repos.map(item => <RepositoryItem key={item.id} repository={item} />) }
            </ul>
        </section>
    )
}