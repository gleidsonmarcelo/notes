# Notes - Gerar de scripts para chamados

## Ambiente de Desenvolvimento Windows 10 - Flask + Docker

* Habilitando o WSL 2 - Subsistema Windows para Linux - no Windows 10

No PowerShell executar os seguintes comandos:

* Habilitar o Subsistema do Windows para Linux:

~~~powershell
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
~~~

* Habilitar o recurso de máquina virtual:

~~~powershell
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
~~~

Após realizar o procedimento reiniciar o computador.

* Realizar download e instalação do pacote de atualização do kernel do Linux:

[Link para Download - WSL Update x64](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi)

Após realziar o procedimento reiniciar o computador.

* Habiliar a execução de scripts do PowerShell no computador:

~~~powershell
Set-ExecutionPolicy Unrestricted
~~~

* Definindo a versão padrão do WSL.

~~~powershell
wsl --set-default-version 2
~~~

* Realizar download e instalação do Docker Desktop:

[Link para Download - Docker Desktop](https://desktop.docker.com/win/stable/amd64/Docker%20Desktop%20Installer.exe?utm_source=docker&utm_medium=webreferral&utm_campaign=dd-smartbutton&utm_location=header)

* Após a instalação reiniciar o computador e verificar atualizações.

* Realizar download e instalação do Node.JS:

[Link para Download - Node.JS](https://nodejs.org/dist/v15.14.0/node-v15.14.0-x64.msi)

* Realizar download e instalação do Python:

[Link para Download - Python](https://www.python.org/ftp/python/3.9.4/python-3.9.4-amd64.exe)

* Realizar download e instalação do Visual Studio Code:

[Link para Download - Visual Studio Code](https://az764295.vo.msecnd.net/stable/3c4e3df9e89829dce27b7b5c24508306b151f30d/VSCodeSetup-x64-1.55.2.exe)

* Realizar download e instalação do Git:

[Link para Download - Git](https://github-releases.githubusercontent.com/23216272/212f2d80-8eef-11eb-8d96-348135754fca?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20210416%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210416T233314Z&X-Amz-Expires=300&X-Amz-Signature=0c78808bfe33455af0beeb1f362c49f2a190f96c931b1b429195e079b9f10d3e&X-Amz-SignedHeaders=host&actor_id=0&key_id=0&repo_id=23216272&response-content-disposition=attachment%3B%20filename%3DGit-2.31.1-64-bit.exe&response-content-type=application%2Foctet-stream)

* Realizar download e instalação do Azure CLI:

[Link para Download - Azure CLI](https://azcliprod.blob.core.windows.net/msi/azure-cli-2.22.0.msi)

* Realizar download e instalação do InkScape:

[Link para Download - Inkscape](https://media.inkscape.org/dl/resources/file/inkscape-1.0.2-2-x64.msi)

* Após a instalação reiniciar o computador:

### Verificando instalações

* No PowerShell executar os seguintes comandos:

~~~powershell
1. node --version
2. npm --version
3. python --version
4. pip --version
5. git --version
6. docker --version
7. az --version
~~~

* Abrir o Visual Studio Code e realizar as confiruações para iniciar o desenvolvimento do projeto:

1. Abrir o Visual Studio Code;
2. Abrir um terminal - Comando "Crtl + '";
3. Realizar login na plataforma do Azure com Azure CLI.

~~~powershell
az login
~~~

* Após o login na plataforma do Azure realizar a instalação das extenções do Visual Studio Code:

### Extenções do Visual Studio Code

0. Remote - WSL
1. Azure App Serive
2. Azure Account
3. Azure CLI Tools
4. EditorConfig for VS Code
5. Auto Rename Tag
6. Bracket Pai Colorizer
7. Bookmarks
8. GitLens - Git supercharged
9. Git History
10. Bootstrap 4, Font awesome 4, Font Awesome 5 Free & Pro snippets
11. Python
12. Docker
13. ESLint
14. Live Server
15. Color Highlight
16. Dracula Official
17. Material Icon Theme
18. Path Intellisense
19. Debugger for Chrome
20. Markdown All in One
21. Markdown Lint
22. Remote Containers
23. Remote Development

### Configuração do Git

~~~powershell
1. git config --global user.name "username"
2. git config --global user.email email@dominio
3. git config --global core.editor code
~~~

### Instalação e Configuração da fonte Fira Code

* Realizar donwload e instalação da fonte Fira Code:

[Link para Download - Fira Code](https://github.com/tonsky/FiraCode/releases/download/5.2/Fira_Code_v5.2.zip)

* Extrair e instalar fonte Fira Code:

1. Abrir o Visual Studio Code;
2. Com o comanado "Ctrl + Shift + p" abrir a Command Palette;
3. Buscar a opção: Preferences:Open Settings (JSON);
4. Adicionar e substiutir as seguintes configurações.

~~~json
{
    "workbench.colorTheme": "Dracula",
    "workbench.iconTheme": "material-icon-theme",
    "editor.fontFamily": "Fira Code",
    "editor.fontSize": 14,
    "editor.fontLigatures": true,
    "editor.renderLineHighlight": "gutter",
    "terminal.integrated.fontSize": 14,
    "workbench.startupEditor": "newUntitledFile"
}
~~~

## Iniciar projeto

* Criar pasta do projeto e abrir no Visual Studi Code:

* iniciar o Git:

~~~powershell
git init
~~~

* Criar o .editorconfig com as seguintes configurações:

~~~.editorconfig
# EditorConfig is awesome: https://EditorConfig.org

# top-most EditorConfig file
root = true

[*]
indent_style = space
indent_size = 4
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
~~~

* iniciar o npm:

~~~powershell
npm init
~~~

* Baixar e instalar o sass e Eslint no modo global

~~~powershell
npm install -g sass eslint
~~~

* Verificar instalação do sass e eslint:

~~~powershell
1. sass --version
2. eslint --version
~~~

* Baixar e instalar o virtualenv e pylint:

~~~powershell
pip install vitualenv pylint
~~~

* Verificar a instalação do virtualenv e pylint:

~~~powershell
1. virtualenv --version
2. pylint --version
~~~

* Criar ambiente virtual python:

~~~powershell
virtualenv venv
~~~

* Iniciando ambiente virutal python:

~~~powershell
.\venv\scripts\activate
~~~

* Baixar e instalar o Flask no ambiente virtual e gerando arquivo de requerimentos:

~~~powershell
1. pip install flask
2. pip freeze > requirements.txt
~~~

* Instalação do bootstrap via npm:

~~~powershell
npm install boostrap jquery popper.js
~~~

* Criar .gitignore com as seguintes configurações:

~~~.gitignore
# Node
node_modules
# Python
venv
__pycache__
~~~

* Iniciar eslint - apenas verificação de syntax:

~~~powershell
eslint --init
~~~
