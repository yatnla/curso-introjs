# 🔧 **Instrucciones:**  
- Crea un archivo llamado `ejerciciosClase9.js`.  
- Copia y pega las consignas en comentarios (`//`) para tenerlas a mano mientras resuelves los ejercicios. 
- Resolvé los ejercicios.
- ¡Guarda los cambios y prueba tu código en la consola! 🚀

> No te olvides de hacer tus commit para actualizar tu repo remoto


### EJERCICIOS

## Atajos con operadores logicos

## **1. Evaluá las expresiones**

Analizá cada expresión con operadores lógicos y pensá cuál sería el resultado. 

Luego, ejecuta el código para verificar tu respuesta. 

Explica por qué se obtiene ese resultado en cada caso.  

```javascript
console.log(5 && 0 || "Nada");       // ?
console.log("" || "Texto");          // ?
console.log(null && "Hola");         // ?
console.log("Hola" || false);        // ?
console.log("Prueba" && "Éxito");    // ?
```

## **2. Operadores lógicos combinados**

Analizá cada caso y pensá el resultado de las siguientes expresiones que combinan los operadores && y ||. 

Luego, probá el código en la consola y fijate el resultado es igual a tu predicción😉

```javascript
console.log("JS" && null || "Aprendiendo"); 
console.log(0 && "Empezando" || 5 && "Terminando");
```
## **3. Validar formulario con operadores lógicos**

Imaginemos que tenemos un formulario. 

Queremos mostrar el mensaje `"Completado"` solo si el usuario ingresó su nombre y edad.  

Si falta alguno de los datos, debe mostrar `"Faltan datos"`.  

1. **Declara las variables:**  
   - Crea dos variables: `nombre` (tipo string) y `edad` (tipo número).  
   - Asigna diferentes valores para probar distintos casos:  
       - `nombre = "Ana"` y `edad = 25`  
     - `nombre = ""` y `edad = 0`  
     - `nombre = "Luis"` y `edad = 0`  
     - `nombre = null` y `edad = 30`  
     - `nombre = "María"` y `edad = undefined` 

2. **Realiza la comprobación:**  
   - Implementa la validación de tres formas:  
     - 🟢 **Usando un condicional `if/else`:**  
     - 🟠 **Usando un operador ternario:**  
     - 🟣 **Usando el operador nullish (`??`):** para manejar valores `null` o `undefined`.

3. **Muestra el resultado:**  
   - Usa `console.log()` para imprimir el mensaje correspondiente.  

### 🧠 **Tip:**  
Recordá que en JavaScript, algunos valores son falsy, como:  
- `0`, `""` (string vacío), `null`, `undefined`, y `false`.  
Esto afecta cómo se comportan los operadores lógicos (`&&`, `||`). 


