# Git #

## Comandos basicos ##

### Configuracion Git ###

1. `git config --global user.name "[name]"` => agrega el usuario de gitHub o una plataforma en la web que use git
2. `git config --global user.name "[email address]"` => agraga el email de github o con el que te registrate en github o alguan platafomra similar.
3. `git config --global color.ui aout` => para poner lo color para identificar los de los comandos o acciones en el repositorio.
  
### Comandos para repositorios ###

1. `git init` => inicia el repositorio.
2. `git add .` => agrega todos los archivos al repositorios.
3. `git commit -m "[msj]"` => poner un comentario en el repositorio.
4. `git remote add origin [http://repositorioEnGitParaGuardar.com]` => se gurda en un lugar remoto en la nuebe, como original.
5. `git push -u origin master` => para subir el repositorio en la plataforma si es la primera que sube.
6. `git push` => para subir el repositorio en la plataforma.
7. `git clone [http://repositorioEnGit.com]` => clonar el repositoria de una plataforma.
8. `git checkout -- .` => para restablecer las modificacion de todos los archivos al ultimo commit
9. `git status` => para ver las modificacion que se hicieron.


## servidor en GitHub ##

   1. ir a settings/GitHub Pages 
   2. cambiar la carpeta `dist/` a `docs/`
   3. cambiar las vista para visualizar la carpeta docs
   4. esperar para que se vea

