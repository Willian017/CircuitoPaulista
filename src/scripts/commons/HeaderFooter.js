class Header extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <header>
                <a href="index.html"><img src="src/assets/images/Icones/LogoCircuitoBranco.png" alt="Logo-Circuito-Paulista"></a>
                <nav>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="src/pages/calendario/calendario.html">Calendario</a></li>
                        <li><a href="src/pages/regulamento/regulamento.html">Regulamento</a></li>
                        <li><a href="https://api.whatsapp.com/send?phone=5518996625041">Contato</a></li>
                    </ul>
                </nav>
            </header>
        `;
    }
}

customElements.define('index-header',Header);

class Header2 extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <header>
                <a href="index.html"><img src="../../assets/images/Icones/LogoCircuitoBranco.png" alt="Logo-Circuito-Paulista"></a>
                <nav>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="public_html/src/pages/calendario/calendario.html">Calendario</a></li>
                        <li><a href="src/pages/regulamento/regulamento.html">Regulamento</a></li>
                        <li><a href="https://api.whatsapp.com/send?phone=5518996625041">Contato</a></li>
                    </ul>
                </nav>
            </header>
        `;
    }
}

customElements.define('pages-header',Header2);

class Footer extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <footer class="footer-principal">
                <div class="div-principal-footer">
                    <div>
                        <a href="index.html"><img src="src/assets/images/LogoCircuitoBranco.png"
                                alt="Logo-Circuito-Paulista"></a>
                        <div>
                            <a href="https://api.whatsapp.com/send?phone=5518996625041" target="_blank"><img
                                    src="src/assets/images/WhatsLogo.png" alt="Logo Whatsapp"></a>
                            <a href="https://www.instagram.com/cpdamas/" target="_blank"><img
                                    src="src/assets/images/InstaLogo.jpg" alt="Logo Intagram"></a>
                            <a href="mailto:circuitopaulistadamas@gmail.com?subject=Minha+Etapa&body=Ol%C3%A1,+gostaria+de+possuir+uma+Etapa+do+Circuito+Paulista+de+Damas+no+meu+Municipio"
                                target="_blank"><img src="src/assets/images/EmailLogo.png" alt="Logo Email"></a>
                        </div>
                    </div>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="https://api.whatsapp.com/send?phone=5518996625041">Fale Conosco</a></li>
                        <!-- <li><a href="src/pages/sobre/sobre.html">Nossa Historia</a></li> -->
                    </ul>
                    <ul>
                        <li><a href="src/pages/calendario/calendario.html">Calendario</a></li>
                        <li><a href="src/pages/regulamento/regulamento.html">Regulamento</a></li>
                        <li><a href="https://docs.google.com/spreadsheets/d/19hBAViRDvKqxv6zAVgy-WGJUabcBzO1sXU7J4VhF3e8/edit?usp=sharing"
                                target="_blank">Classificação</a>
                        </li>
                    </ul>
                </div>
                <p>@Circuito Paulista de Damas 2025 - Todos os direitos reservados <br><br> Desenvolvido com ❤️ por <a
                        href="https://github.com/Willian017" target="_blank">Willian</a></p>
            </footer>
        `;
    }
}

customElements.define('main-footer',Footer);