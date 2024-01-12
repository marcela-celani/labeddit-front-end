const commentsDB = [
  {
    id: 'c001',
    post_id: 'p001',
    creator_id: 'u001',
    content: 'Não posso falar por todos, mas usar Linux ajudou meu pc a ter uma performance melhor (e evitou que eu precisasse comprar um novo)',
    likes: 5,
    dislikes: 10,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    creator_name: 'alexcasaco2'
  },
  {
    id: 'c002',
    post_id: 'p001',
    creator_id: 'u002',
    content: 'Não é a maioria, já vi umas enquetes, inclusive nesse sub se não me engano, onde Windows ganhava na qntd de usuários.',
    likes: 35,
    dislikes: 10,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    creator_name: 'inacion33'
  },
  {
    id: 'c003',
    post_id: 'p001',
    creator_id: 'u001',
    content: 'Linux é rápido, tem várias opções pra diferentes gostos.',
    likes: 15,
    dislikes: 20,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    creator_name: 'alexcasaco2'
  },
];

export default commentsDB