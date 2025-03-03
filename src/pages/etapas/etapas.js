function etapas(value)
{  
    switch(value)
    {
        case 1:
            etapa1();
        break;

    }  
}

function etapa1()
{
    let h1 = document.createElement('h1');
    h1.textContent = 'Etapas';
    document.querySelector('.article-etapas').appendChild(h1);

    var h2 = document.createElement('h2');
    h2.textContent = '16/03/2025 (Domingo)';
    document.querySelector('.article-etapas').appendChild(h2);

    var h2 = document.createElement('h2');
    h2.textContent = 'Av. Campo Sàles, 99 - Inubia Paulitsa 17760-000';
    document.querySelector('.article-etapas').appendChild(h2);

    var h2 = document.createElement('h2');
    h2.textContent = 'Inscrições ate o dia 15/03/2025 às 18:00';
    document.querySelector('.article-etapas').appendChild(h2);

    var button = document.createElement('a');
    button.textContent = 'Inscreva-se já';
    document.querySelector('.article-etapas').appendChild(button);
}