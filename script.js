
let usuarios = [];
let senhas = [];
function carregarDados() {    
}
carregarDados();
document.getElementById('paraCadastro')
     novoUsuario = document.getElementById('novoUsuario').value;
    novaSenha = document.getElementById('novaSenha').value;
    
    if (usuarios === novoUsuario) {
        alert('Usuário já existe!');
        return;
    }

    usuarios.push(novoUsuario);
    senhas.push(novaSenha);

    alert('Cadastro realizado com sucesso!');
    window.location.href = 'index.html';


document.getElementById('paraLogin')
     usuario = document.getElementById('username').value;
     senha = document.getElementById('password').value;
    
     indice = usuarios.indexOf(usuario);
    if (indice !== -1 && senhas[indice] === senha) {
        sessionStorage.setItem('usuarioLogado', usuario);
        window.location.href = 'logado.html';
    } else {
        alert('Usuário ou senha incorretos!');
    }

if (window.location.href.includes('logado.html')) {
 usuarioLogado = sessionStorage.getItem('usuarioLogado');
    if (!usuarioLogado) {
        window.location.href = 'index.html';
    } else {
        document.getElementById('usuarioLogado').innerText = usuarioLogado;
    }
}
function sair() {
    sessionStorage.removeItem('usuarioLogado');
    window.location.href = 'index.html';
}
