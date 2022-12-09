# ImpresoraAl100


##Pasos para ejecutar el archivo
1. yarn -> para cargar los paquetes , es decir generar el fichero *node_module*.
2. cd android -> para entrar  a la carpeta de configuracion de android
3. ejecutar `gradlew clean` -> para limpiar todo para la ejecucion de *yarn* *android*
si el gradlew clean, da un error de los protocolos HTTP, seguir los siguientes pasos:

1.    Buscar en la carpeta node_module, el archivo de la libreria **react-native-bluetooth-escpos-printer**, luego dentro de ese fichero ir `android/build.gradel`.

2.    Cambiar todos los http -> por https. Guiarse en el ejemplo del codigo ya cambiado que se presenta a continuacion. 
![code](https://user-images.githubusercontent.com/88470677/206703239-79fcf7f9-0547-4a45-a6a6-d5978decdc06.png)

4.Volver a ejecutar el comando   `gradlew clean`, y espera el **build successful**.

5. Finalmente ejecutar `yarn android`.
