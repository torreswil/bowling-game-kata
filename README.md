Bowling Game Kata
=================
> El clásico del tío Bob implementado en * JavaScript *

[bowling-score]: http://www.wpclipart.com/recreation/sports/bowling/bowling_scoresheet_example.png "bowling score card"


## Bolos de puntuación

![Bowling scoreboard][bowling-score]

El juego consta de 10 cuadros como se muestra arriba. En cada cuadro el jugador tiene
Dos oportunidades para derribar 10 pines. La puntuación para el cuadro es el total
número de pines derribados, más bonificaciones por golpes y repuestos.

Un "spare" es cuando el jugador derriba los 10 pines en dos intentos. La bonificación por
ese cuadro es el número de pines derribados por el próximo rollo. Entonces en el cuadro 3
arriba, el puntaje es 10 (el número total derribado) más un bono de 5 (el
número de pines derribados en el próximo rollo).

Un "strike" es cuando el jugador derriba los 10 pines en su primer intento. El bono
para ese cuadro es el valor de las siguientes dos bolas rodadas.

En el décimo cuadro, un jugador que tira un repuesto o golpe puede tirar el extra
bolas para completar el marco. Sin embargo, no se pueden rodar más de tres bolas
décimo cuadro.


## Los requisitos

* Escriba la clase "BowlingGame" que tiene dos métodos
	- * rollo (alfileres) *
		- Se llama cada vez que el jugador tira una pelota. El argumento es el número de pines derribados.
	- *Puntuación()*
		- Llamado solo después del final del juego. Devuelve la puntuación total del juego.


## Sesión de diseño rápido

Un juego  
Un juego tiene 10 cuadros.  
Un marco tiene una o dos rodadas.  
El décimo cuadro tiene dos o tres rodadas. Es diferente de todos los otros cuadros.  
La función de puntaje debe recorrer en iteración todos los cuadros y calcular todos sus puntajes  
La puntuación de un repuesto o una huelga depende del sucesor de cuadros

