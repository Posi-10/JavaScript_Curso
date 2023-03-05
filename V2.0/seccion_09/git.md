# Git #

Es un conrtolador de versiones, que nospermite manegra las vesiones o modificaciones de un proyecto si por alguna razon tubimos un error de capa 8 podamos regresar antes de que tengamos el error para poder corregir y modificar

## Comandos basicos ##

### Configuracion Git ###

1. `git config --global user.name "[name]"` => agrega el usuario de gitHub o una plataforma en la web que use git
2. `git config --global user.name "[email address]"` => agraga el email de github o con el que te registrate en github o alguan platafomra similar.
3. `git config --global color.ui aout` => para poner lo color para identificar los de los comandos o acciones en el repositorio.
  
### Comandos para repositorios ###

1. `git init` => inicia el repositorio.
2. `git add .` => agrega todos los archivos al repositorios.
3. `git reset .` => regresa tolos elementos que se agregaron antes de subir
4. `git commit -m "[msj]"` => poner un comentario en el repositorio.
5. `git checkout -- .` => se recontruyen los archivo igual al ultimo commit subido.
6. `git log` => muestra todos los commit.
7. `git commit --amend` => Permite editar el ultimo commit: **i** para insetra el nuevo comentario, para salir se tiene que precionar la tecla **ESC** y poniendo ***:wq!*** para indicar(**:**) que lo escrito(**w**) se guarde se salga(**q**) y que sea imedaiantamente(**!**).
8. `git checkout -b [nameBranch]` => permite crear una nueva rama y que nos pasemos a esa rama creada.
9. `git branch` => muestra las ramas creadas en el proyecto.
10. `git checkout [nameBranch]` => nos permite cambiar de ramas ya cradas.
11. `git merge [nameBranch]` => nos permite unir la rama selecionada en la rama que estemos actualmente.
12. `git branch -d [nameBranch]` => borra la rama seleccionada.
13. `git remote add origin [http://repositorioEnGitParaGuardar.com]` => se gurda en un lugar remoto en la nuebe, como original.
14. `git push -u origin master` => para subir el repositorio en la plataforma si es la primera que sube.
15. `git push` => para subir el repositorio en la plataforma.
16. `git clone [http://repositorioEnGit.com]` => clonar el repositoria de una plataforma.
17. `git status` => para ver las modificacion que se hicieron.
18. `git commit -am "[msj]"` => agrega y crea un comentario el en repositorio al a vez.

## Gitignore ##

Es el archivo que indicamos que archivos no van a ser subidos al controlador de archivos


## servidor en GitHub ##

   1. ir a settings/GitHub Pages 
   2. cambiar la carpeta `dist/` a `docs/`
   3. cambiar las vista para visualizar la carpeta docs
   4. esperar para que se vea

